import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, FolderGit2, CheckCircle2 } from 'lucide-react'
import BrowserFrame from './BrowserFrame.jsx'
import { WireframePage } from './Wireframe.jsx'

// Premium agency showcase state shown when src/data/projects.js has no public projects
export default function EmptyProjects({
  title = 'Case Studies & Production Builds in Preparation',
  text = 'We are currently documenting full architectural write-ups and interactive live demos for our latest client deployments. In the meantime, we are happy to provide private walkthroughs and sector-specific code samples upon request.',
  cta = true,
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-charcoal via-dark to-[#121212] p-8 sm:p-12 lg:p-16 shadow-2xl">
      {/* Decorative gradient glow orb in corner */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-orange/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-lime/10 blur-3xl" />

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-12">
        {/* Left column: Text & CTA */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-3.5 py-1 text-xs font-semibold text-orange">
            <Sparkles size={14} className="text-orange" />
            <span>Curated Portfolio Coming Soon</span>
          </div>

          <h3 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            {title}
          </h3>

          <p className="text-base leading-relaxed text-muted-light sm:text-lg">
            {text}
          </p>

          <div className="space-y-3 pt-2 text-sm text-cream/80">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-lime shrink-0" />
              <span>Full-stack React, Next.js & Headless E-commerce demos</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-lime shrink-0" />
              <span>Verified 99+ Core Web Vitals performance benchmarks</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-lime shrink-0" />
              <span>Bespoke UI/UX design systems tailored to your industry</span>
            </div>
          </div>

          {cta && (
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn btn-orange font-bold text-dark shadow-glow-orange">
                <span>Request Relevant Examples</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn btn-dark">
                <span>Explore Our Services</span>
              </Link>
            </div>
          )}
        </div>

        {/* Right column: Interactive Browser Frame Prototype */}
        <div className="lg:col-span-6" aria-hidden="true">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange/20 to-lime/20 blur-md opacity-75" />
            <BrowserFrame url="preview.nexgen-tech.studio/case-studies" theme="dark">
              <WireframePage variant={0} />
            </BrowserFrame>
          </div>
        </div>
      </div>
    </div>
  )
}
