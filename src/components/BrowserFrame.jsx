import { Lock } from 'lucide-react'

// Premium agency browser frame used to present website mockups and screenshots
export default function BrowserFrame({ children, url = '', className = '', theme = 'dark' }) {
  const isDark = theme === 'dark'

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
        isDark
          ? 'border-white/15 bg-charcoal shadow-2xl hover:border-orange/40 hover:shadow-glow-orange/30'
          : 'border-charcoal/10 bg-white shadow-xl hover:border-orange/30'
      } ${className}`}
    >
      {/* Top Browser Bar */}
      <div
        className={`flex items-center justify-between border-b px-4 py-3 ${
          isDark
            ? 'border-white/10 bg-dark/90'
            : 'border-charcoal/10 bg-[#F6F4EE]'
        }`}
        aria-hidden="true"
      >
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56]/90 transition-transform group-hover:scale-110" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]/90 transition-transform group-hover:scale-110" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F]/90 transition-transform group-hover:scale-110" />
        </div>

        {/* Address bar mockup */}
        <div
          className={`mx-3 flex max-w-xs flex-1 items-center justify-center gap-1.5 truncate rounded-lg px-3 py-1 text-[11px] font-mono transition-colors ${
            isDark
              ? 'bg-white/5 text-muted hover:bg-white/10 hover:text-cream'
              : 'bg-white text-charcoal/70 shadow-sm'
          }`}
        >
          <Lock size={10} className="shrink-0 text-lime" />
          <span className="truncate">{url || 'nexgen-tech.studio/preview'}</span>
        </div>

        {/* Decorative right icons */}
        <div className="flex items-center gap-1.5 text-muted opacity-40">
          <span className="h-2 w-2 rounded-full border border-current" />
          <span className="h-2 w-2 rounded-full border border-current" />
        </div>
      </div>

      {/* Frame content */}
      <div className="relative overflow-hidden">
        {children}
      </div>
    </div>
  )
}
