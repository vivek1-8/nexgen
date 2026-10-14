import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, ExternalLink } from 'lucide-react'
import SafeImage from './SafeImage.jsx'

export default function ProjectCard({ project, priority = false }) {
  const { slug, title, category, shortDescription, coverImage, technologies = [] } = project

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-charcoal-card transition-all duration-300 hover:-translate-y-1 hover:border-orange/50 hover:shadow-glow-orange">
      <Link to={`/work/${slug}`} className="block flex-1" aria-label={`View project details for ${title}`}>
        {/* Screenshot Container with Interactive Hover Overlay */}
        <div className="relative overflow-hidden border-b border-white/10">
          <SafeImage
            src={coverImage}
            alt={`${title} project preview`}
            eager={priority}
            className="transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Floating Category Pill */}
          {category && (
            <div className="absolute left-4 top-4 z-10">
              <span className="badge-orange backdrop-blur-md">
                {category}
              </span>
            </div>
          )}

          {/* Interactive Hover Overlay Action */}
          <div className="absolute inset-0 flex items-center justify-center bg-dark/60 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-dark shadow-glow-orange transition-transform duration-300 group-hover:scale-105">
              <span>View Project</span>
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl font-bold leading-snug text-cream transition-colors group-hover:text-orange">
              {title}
            </h3>
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-muted-light transition-all duration-300 group-hover:border-orange group-hover:bg-orange group-hover:text-dark group-hover:shadow-glow-orange"
              aria-hidden="true"
            >
              <ArrowUpRight size={18} />
            </span>
          </div>

          {shortDescription && (
            <p className="mt-3 text-sm leading-relaxed text-muted-light line-clamp-2">
              {shortDescription}
            </p>
          )}

          {/* Technologies Badges */}
          {technologies.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-4">
              {technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-muted-light"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  )
}
