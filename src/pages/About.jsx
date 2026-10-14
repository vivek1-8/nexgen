import { Link } from 'react-router-dom'
import {
  Sparkles,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Terminal,
  HeartHandshake,
  Lightbulb,
} from 'lucide-react'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import CTASection from '../components/CTASection.jsx'

const coreValues = [
  {
    icon: Lightbulb,
    title: 'Useful before impressive',
    desc: 'A website succeeds when visitors effortlessly find what they came for and take action. We determine what matters most to your audience and design strictly around real intent.',
    color: 'text-orange',
    badge: 'badge-orange',
  },
  {
    icon: Layers,
    title: 'Responsive from the first sketch',
    desc: 'We plan layouts for smartphone and ultra-wide screens simultaneously. Mobile is never an afterthought or a trimmed-down desktop view—it is engineered as a primary experience.',
    color: 'text-coral',
    badge: 'badge-coral',
  },
  {
    icon: Code2,
    title: 'Clean, maintainable code',
    desc: 'We build with React, modern JavaScript, and Tailwind CSS in a disciplined structure. That means pages load under a second and future updates are straightforward for anyone to manage.',
    color: 'text-lime',
    badge: 'badge-lime',
  },
  {
    icon: ShieldCheck,
    title: 'Honest, realistic scoping',
    desc: 'We tell you exactly what a build involves and where a simpler, cost-effective path would serve you better. We quote transparent deliverables before any contracts or coding begins.',
    color: 'text-orange',
    badge: 'badge-orange',
  },
]

const collaborationSteps = [
  {
    step: '01',
    title: 'Goal Discovery & Architecture',
    desc: 'You share your commercial targets, audience profiles, and existing brand materials. We define the page hierarchy and technical requirements together.',
  },
  {
    step: '02',
    title: 'Transparent Deliverables & Timeline',
    desc: 'We agree on what will be built—and just as importantly, what is unnecessary fluff—with fixed milestones before any design or code starts.',
  },
  {
    step: '03',
    title: 'Interactive Working Previews',
    desc: 'You review clickable prototypes and working staging environments at each phase, giving direct feedback in plain language to the engineers doing the work.',
  },
  {
    step: '04',
    title: 'Smooth Deployment & Continued Support',
    desc: 'After rigorous cross-browser testing and performance audits, we help you launch with confidence and remain directly available for future maintenance and updates.',
  },
]

const stackTools = [
  { name: 'React 18', role: 'Component UI Architecture' },
  { name: 'Vite', role: 'Next-Gen Build Tooling' },
  { name: 'Tailwind CSS', role: 'Custom Utility Styling' },
  { name: 'Framer Motion', role: 'Hardware-Accelerated Motion' },
  { name: 'Semantic HTML5', role: 'Accessibility & SEO Foundations' },
  { name: 'REST & GraphQL', role: 'Data & Service Integration' },
]

export default function About() {
  return (
    <>
      <Seo
        title="About NexGen Technology — Digital Craftsmanship & Engineering"
        description="Learn how NexGen Technology approaches web development: transparent collaboration, clean modern code, and useful websites built to last."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark via-[#141414] to-charcoal pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-white/10">
        <div className="pointer-events-none absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-orange/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-grid-mesh opacity-40" />

        <div className="wrap relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange mb-6">
            <Sparkles size={14} />
            <span>Studio Philosophy</span>
          </div>

          <h1 className="h-display text-white max-w-4xl">
            We build websites that are{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-coral to-orange">
              clear, fast, and easy to use.
            </span>
          </h1>

          <p className="lede text-muted-light mt-6 max-w-3xl text-lg sm:text-xl">
            NexGen Technology is an independent web development studio. We partner directly with ambitious business owners and founders to transform ideas into digital products that look exceptional and deliver measurable commercial results.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn btn-orange font-bold text-dark shadow-glow-orange">
              <span>Start a Project</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/work" className="btn btn-dark font-semibold">
              <span>View Our Work</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="section bg-dark text-cream relative">
        <div className="wrap">
          <div className="max-w-2xl">
            <span className="badge-lime mb-3">Our Core Principles</span>
            <h2 className="h-section text-white">
              How we approach the work
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-light leading-relaxed">
              We reject bloated templates, unreadable codebases, and unnecessary complexity. Our standards are grounded in high performance and user clarity.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {coreValues.map((val) => {
              const Icon = val.icon
              return (
                <div
                  key={val.title}
                  className="rounded-3xl border border-white/10 bg-charcoal-card p-8 sm:p-10 shadow-xl transition-all duration-300 hover:border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <span className={val.badge}>Principle</span>
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 ${val.color}`}>
                      <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-white">
                    {val.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-light">
                    {val.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Collaboration Blueprint (Warm Cream Contrasting Section) */}
      <section className="section bg-cream text-charcoal relative overflow-hidden" aria-labelledby="collaboration-heading">
        <div className="wrap relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="badge-cream">Client Partnership</span>
              <h2 id="collaboration-heading" className="h-section text-charcoal">
                Working together, every step of the journey.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-charcoal/80">
                You work directly with the developers writing your code. We pride ourselves on transparent communication, zero jargon, and keeping commitments.
              </p>
              <div className="pt-4">
                <Link to="/contact" className="btn btn-cream-primary font-bold">
                  <span>Discuss Your Project With Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {collaborationSteps.map((st) => (
                <div
                  key={st.step}
                  className="flex gap-6 rounded-2xl border-2 border-charcoal/15 bg-white/80 p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-orange hover:shadow-md"
                >
                  <span className="font-mono text-2xl font-bold text-orange shrink-0">
                    {st.step}
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="font-display text-xl font-bold text-charcoal">
                      {st.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-charcoal/80">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Foundations Strip */}
      <section className="section bg-dark text-cream border-t border-white/10 relative">
        <div className="wrap">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="badge-lime">Production Tooling</span>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Modern frontend engineering standards
            </h2>
            <p className="text-muted-light text-base leading-relaxed">
              We leverage modern, battle-tested technologies that ensure your website stays fast, secure, and easily maintainable.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {stackTools.map((tool) => (
              <div
                key={tool.name}
                className="rounded-2xl border border-white/10 bg-charcoal-card p-5 text-center shadow-lg transition-all duration-300 hover:border-orange/40 hover:-translate-y-1"
              >
                <div className="font-mono text-base font-bold text-white">{tool.name}</div>
                <div className="mt-1 text-xs text-muted leading-tight">{tool.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to discuss your website or web application?"
        description="Let's review your ideas, answer your questions, and formulate a practical plan of action."
      />
    </>
  )
}
