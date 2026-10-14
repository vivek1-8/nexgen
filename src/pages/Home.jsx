import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Code2,
  Cpu,
  Layers,
  Zap,
  CheckCircle2,
  Smartphone,
  MessageSquare,
  Search,
  Wrench,
  ShieldCheck,
  MousePointer2,
  Terminal,
} from 'lucide-react'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import BrowserFrame from '../components/BrowserFrame.jsx'
import SafeImage from '../components/SafeImage.jsx'
import { WireframePage } from '../components/Wireframe.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import EmptyProjects from '../components/EmptyProjects.jsx'
import CTASection from '../components/CTASection.jsx'
import { featuredProjects } from '../data/projects.js'
import services from '../data/services.js'
import testimonials from '../data/testimonials.js'

const ease = [0.22, 1, 0.36, 1]

// Creative Hero Visual Composition with Floating Mockups and Tech Tags
function HeroComposition() {
  const heroProject = featuredProjects[0]

  return (
    <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute -top-12 -right-12 h-80 w-80 rounded-full bg-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-80 w-80 rounded-full bg-lime/15 blur-3xl" />

      {/* Floating Decorative Grid Wire */}
      <div className="relative z-10 pt-4 sm:pt-8 lg:pt-0">
        {/* Main Browser Window Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="relative"
        >
          <BrowserFrame
            url={heroProject?.liveUrl ? heroProject.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'nexgen-tech.studio/live'}
            theme="dark"
            className="shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border-white/20"
          >
            {heroProject ? (
              <SafeImage src={heroProject.coverImage} alt={`${heroProject.title} preview`} eager />
            ) : (
              <WireframePage variant={0} />
            )}
          </BrowserFrame>

          {/* Floating Pill: Performance Beacon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -top-4 -left-4 sm:-top-5 sm:-left-6 z-20 flex items-center gap-2 rounded-full border border-lime/40 bg-dark/90 px-3.5 py-1.5 shadow-xl backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            <span className="font-mono text-xs font-bold text-lime">99+ Core Web Vitals</span>
          </motion.div>

          {/* Floating Badge: Bespoke Architecture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 hidden sm:flex items-center gap-1.5 rounded-full border border-orange/40 bg-charcoal/90 px-3.5 py-1.5 shadow-xl backdrop-blur-md"
          >
            <Sparkles size={13} className="text-orange" />
            <span className="font-sans text-xs font-bold text-orange">Bespoke UI/UX</span>
          </motion.div>

          {/* Floating Micro Terminal Card (Bottom-Left) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-8 z-20 max-w-[280px] sm:max-w-xs rounded-2xl border border-white/15 bg-charcoal/95 p-3 sm:p-4 shadow-2xl backdrop-blur-md hidden sm:block"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono text-muted">
              <span className="flex items-center gap-1.5 text-cream">
                <Terminal size={12} className="text-orange" />
                deploy.config.ts
              </span>
              <span className="text-lime">READY</span>
            </div>
            <p className="mt-2 font-mono text-[11px] leading-relaxed text-muted-light">
              <span className="text-orange">const</span> studio = <span className="text-lime">new</span> NexGen({'{'}
              <br />
              &nbsp;&nbsp;performance: <span className="text-coral">'blazing'</span>,
              <br />
              &nbsp;&nbsp;responsive: <span className="text-lime">true</span>
              <br />
              {'}'});
            </p>
          </motion.div>

          {/* Floating Cursor Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute -bottom-4 right-6 sm:bottom-4 sm:-right-6 z-20 flex items-center gap-2 rounded-full border border-orange/30 bg-orange/95 px-3 py-1.5 shadow-glow-orange text-dark font-sans text-xs font-bold"
          >
            <MousePointer2 size={13} className="rotate-12 fill-dark text-dark" />
            <span>NexGen Creative</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// Capabilities & Technology Strip
const capabilities = [
  'React 18 & Vite',
  'Next.js Full-Stack',
  'Tailwind CSS',
  'Headless E-Commerce',
  'Custom Web Apps',
  'REST & GraphQL APIs',
  'Framer Motion',
  'Healthcare & Booking',
  '99+ Core Web Vitals',
  'UI/UX Design Systems',
]

export default function Home() {
  return (
    <>
      <Seo
        title="NexGen Technology — Award-Winning Web Development Agency"
        description="We turn ambitious ideas into exceptional digital experiences. High-performance websites, e-commerce stores, and custom web applications built for growth."
      />

      {/* =========================================================================
          1. HERO SECTION (Dark Charcoal & Almost-Black)
         ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark via-[#141414] to-charcoal pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pb-36">
        {/* Subtle grid mesh background */}
        <div className="pointer-events-none absolute inset-0 bg-grid-mesh opacity-50" />
        <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-orange/15 blur-3xl" />

        <div className="wrap relative z-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Headline and CTAs */}
            <div className="lg:col-span-7 space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange"
              >
                <Sparkles size={14} className="text-orange" />
                <span>Next-Generation Digital Agency</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease }}
                className="h-display text-white"
              >
                We turn ambitious ideas into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-coral to-orange">
                  exceptional digital
                </span>{' '}
                experiences.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16, ease }}
                className="lede text-muted-light max-w-xl text-lg sm:text-xl"
              >
                Websites, e-commerce experiences and custom applications built to help ambitious businesses stand out, convert customers, and grow without limits.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24, ease }}
                className="flex flex-col gap-4 sm:flex-row pt-2"
              >
                <Link
                  to="/work"
                  className="btn btn-orange text-base font-bold shadow-glow-orange group"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-dark text-base font-semibold group"
                >
                  <span>Let's Build Something</span>
                  <ArrowUpRight
                    size={18}
                    className="text-orange transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="flex flex-wrap items-center gap-6 pt-4 text-xs font-medium text-muted"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-lime" />
                  <span className="text-cream">Zero Templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-lime" />
                  <span className="text-cream">Direct Developer Contact</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-lime" />
                  <span className="text-cream">100% Mobile Optimized</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Creative Visual Mockup */}
            <div className="lg:col-span-5">
              <HeroComposition />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. CAPABILITIES / TECH TICKER STRIP (High Contrast)
         ========================================================================= */}
      <section className="border-t border-b border-white/10 bg-[#0E0E0E] py-6 sm:py-7 overflow-hidden">
        <div className="wrap flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-lime">
              CORE CAPABILITIES
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-xs font-mono text-muted-light">
            {capabilities.slice(0, 6).map((cap, i) => (
              <span key={cap} className="inline-flex items-center gap-2">
                <span className="text-orange">✦</span>
                <span className="text-cream font-medium">{cap}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. FEATURED PROJECTS SECTION (Contrasting Warm Cream Background)
         ========================================================================= */}
      <section className="section bg-cream text-charcoal relative overflow-hidden" aria-labelledby="featured-work-heading">
        <div className="wrap relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal/15 pb-8">
            <div>
              <div className="badge-cream mb-3">Portfolio Highlights</div>
              <h2 id="featured-work-heading" className="h-section text-charcoal">
                Featured Projects
              </h2>
              <p className="mt-3 text-lg text-charcoal/80 max-w-xl">
                Bespoke digital architecture crafted for businesses ready to establish a commanding online presence.
              </p>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-base font-bold text-charcoal hover:text-orange transition-colors group"
            >
              <span>View All Projects</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 sm:mt-16">
            {featuredProjects.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2">
                {featuredProjects.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 0.1}>
                    <ProjectCard project={p} priority={i === 0} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <EmptyProjects />
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SERVICES SECTION (Deep Charcoal with Varied Layouts)
         ========================================================================= */}
      <section className="section bg-charcoal text-cream relative overflow-hidden border-t border-b border-white/10" aria-labelledby="services-heading">
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-orange/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-grid-mesh opacity-30" />

        <div className="wrap relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-10">
            <div className="max-w-2xl">
              <span className="badge-lime mb-3">What We Build</span>
              <h2 id="services-heading" className="h-section text-white">
                Engineered for speed, built for conversion.
              </h2>
              <p className="mt-4 text-lg text-muted-light">
                We combine creative agency design with rigorous software engineering. Every build is tailored from scratch to solve your specific commercial goals.
              </p>
            </div>
            <Link
              to="/services"
              className="btn btn-orange font-bold text-dark shadow-glow-orange shrink-0"
            >
              <span>Explore All 8 Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Varied Layout: Creative Bento-Style Service Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Business & Corporate Sites (Featured Large) */}
            <div className="group relative rounded-3xl border border-white/10 bg-dark/80 p-8 shadow-xl transition-all duration-300 hover:border-orange/50 hover:shadow-glow-orange flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-orange">01 // FLAGSHIP</span>
                  <div className="h-10 w-10 rounded-2xl bg-orange/10 border border-orange/20 flex items-center justify-center text-orange">
                    <Layers size={20} />
                  </div>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white group-hover:text-orange transition-colors">
                  Business & Corporate Websites
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-light">
                  Elevate your credibility with a modern, high-speed corporate site designed to articulate your value proposition and generate qualified enquiries.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-cream/90 border-t border-white/10 pt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-lime" /> Custom design system matching your identity</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-lime" /> Clear customer conversion journeys</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-lime" /> Lightning-fast load times on every mobile device</li>
                </ul>
              </div>
              <div className="mt-8 pt-4">
                <Link to="/services#business" className="inline-flex items-center gap-2 text-xs font-bold text-orange group-hover:underline">
                  <span>View service details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2: E-Commerce Websites */}
            <div className="group relative rounded-3xl border border-white/10 bg-dark/80 p-8 shadow-xl transition-all duration-300 hover:border-coral/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-coral">02 // COMMERCE</span>
                  <div className="h-10 w-10 rounded-2xl bg-coral/10 border border-coral/20 flex items-center justify-center text-coral">
                    <Zap size={20} />
                  </div>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white group-hover:text-coral transition-colors">
                  E-Commerce Platforms
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-light">
                  Smooth storefronts engineered to maximize average order value and minimize checkout friction with instant payments and mobile-first flows.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-cream/90 border-t border-white/10 pt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-coral" /> Product catalog & smart category filtering</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-coral" /> Frictionless one-page checkout experiences</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-coral" /> Secure payment gateway integrations</li>
                </ul>
              </div>
              <div className="mt-8 pt-4">
                <Link to="/services#ecommerce" className="inline-flex items-center gap-2 text-xs font-bold text-coral group-hover:underline">
                  <span>View service details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 3: Custom Web Applications */}
            <div className="group relative rounded-3xl border border-white/10 bg-dark/80 p-8 shadow-xl transition-all duration-300 hover:border-lime/50 hover:shadow-glow-lime flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-lime">03 // APPLICATIONS</span>
                  <div className="h-10 w-10 rounded-2xl bg-lime/10 border border-lime/20 flex items-center justify-center text-lime">
                    <Code2 size={20} />
                  </div>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white group-hover:text-lime transition-colors">
                  Custom Web Applications
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-light">
                  Bespoke portals, interactive dashboards, and client tools built with modern React to replace slow legacy systems and automate workflows.
                </p>
                <ul className="mt-6 space-y-2.5 text-xs text-cream/90 border-t border-white/10 pt-4">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-lime" /> Role-based authentication & dashboards</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-lime" /> API integrations with your existing stack</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-lime" /> Modular, maintainable JavaScript architecture</li>
                </ul>
              </div>
              <div className="mt-8 pt-4">
                <Link to="/services#webapps" className="inline-flex items-center gap-2 text-xs font-bold text-lime group-hover:underline">
                  <span>View service details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. "HOW WE WORK" SECTION (Numbered Stages on Contrasting Warm Cream)
         ========================================================================= */}
      <section className="section bg-cream text-charcoal relative overflow-hidden" aria-labelledby="process-heading">
        <div className="wrap relative z-10">
          <div className="max-w-2xl">
            <span className="badge-cream mb-3">Our Methodology</span>
            <h2 id="process-heading" className="h-section text-charcoal">
              A transparent, battle-tested development process.
            </h2>
            <p className="mt-4 text-lg text-charcoal/80">
              No black-box development. You always know what is being built, why it matters, and when each milestone will be delivered.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Discovery & Scope',
                desc: 'We analyze your commercial goals, audience, and technical needs. You receive a concrete scope and fixed milestones before coding starts.',
                color: 'text-orange',
                border: 'border-orange',
              },
              {
                step: '02',
                title: 'Design & Prototype',
                desc: 'We construct high-fidelity page layouts and interactive prototypes. You review the exact look, feel, and user journey early.',
                color: 'text-coral',
                border: 'border-coral',
              },
              {
                step: '03',
                title: 'Clean Engineering',
                desc: 'We write modular React and Tailwind code, ensuring mobile responsiveness, accessibility, and sub-second load times across devices.',
                color: 'text-dark',
                border: 'border-charcoal',
              },
              {
                step: '04',
                title: 'Launch & Support',
                desc: 'We handle production deployment, verify all forms and analytics, and stay by your side for ongoing updates and enhancements.',
                color: 'text-lime-dark',
                border: 'border-lime-dark',
              },
            ].map((st) => (
              <div
                key={st.step}
                className="relative rounded-2xl border-2 border-charcoal/15 bg-white/70 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange hover:shadow-md"
              >
                <span className={`font-mono text-3xl font-bold ${st.color}`}>
                  {st.step}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-charcoal">
                  {st.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. WHY WORK WITH US (Distinctive Studio Identity - Almost Black)
         ========================================================================= */}
      <section className="section bg-dark text-cream relative overflow-hidden border-t border-white/10" aria-labelledby="why-us-heading">
        <div className="pointer-events-none absolute -top-40 right-10 h-80 w-80 rounded-full bg-lime/10 blur-3xl" />

        <div className="wrap relative z-10 grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="badge-orange">Why NexGen</span>
            <h2 id="why-us-heading" className="h-section text-white">
              Direct access to senior developers. Zero agency fluff.
            </h2>
            <p className="text-lg leading-relaxed text-muted-light">
              We operate as a focused engineering studio. When you work with us, you speak directly with the architects who design and write your software.
            </p>
            <div className="pt-2">
              <Link to="/about" className="btn btn-dark text-sm">
                <span>Learn More About Our Philosophy</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: MessageSquare,
                title: 'Direct Communication',
                desc: 'No account managers or telephone games. You speak directly with the developers writing your code in plain English.',
                color: 'text-orange',
              },
              {
                icon: Smartphone,
                title: 'Mobile-First by Default',
                desc: 'Over 60% of your visitors are on smartphones. Every layout is obsessively tested on real mobile devices from day one.',
                color: 'text-lime',
              },
              {
                icon: Search,
                title: 'Technical SEO Foundations',
                desc: 'Clean semantic HTML, valid JSON-LD schemas, and fast server responses so search engines rank your pages effortlessly.',
                color: 'text-coral',
              },
              {
                icon: Wrench,
                title: 'Zero Vendor Lock-In',
                desc: 'You receive clean, well-documented source code. Your site is built to be easily maintained by anyone.',
                color: 'text-orange',
              },
            ].map((reason) => {
              const Icon = reason.icon
              return (
                <div
                  key={reason.title}
                  className="rounded-2xl border border-white/10 bg-charcoal/80 p-6 shadow-lg transition-all duration-300 hover:border-white/20"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ${reason.color}`}>
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-light">
                    {reason.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. GENUINE TESTIMONIALS (Only rendered if real data exists in data file)
         ========================================================================= */}
      {testimonials.length > 0 && (
        <section className="section bg-charcoal text-cream border-t border-white/10" aria-labelledby="testimonials-heading">
          <div className="wrap">
            <div className="max-w-xl">
              <span className="badge-lime mb-3">Client Feedback</span>
              <h2 id="testimonials-heading" className="h-section text-white">
                Trusted by Forward-Thinking Brands
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-2xl border border-white/10 bg-dark p-8 shadow-xl"
                >
                  <blockquote className="font-display text-xl leading-relaxed text-cream">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4 text-sm text-muted-light">
                    <strong className="font-semibold text-white">{t.name}</strong>
                    {t.role && <span>— {t.role}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          8. BOLD CONTACT CTA SECTION
         ========================================================================= */}
      <CTASection />
    </>
  )
}
