import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

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

    const toAddress = process.env.CONTACT_TO_EMAIL || 'teton@tetonconstructionservices.com'

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

    await transporter.sendMail({
      from,
      to: toAddress,
      subject,
      text,
      replyTo: email,
    })

    return Response.json({ ok: true }, { status: 200 })
  } catch (err) {
    return Response.json({ ok: false, error: 'Failed to send message.' }, { status: 500 })
  }
}

