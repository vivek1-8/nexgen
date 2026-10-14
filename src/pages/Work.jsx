import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Layers, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import EmptyProjects from '../components/EmptyProjects.jsx'
import CTASection from '../components/CTASection.jsx'
import { allProjects, availableCategories } from '../data/projects.js'

export default function Work() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? allProjects : allProjects.filter((p) => p.category === active)
  const filters = ['All', ...availableCategories]

  return (
    <>
      <Seo
        title="Our Work — Curated Web Development Portfolio"
        description="Explore custom websites, e-commerce stores, and tailored web applications engineered by NexGen Technology."
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark via-[#141414] to-charcoal pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-white/10">
        <div className="pointer-events-none absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-orange/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-grid-mesh opacity-40" />

        <div className="wrap relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange mb-6">
            <Sparkles size={14} />
            <span>Selected Projects & Deployments</span>
          </div>

          <h1 className="h-display text-white max-w-4xl">
            Digital experiences designed to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-coral">
              captivate & convert.
            </span>
          </h1>

          <p className="lede text-muted-light mt-6 max-w-2xl">
            Explore our portfolio of high-performance websites, e-commerce stores, and custom software systems designed to solve real business challenges.
          </p>

          {/* Working Category Filters */}
          {allProjects.length > 0 && (
            <div
              role="group"
              aria-label="Filter projects by category"
              className="mt-12 flex flex-wrap gap-2.5"
            >
              {filters.map((category) => {
                const isActive = active === category
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActive(category)}
                    aria-pressed={isActive}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-orange text-dark shadow-glow-orange'
                        : 'border border-white/15 bg-charcoal-card text-muted-light hover:border-orange hover:text-cream'
                    }`}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="section bg-dark text-cream relative" aria-live="polite">
        <div className="wrap">
          {allProjects.length === 0 ? (
            <EmptyProjects />
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {visible.map((project, idx) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: (idx % 3) * 0.08 }}
                  >
                    <ProjectCard project={project} priority={idx < 3} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Call To Action */}
      <CTASection
        title="Ready to build your next flagship website?"
        description="Whether you need a full site redesign, an e-commerce platform, or a custom web app, our senior engineers are ready to discuss your goals."
      />
    </>
  )
}
