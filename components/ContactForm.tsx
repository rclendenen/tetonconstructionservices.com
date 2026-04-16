'use client'

import { useForm, ValidationError } from '@formspree/react'

const DEFAULT_FORMSPREE_ID = 'xdayepvw'

export default function ContactForm() {
  const formId =
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim() || DEFAULT_FORMSPREE_ID

  const [state, handleSubmit] = useForm(formId)

  if (state.succeeded) {
    return (
      <div className="p-4 bg-green-50 border border-green-200 rounded-md">
        <p className="text-green-800 text-sm">
          Thank you for your message! We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="hidden"
        name="_subject"
        value="Website contact form — tetonconstructionservices.com"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="input-field"
          placeholder="John Doe"
        />
        <ValidationError
          field="name"
          errors={state.errors}
          className="text-red-600 text-sm mt-1 block"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="input-field"
          placeholder="john@example.com"
        />
        <ValidationError
          field="email"
          errors={state.errors}
          className="text-red-600 text-sm mt-1 block"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="input-field"
          placeholder="(817) 555-0123"
        />
        <ValidationError
          field="phone"
          errors={state.errors}
          className="text-red-600 text-sm mt-1 block"
        />
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-neutral-700 mb-2">
          Project Type *
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          className="input-field"
        >
          <option value="" disabled>
            Select a project type
          </option>
          <option value="custom-home">Custom Home Building</option>
          <option value="renovation">Home Renovation</option>
          <option value="addition">Home Addition</option>
          <option value="commercial">Commercial Construction</option>
          <option value="office">Office Build-Out</option>
          <option value="retail">Retail Construction</option>
          <option value="other">Other</option>
        </select>
        <ValidationError
          field="projectType"
          errors={state.errors}
          className="text-red-600 text-sm mt-1 block"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="input-field resize-none"
          placeholder="Tell us about your project..."
        />
        <ValidationError
          field="message"
          errors={state.errors}
          className="text-red-600 text-sm mt-1 block"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-xs text-neutral-500 text-center">
        By submitting this form, you agree to our Privacy Policy.
      </p>
    </form>
  )
}
