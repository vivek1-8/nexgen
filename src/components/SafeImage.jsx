import { useState } from 'react'
import { Image, Sparkles } from 'lucide-react'

// Image with fixed aspect ratio, lazy loading, and an agency-grade fallback
export default function SafeImage({
  src,
  alt = '',
  ratio = 'aspect-[16/10]',
  className = '',
  eager = false,
}) {
  const [failed, setFailed] = useState(false)
  const showImg = src && !failed

  return (
    <div className={`relative w-full overflow-hidden bg-charcoal-card ${ratio} ${className}`}>
      {showImg ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div
          role="img"
          aria-label={alt ? `${alt} (screenshot preview)` : 'Project preview coming soon'}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-charcoal via-dark to-charcoal-card p-6 text-center text-muted"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-orange shadow-inner">
            <Image size={24} strokeWidth={1.5} aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-cream">Visual Preview</p>
            <p className="text-xs text-muted-light">Detailed case study in preparation</p>
          </div>
        </div>
      )}
    </div>
  )
}
