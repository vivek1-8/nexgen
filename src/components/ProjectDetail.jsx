import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Check, ExternalLink, Sparkles, Layers } from 'lucide-react'
import SafeImage from './SafeImage.jsx'
import BrowserFrame from './BrowserFrame.jsx'
import Reveal from './Reveal.jsx'
import { asParagraphs } from '../data/projects.js'

function ExternalButton({ href, children, primary }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${
        primary
          ? 'btn-orange font-bold text-dark shadow-glow-orange'
          : 'btn-dark'
      }`}
    >
      <span>{children}</span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  )
}

// Full agency case-study layout for one project object from src/data/projects.js
export default function ProjectDetail({ project, next }) {
  const {
    title,
    category,
    shortDescription,
    description,
    features = [],
    coverImage,
    gallery = [],
    technologies = [],
    liveUrl,
    githubUrl,
  } = project
  const paragraphs = asParagraphs(description)
  const shots = gallery.filter(Boolean)

  return (
    <article className="pb-24">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark via-[#141414] to-charcoal pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-white/10">
        <div className="pointer-events-none absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-orange/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-grid-mesh opacity-40" />

        <div className="wrap relative z-10">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-light hover:text-orange transition-colors"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to All Work</span>
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8 space-y-4">
              {category && (
                <span className="badge-orange">
                  {category}
                </span>
              )}
              <h1 className="font-display text-4xl font-bold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              {shortDescription && (
                <p className="lede text-muted-light max-w-2xl text-lg sm:text-xl">
                  {shortDescription}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <ExternalButton href={liveUrl} primary>
                Visit Live Website
              </ExternalButton>
              <ExternalButton href={githubUrl}>
                View Source
              </ExternalButton>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Browser Mockup */}
      <section className="wrap -mt-8 sm:-mt-12 relative z-20">
        <BrowserFrame
          url={liveUrl ? liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'nexgen-tech.studio/case-study'}
          theme="dark"
          className="shadow-2xl border-white/20"
        >
          <SafeImage src={coverImage} alt={`${title} homepage cover`} eager ratio="aspect-[16/10]" />
        </BrowserFrame>
      </section>

      {/* Overview & Key Info Split */}
      <section className="wrap mt-20 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-orange">
            <Sparkles size={14} />
            <span>Architecture & Execution</span>
          </div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Project Overview
          </h2>
          <div className="space-y-5 text-base sm:text-lg leading-relaxed text-muted-light border-t border-white/10 pt-6">
            {paragraphs.length > 0 ? (
              paragraphs.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <p>{shortDescription}</p>
            )}
          </div>
        </div>

        {/* Sidebar: Technologies & Features */}
        <aside className="space-y-8 lg:col-span-4 lg:col-start-9">
          {technologies.length > 0 && (
            <div className="rounded-2xl border border-white/10 bg-charcoal-card p-6 shadow-xl">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted">
                Technology Stack
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {technologies.map((t) => (
                  <li
                    key={t}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-cream"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {features.length > 0 && (
            <div className="rounded-2xl border border-white/10 bg-charcoal-card p-6 shadow-xl">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted">
                Key Deliverables
              </h3>
              <ul className="mt-4 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-snug text-cream">
                    <Check size={18} className="mt-0.5 shrink-0 text-lime" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </section>

      {/* Additional Screenshot Gallery */}
      {shots.length > 0 && (
        <section className="wrap mt-24" aria-label="Project screenshot gallery">
          <div className="border-b border-white/10 pb-6 mb-8">
            <span className="badge-lime mb-2">Visual Showcase</span>
            <h2 className="font-display text-3xl font-bold text-white">Interface Screens</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {shots.map((src, i) => (
              <Reveal key={src + i}>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-charcoal-card shadow-xl transition-all duration-300 hover:border-orange/50">
                  <SafeImage src={src} alt={`${title} preview screen ${i + 1}`} />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Next Project Footer Link */}
      {next && (
        <section className="wrap mt-28">
          <Link
            to={`/work/${next.slug}`}
            className="group flex items-center justify-between gap-6 rounded-3xl border border-white/10 bg-charcoal/60 p-8 sm:p-12 transition-all duration-300 hover:border-orange hover:bg-charcoal hover:shadow-glow-orange"
          >
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange">
                Next Case Study →
              </span>
              <span className="mt-2 block font-display text-2xl font-bold text-white sm:text-4xl transition-colors group-hover:text-orange">
                {next.title}
              </span>
            </div>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange text-dark shadow-glow-orange transition-transform duration-300 group-hover:scale-110">
              <ArrowUpRight size={24} aria-hidden="true" />
            </span>
          </Link>
        </section>
      )}
    </article>
  )
}
