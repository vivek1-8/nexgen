import { Link } from 'react-router-dom'
import { Mail, ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react'
import siteConfig from '../data/siteConfig.js'
import { mailto, whatsappLink } from '../lib/contact.js'

export default function CTASection({
  title = "Have a project in mind? Let's build something exceptional.",
  description = "Tell us about your requirements, timeline, and goals. We will provide honest technical guidance, clear scope, and an actionable roadmap.",
}) {
  const wa = whatsappLink()

  return (
    <section className="relative overflow-hidden border-t border-b border-white/10 bg-gradient-to-b from-[#181818] via-dark to-[#0E0E0E] py-24 sm:py-32">
      {/* Background Glows and Accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[42rem] rounded-full bg-gradient-to-r from-orange/20 via-coral/20 to-lime/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid-mesh opacity-40" />

      <div className="wrap relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Heading and Value Props */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange">
            <Sparkles size={14} />
            <span>Ready for Launch?</span>
          </div>

          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>

          <p className="max-w-xl text-lg leading-relaxed text-muted-light sm:text-xl">
            {description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-cream/90">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-lime shrink-0" />
              <span>Direct communication with developers</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-lime shrink-0" />
              <span>Transparent scoping & fixed milestones</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-lime shrink-0" />
              <span>Tailored code with zero vendor lock-in</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-lime shrink-0" />
              <span>Fast 24-hour turnaround on enquiries</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Impact Action Box */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl border border-white/15 bg-charcoal/90 p-8 shadow-2xl backdrop-blur-md space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">Direct Agency Access</span>
              <p className="mt-1 font-display text-xl font-bold text-white">Let's Discuss Your Brief</p>
            </div>

            <div className="space-y-3">
              <Link
                to="/contact"
                className="btn btn-orange w-full py-4 text-base font-bold shadow-glow-orange hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Let's Talk</span>
                <ArrowRight size={18} />
              </Link>

              <a
                href={mailto('Project enquiry')}
                className="btn btn-dark w-full py-3.5 text-sm flex items-center justify-center gap-2"
              >
                <Mail size={16} className="text-orange" aria-hidden="true" />
                <span className="truncate">{siteConfig.email}</span>
              </a>

              {wa && (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border border-lime/30 bg-lime/10 text-lime hover:bg-lime hover:text-dark w-full py-3.5 text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  <span>Quick Chat on WhatsApp</span>
                </a>
              )}
            </div>

            <p className="text-center text-xs text-muted">
              No pressure, no hard sales pitch. Just honest technical clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
