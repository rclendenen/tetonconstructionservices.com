import { Resend } from 'resend'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

type NodemailerError = {
  code?: string
  command?: string
  responseCode?: number
  response?: string
  message?: string
}

type ContactPayload = {
  name: string
  email: string
  phone: string
  projectType: string
  message: string
  // Optional spam trap (can be added client-side later)
  website?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>

    const name = (body.name ?? '').trim()
    const email = (body.email ?? '').trim()
    const phone = (body.phone ?? '').trim()
    const projectType = (body.projectType ?? '').trim()
    const message = (body.message ?? '').trim()

    // Basic validation
    if (!name || !email || !phone || !projectType || !message) {
      return Response.json({ ok: false, error: 'Missing required fields.' }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return Response.json({ ok: false, error: 'Invalid email address.' }, { status: 400 })
    }
    if (body.website && String(body.website).trim().length > 0) {
      // Honeypot filled => likely bot
      return Response.json({ ok: true }, { status: 200 })
    }

    const toAddress = process.env.CONTACT_TO_EMAIL || 'info@tetonconstructionservices.com'

    const subject = `New website inquiry — ${projectType}`
    const text = [
      'New contact form submission:',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Project Type: ${projectType}`,
      '',
      'Message:',
      message,
    ].join('\n')

    // Resend (recommended): no mailbox password — works when Microsoft 365 has MFA and SMTP login fails.
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const from =
        process.env.RESEND_FROM ||
        'Teton Construction Website <onboarding@resend.dev>'

      const { error } = await resend.emails.send({
        from,
        to: toAddress,
        subject,
        text,
        replyTo: email,
      })

      if (error) {
        console.error('Resend send failed', error)
        return Response.json(
          {
            ok: false,
            error: 'Failed to send message.',
            hint:
              'Check RESEND_API_KEY. Add your domain in Resend and set RESEND_FROM to an address on that domain (e.g. website@tetonconstructionservices.com).',
            code: 'RESEND',
          },
          { status: 500 }
        )
      }

      return Response.json({ ok: true }, { status: 200 })
    }

    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || '587')
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const from = process.env.SMTP_FROM || user

    if (!host || !user || !pass || !from) {
      const missing: string[] = []
      if (!host) missing.push('SMTP_HOST')
      if (!process.env.SMTP_PORT) missing.push('SMTP_PORT')
      if (!user) missing.push('SMTP_USER')
      if (!pass) missing.push('SMTP_PASS')
      if (!from) missing.push('SMTP_FROM')

      return Response.json(
        {
          ok: false,
          error: 'Email service is not configured.',
          missing,
        },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      requireTLS: port === 587,
    })

    // Fail fast with a clearer error if SMTP credentials/connection are rejected
    await transporter.verify()

    await transporter.sendMail({
      from,
      to: toAddress,
      subject,
      text,
      replyTo: email,
    })

    return Response.json({ ok: true }, { status: 200 })
  } catch (err) {
    const e = err as NodemailerError
    const code = e.code || (typeof e.responseCode === 'number' ? `SMTP_${e.responseCode}` : 'UNKNOWN')

    // Log full error to Vercel function logs (no secrets included by Nodemailer)
    console.error('Contact email failed', {
      code: e.code,
      command: e.command,
      responseCode: e.responseCode,
      message: e.message,
      response: e.response,
    })

    let hint = 'Check SMTP settings in Vercel environment variables.'
    if (code === 'EAUTH' || code === 'SMTP_535') {
      hint =
        'SMTP authentication failed. Verify SMTP_USER/SMTP_PASS, and ensure SMTP AUTH is allowed for this Microsoft 365 mailbox.'
    } else if (code === 'ETIMEDOUT' || code === 'ECONNECTION') {
      hint = 'SMTP connection failed. Verify SMTP_HOST/SMTP_PORT and that the provider allows SMTP from Vercel.'
    }

    return Response.json(
      { ok: false, error: 'Failed to send message.', code, hint },
      { status: 500 }
    )
  }
}

