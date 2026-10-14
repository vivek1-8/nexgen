import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  MapPin,
  ExternalLink,
} from 'lucide-react'
import Seo from '../components/Seo.jsx'
import siteConfig from '../data/siteConfig.js'
import services from '../data/services.js'
import { mailto, whatsappLink } from '../lib/contact.js'

const emptyForm = { name: '', email: '', service: '', budget: '', message: '' }

function Field({ id, label, error, children }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-cream">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="text-xs font-medium text-coral">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | handoff
  const [handoff, setHandoff] = useState('')
  const hasEndpoint = Boolean(siteConfig.formEndpoint)
  const wa = whatsappLink()

  // Pre-fill service from URL if present (e.g., from Services page)
  useEffect(() => {
    const serviceParam = searchParams.get('service')
    if (serviceParam) {
      setForm((prev) => ({ ...prev, service: serviceParam }))
    }
  }, [searchParams])

  const setField = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value })
    if (errors[key]) {
      setErrors({ ...errors, [key]: '' })
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Please enter a valid email address.'
    if (form.message.trim().length < 10) newErrors.message = 'Please share a brief description (at least 10 characters).'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const composeMessage = () =>
    `Hello NexGen Technology,\n\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service || 'Not specified'}\nBudget: ${form.budget || 'Not specified'}\n\nProject Scope & Goals:\n${form.message}`

  const submitToService = async (ev) => {
    ev.preventDefault()
    if (ev.target.company?.value) return // honeypot
    if (!validate()) return
    setStatus('sending')
    try {
      const res = await fetch(siteConfig.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Bad network response')
      setStatus('sent')
      setForm(emptyForm)
    } catch {
      setStatus('error')
    }
  }

  const viaEmail = () => {
    if (!validate()) return
    window.location.href = mailto(`Project enquiry from ${form.name}`, composeMessage())
    setHandoff('Email Client')
    setStatus('handoff')
  }

  const viaWhatsApp = () => {
    if (!validate()) return
    window.open(whatsappLink(composeMessage()), '_blank', 'noopener,noreferrer')
    setHandoff('WhatsApp')
    setStatus('handoff')
  }

  const errAttr = (k) => ({
    'aria-invalid': Boolean(errors[k]),
    'aria-describedby': errors[k] ? `${k}-err` : undefined,
  })

  return (
    <>
      <Seo
        title="Contact NexGen Technology — Start Your Web Project"
        description="Discuss your web development project with NexGen Technology. Reach our engineers by email, WhatsApp, or through the direct enquiry form."
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-dark via-[#141414] to-charcoal pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-orange/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-grid-mesh opacity-40" />

        <div className="wrap relative z-10">
          <div className="grid gap-14 lg:grid-cols-12">
            {/* Left Column: Studio Contact & Availability */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange mb-6">
                  <Sparkles size={14} />
                  <span>Let's Build Together</span>
                </div>

                <h1 className="h-display text-white">
                  Tell us about your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-coral">
                    project.
                  </span>
                </h1>

                <p className="lede text-muted-light mt-6 text-base sm:text-lg">
                  Whether you're starting from scratch or re-engineering an existing platform, our developers will analyze your requirements and provide clear technical guidance.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="rounded-3xl border border-white/10 bg-charcoal-card p-6 sm:p-8 space-y-6 shadow-xl">
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-muted">
                  Direct Inquiries
                </h3>

                <div className="space-y-4">
                  <a
                    href={mailto('Project enquiry')}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-cream transition-all duration-200 hover:border-orange hover:bg-white/10 group"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange group-hover:scale-110 transition-transform">
                      <Mail size={20} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted">Email our engineering team</div>
                      <div className="truncate font-semibold text-white group-hover:text-orange transition-colors">
                        {siteConfig.email}
                      </div>
                    </div>
                  </a>

                  {wa && (
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-cream transition-all duration-200 hover:border-lime hover:bg-white/10 group"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime/10 text-lime group-hover:scale-110 transition-transform">
                        <MessageCircle size={20} aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-muted">Direct WhatsApp Chat</div>
                        <div className="font-semibold text-white group-hover:text-lime transition-colors">
                          {siteConfig.phoneDisplay ? siteConfig.phoneDisplay : 'Instant Message'}
                        </div>
                      </div>
                    </a>
                  )}

                  {siteConfig.location && (
                    <div className="flex items-center gap-3 pt-2 text-xs text-muted">
                      <MapPin size={16} className="text-orange shrink-0" />
                      <span>{siteConfig.location}</span>
                    </div>
                  )}
                </div>

                {/* Studio Commitments */}
                <div className="border-t border-white/10 pt-5 space-y-2.5 text-xs text-muted-light">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-lime" />
                    <span>Prompt reply guaranteed within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-lime" />
                    <span>Strict confidentiality & NDA compliant</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Project Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/15 bg-charcoal/90 p-8 sm:p-10 shadow-2xl backdrop-blur-md">
                {status === 'sent' ? (
                  <div role="status" className="rounded-2xl border border-lime/30 bg-lime/10 p-8 text-center space-y-4">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-lime text-dark">
                      <CheckCircle2 size={32} />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-white">Message Received</h2>
                    <p className="text-sm text-cream/90 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting NexGen Technology. Our engineering team has received your enquiry and will respond to <strong className="text-white">{form.email}</strong> within 24 hours.
                    </p>
                    <button
                      type="button"
                      className="btn btn-dark mt-4"
                      onClick={() => setStatus('idle')}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    noValidate
                    onSubmit={hasEndpoint ? submitToService : (e) => e.preventDefault()}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="font-display text-2xl font-bold text-white">Project Details</h2>
                      <p className="text-xs text-muted mt-1">Fill in the parameters below to help us understand your vision.</p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field id="name" label="Your Name *" error={errors.name}>
                        <input
                          id="name"
                          name="name"
                          autoComplete="name"
                          required
                          className="field"
                          placeholder="e.g. Alex Morgan"
                          value={form.name}
                          onChange={setField('name')}
                          {...errAttr('name')}
                        />
                      </Field>

                      <Field id="email" label="Email Address *" error={errors.email}>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="field"
                          placeholder="alex@company.com"
                          value={form.email}
                          onChange={setField('email')}
                          {...errAttr('email')}
                        />
                      </Field>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field id="service" label="Service Needed">
                        <select
                          id="service"
                          name="service"
                          className="field"
                          value={form.service}
                          onChange={setField('service')}
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                          <option value="Custom Software Solution">Custom Software Solution</option>
                          <option value="Other / Not Sure">Other / Not Sure</option>
                        </select>
                      </Field>

                      <Field id="budget" label="Estimated Budget">
                        <select
                          id="budget"
                          name="budget"
                          className="field"
                          value={form.budget}
                          onChange={setField('budget')}
                        >
                          <option value="">Select a range</option>
                          {siteConfig.budgets.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    <Field id="message" label="Project Scope & Requirements *" error={errors.message}>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="field resize-y font-sans"
                        placeholder="What do you want to build, what are the key features, and what is your ideal target launch date?"
                        value={form.message}
                        onChange={setField('message')}
                        {...errAttr('message')}
                      />
                    </Field>

                    {/* Honeypot field */}
                    <input
                      type="text"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    {/* Submission Actions */}
                    <div className="border-t border-white/10 pt-4">
                      {hasEndpoint ? (
                        <button
                          type="submit"
                          disabled={status === 'sending'}
                          className="btn btn-orange w-full py-4 text-base font-bold text-dark shadow-glow-orange disabled:opacity-60 flex items-center justify-center gap-2"
                        >
                          <Send size={18} aria-hidden="true" />
                          <span>{status === 'sending' ? 'Transmitting…' : 'Submit Project Brief'}</span>
                        </button>
                      ) : (
                        <div className="space-y-4">
                          <div className="flex flex-col sm:flex-row gap-3">
                            <button
                              type="button"
                              onClick={viaEmail}
                              className="btn btn-orange flex-1 py-4 text-base font-bold text-dark shadow-glow-orange flex items-center justify-center gap-2"
                            >
                              <Mail size={18} aria-hidden="true" />
                              <span>Submit Via Email</span>
                            </button>

                            {wa && (
                              <button
                                type="button"
                                onClick={viaWhatsApp}
                                className="btn btn-dark flex-1 py-4 text-base font-semibold border-lime/30 text-lime hover:bg-lime hover:text-dark flex items-center justify-center gap-2"
                              >
                                <MessageCircle size={18} aria-hidden="true" />
                                <span>Submit Via WhatsApp</span>
                              </button>
                            )}
                          </div>
                          <p className="text-xs text-muted leading-relaxed">
                            This form pre-fills your message into your email client{wa ? ' or WhatsApp' : ''} with all selected options. Nothing is transmitted until you click send there.
                          </p>
                        </div>
                      )}

                      {/* Handoff or Error Notifications */}
                      {status === 'handoff' && (
                        <div
                          role="status"
                          className="mt-4 rounded-xl border border-lime/30 bg-lime/10 p-4 text-xs text-cream space-y-1"
                        >
                          <p className="font-semibold text-lime">
                            Message formatted in {handoff}!
                          </p>
                          <p className="text-muted-light">
                            Please click send in your application to complete delivery. If your app did not open automatically, reach us directly at{' '}
                            <a className="text-orange underline" href={`mailto:${siteConfig.email}`}>
                              {siteConfig.email}
                            </a>.
                          </p>
                        </div>
                      )}

                      {status === 'error' && (
                        <div
                          role="alert"
                          className="mt-4 rounded-xl border border-coral/30 bg-coral/10 p-4 text-xs text-coral"
                        >
                          Transmission encountered an issue. Please try again or write directly to{' '}
                          <a className="underline font-semibold" href={`mailto:${siteConfig.email}`}>
                            {siteConfig.email}
                          </a>.
                        </div>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
