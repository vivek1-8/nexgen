import { Link } from 'react-router-dom'
import { ArrowRight, Home, Sparkles } from 'lucide-react'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-dark via-[#141414] to-charcoal py-32 sm:py-40">
      <div className="pointer-events-none absolute inset-0 bg-grid-mesh opacity-40" />
      <div className="pointer-events-none absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-orange/15 blur-3xl" />

      <div className="wrap relative z-10 text-center max-w-2xl mx-auto space-y-6">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange">
          404 // ROUTE NOT FOUND
        </span>

        <h1 className="h-display text-white">
          This page does not exist.
        </h1>

        <p className="text-muted-light text-lg">
          The link you followed may be outdated or incorrect. Let's get you back on track.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn btn-orange font-bold text-dark shadow-glow-orange flex items-center gap-2">
            <Home size={16} />
            <span>Return Home</span>
          </Link>
          <Link to="/work" className="btn btn-dark flex items-center gap-2">
            <span>Explore Our Portfolio</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
