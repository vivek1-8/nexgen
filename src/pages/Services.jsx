import { Link } from 'react-router-dom'
import {
  Check,
  ArrowRight,
  Sparkles,
  Layers,
  Building2,
  ShoppingCart,
  Stethoscope,
  Code2,
  Briefcase,
  RefreshCw,
  SearchCheck,
  ArrowUpRight,
} from 'lucide-react'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import CTASection from '../components/CTASection.jsx'
import services from '../data/services.js'

// Map service IDs to specialized Lucide icons
const iconMap = {
  business: Layers,
  corporate: Building2,
  ecommerce: ShoppingCart,
  healthcare: Stethoscope,
  webapps: Code2,
  portfolio: Briefcase,
  redesign: RefreshCw,
  seo: SearchCheck,
}

// Map service IDs to rich accent colors
const colorMap = {
  business: { badge: 'badge-orange', border: 'hover:border-orange/60', text: 'text-orange', glow: 'hover:shadow-glow-orange' },
  corporate: { badge: 'badge-coral', border: 'hover:border-coral/60', text: 'text-coral', glow: 'hover:shadow-glow-orange' },
  ecommerce: { badge: 'badge-lime', border: 'hover:border-lime/60', text: 'text-lime', glow: 'hover:shadow-glow-lime' },
  healthcare: { badge: 'badge-lime', border: 'hover:border-lime/60', text: 'text-lime', glow: 'hover:shadow-glow-lime' },
  webapps: { badge: 'badge-orange', border: 'hover:border-orange/60', text: 'text-orange', glow: 'hover:shadow-glow-orange' },
  portfolio: { badge: 'badge-coral', border: 'hover:border-coral/60', text: 'text-coral', glow: 'hover:shadow-glow-orange' },
  redesign: { badge: 'badge-orange', border: 'hover:border-orange/60', text: 'text-orange', glow: 'hover:shadow-glow-orange' },
  seo: { badge: 'badge-lime', border: 'hover:border-lime/60', text: 'text-lime', glow: 'hover:shadow-glow-lime' },
}

export default function Services() {
  return (
    <>
      <Seo
        title="Web Development & Digital Engineering Services"
        description="Comprehensive web development services: business websites, e-commerce, corporate portals, healthcare booking, custom web applications, redesigns, and SEO."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark via-[#141414] to-charcoal pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-white/10">
        <div className="pointer-events-none absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-orange/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-grid-mesh opacity-40" />

        <div className="wrap relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange mb-6">
            <Sparkles size={14} />
            <span>Full-Spectrum Digital Engineering</span>
          </div>

          <h1 className="h-display text-white max-w-4xl">
            Websites & web applications,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-coral to-orange">
              built properly.
            </span>
          </h1>

          <p className="lede text-muted-light mt-6 max-w-2xl text-lg sm:text-xl">
            From custom business websites to full-stack web applications, every build receives dedicated design systems, robust engineering, and sub-second performance.
          </p>

          {/* Quick Jump Anchors */}
          <div className="mt-10 flex flex-wrap gap-2 text-xs font-mono">
            {services.map((s, idx) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-muted-light hover:border-orange hover:text-orange transition-colors"
              >
                0{idx + 1} {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with Alternating Cards and Rich Editorial Detail */}
      <section className="section bg-dark text-cream relative">
        <div className="wrap space-y-12">
          {services.map((s, idx) => {
            const Icon = iconMap[s.id] || Layers
            const colors = colorMap[s.id] || colorMap.business
            const isWarmCreamBg = idx % 3 === 2 // Alternating contrasting cards

            return (
              <div
                key={s.id}
                id={s.id}
                className={`scroll-mt-28 relative rounded-3xl border transition-all duration-300 p-8 sm:p-12 lg:p-14 ${
                  isWarmCreamBg
                    ? 'border-cream/20 bg-cream text-charcoal shadow-card-cream'
                    : 'border-white/10 bg-charcoal-card text-cream shadow-2xl hover:border-white/20'
                }`}
              >
                <Reveal>
                  <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                    {/* Left: Number, Icon, Title, and Category */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className={`font-mono text-sm font-bold ${isWarmCreamBg ? 'text-charcoal/60' : colors.text}`}>
                          0{idx + 1} // {s.category || 'CAPABILITY'}
                        </span>
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                            isWarmCreamBg
                              ? 'border-charcoal/15 bg-white text-charcoal'
                              : 'border-white/10 bg-white/5 ' + colors.text
                          }`}
                        >
                          <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                        </div>
                      </div>

                      <h2
                        className={`font-display text-3xl font-bold leading-tight sm:text-4xl ${
                          isWarmCreamBg ? 'text-charcoal' : 'text-white'
                        }`}
                      >
                        {s.title}
                      </h2>

                      <p
                        className={`text-base leading-relaxed ${
                          isWarmCreamBg ? 'text-charcoal/80' : 'text-muted-light'
                        }`}
                      >
                        {s.summary}
                      </p>

                      <div className="pt-4">
                        <Link
                          to={`/contact?service=${encodeURIComponent(s.title)}`}
                          className={`btn ${
                            isWarmCreamBg
                              ? 'btn-cream-primary text-sm font-bold'
                              : 'btn-orange font-bold text-dark text-sm shadow-glow-orange'
                          }`}
                        >
                          <span>Enquire About {s.title}</span>
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>

                    {/* Right: What's Included Deliverables Grid */}
                    <div className="lg:col-span-7">
                      <div
                        className={`rounded-2xl border p-6 sm:p-8 ${
                          isWarmCreamBg
                            ? 'border-charcoal/10 bg-white/80'
                            : 'border-white/10 bg-charcoal/60'
                        }`}
                      >
                        <h3
                          className={`font-display text-xs font-bold uppercase tracking-wider mb-6 ${
                            isWarmCreamBg ? 'text-charcoal/70' : 'text-muted'
                          }`}
                        >
                          Core Deliverables & Specifications
                        </h3>

                        <ul className="grid gap-4 sm:grid-cols-2">
                          {s.includes.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex items-start gap-3 text-sm leading-snug"
                            >
                              <div
                                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                                  isWarmCreamBg ? 'bg-charcoal text-cream' : 'bg-lime text-dark'
                                }`}
                              >
                                <Check size={12} strokeWidth={3} aria-hidden="true" />
                              </div>
                              <span className={isWarmCreamBg ? 'text-charcoal font-medium' : 'text-cream'}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            )
          })}

          {/* Custom Requirement Callout */}
          <div className="rounded-3xl border border-dashed border-white/20 bg-charcoal/40 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
            <h3 className="font-display text-2xl font-bold text-white">
              Have a unique project that spans multiple services?
            </h3>
            <p className="text-muted-light text-base leading-relaxed">
              We frequently architect hybrid systems—combining e-commerce storefronts with custom appointment portals, or corporate brand sites with member dashboards.
            </p>
            <div className="pt-2">
              <Link to="/contact" className="btn btn-dark text-sm">
                <span>Tell Us What You're Building</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to turn your project requirements into reality?"
        description="Schedule a technical discussion with our lead engineers. We'll provide transparent scoping, architecture suggestions, and a clear timeline."
      />
    </>
  )
}
