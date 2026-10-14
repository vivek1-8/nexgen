// High-fidelity creative website mockups used when real client screenshots are being prepared
// Styled with the agency's rich palette (charcoal, burnt orange, electric lime, coral, and cream)
export function WireframePage({ variant = 0 }) {
  if (variant === 0) {
    // Modern High-Performance Agency / Brand Site
    return (
      <div className="aspect-[16/10] w-full bg-[#141414] p-5 text-cream font-sans flex flex-col justify-between" aria-hidden="true">
        {/* Navbar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <div className="h-3.5 w-3.5 rounded bg-orange" />
            <span className="font-display text-xs font-bold tracking-tight text-white">NEXUS.STUDIO</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-muted">Work</span>
            <span className="text-[10px] text-muted">Services</span>
            <span className="rounded-full bg-orange/20 px-2 py-0.5 text-[9px] font-semibold text-orange">Get Started</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-12 gap-4 my-auto py-2">
          <div className="col-span-7 space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-2 py-0.5 text-[9px] font-medium text-lime">
              <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
              v3.2 Production Release
            </div>
            <h4 className="font-display text-base font-bold leading-tight text-white sm:text-lg">
              Next-Generation Digital <span className="text-orange">Architecture</span>
            </h4>
            <p className="text-[10px] leading-relaxed text-muted line-clamp-2">
              Blazing-fast frontend engineering with 99+ Core Web Vitals score.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="rounded bg-orange px-2.5 py-1 text-[10px] font-bold text-dark">Explore Platform</span>
              <span className="rounded border border-white/15 px-2 py-1 text-[10px] text-cream">Read Docs</span>
            </div>
          </div>

          {/* Interactive Card / Chart Preview */}
          <div className="col-span-5 flex flex-col justify-center">
            <div className="rounded-xl border border-white/10 bg-charcoal p-2.5 shadow-lg space-y-2">
              <div className="flex items-center justify-between text-[9px]">
                <span className="text-muted">Speed Index</span>
                <span className="font-mono font-bold text-lime">0.4s</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-[94%] bg-gradient-to-r from-orange to-lime rounded-full" />
              </div>
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <div className="rounded bg-white/5 p-1 text-center">
                  <div className="text-[8px] text-muted">Lighthouse</div>
                  <div className="font-mono text-[10px] font-bold text-white">100</div>
                </div>
                <div className="rounded bg-white/5 p-1 text-center">
                  <div className="text-[8px] text-muted">TTFB</div>
                  <div className="font-mono text-[10px] font-bold text-coral">42ms</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[9px] text-muted">
          <span>React 18 • Vite • Tailwind</span>
          <span className="text-lime">● System Operational</span>
        </div>
      </div>
    )
  }

  if (variant === 1) {
    // E-Commerce / Store Showcase Mockup
    return (
      <div className="aspect-[16/10] w-full bg-[#181818] p-5 text-cream font-sans flex flex-col justify-between" aria-hidden="true">
        {/* Top announcement */}
        <div className="flex items-center justify-between text-[10px] pb-2 border-b border-white/10">
          <div className="font-display font-bold text-coral text-xs">ATELIER GOODS</div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-cream">Cart (2)</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="my-auto grid grid-cols-3 gap-2.5 py-1">
          {[
            { tag: 'NEW', title: 'Studio Display', price: '$890', color: 'border-orange/40 bg-orange/10 text-orange' },
            { tag: 'POPULAR', title: 'Ergonomic Desk', price: '$1,250', color: 'border-lime/40 bg-lime/10 text-lime' },
            { tag: 'LIMITED', title: 'Sound Module', price: '$340', color: 'border-coral/40 bg-coral/10 text-coral' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-charcoal p-2 flex flex-col justify-between">
              <div className="aspect-[4/3] w-full rounded-lg bg-white/5 mb-1.5 flex items-center justify-center relative overflow-hidden">
                <span className={`absolute top-1 right-1 rounded px-1 text-[8px] font-bold border ${item.color}`}>
                  {item.tag}
                </span>
                <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center text-muted text-[10px]">
                  ❖
                </div>
              </div>
              <div className="text-[10px] font-medium text-white truncate">{item.title}</div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] font-mono font-bold text-cream">{item.price}</span>
                <span className="rounded bg-white/10 px-1.5 py-0.5 text-[8px] font-semibold text-white hover:bg-orange hover:text-dark transition-colors">
                  Add +
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom checkout trust badge */}
        <div className="rounded-lg bg-white/5 px-2.5 py-1.5 flex items-center justify-between text-[9px] text-muted">
          <span>Instant One-Click Checkout</span>
          <span className="text-lime font-mono">100% Encrypted</span>
        </div>
      </div>
    )
  }

  // Variant 2: Custom Web Application / Analytics Dashboard
  return (
    <div className="aspect-[16/10] w-full bg-[#121212] p-4 text-cream font-sans flex flex-col justify-between" aria-hidden="true">
      {/* App Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-lime" />
          <span className="font-mono text-[10px] font-semibold text-white">PORTAL // ADMIN</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-lime animate-ping" />
          <span className="text-[9px] font-mono text-muted">Live Sync Active</span>
        </div>
      </div>

      {/* Main Content: Sidebar + Metrics */}
      <div className="grid grid-cols-12 gap-2.5 my-auto py-1">
        {/* Mini Sidebar */}
        <div className="col-span-3 space-y-1.5 border-r border-white/10 pr-2">
          <div className="rounded bg-white/10 px-2 py-1 text-[9px] font-semibold text-orange">Overview</div>
          <div className="rounded px-2 py-1 text-[9px] text-muted">Appointments</div>
          <div className="rounded px-2 py-1 text-[9px] text-muted">Customers</div>
          <div className="rounded px-2 py-1 text-[9px] text-muted">Settings</div>
        </div>

        {/* Metrics Grid */}
        <div className="col-span-9 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-white/10 bg-charcoal p-2">
              <div className="text-[8px] text-muted">Daily Bookings</div>
              <div className="font-mono text-xs font-bold text-white mt-0.5">+48.2%</div>
              <div className="mt-1 h-1 w-full rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-lime" />
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-charcoal p-2">
              <div className="text-[8px] text-muted">Conversion Rate</div>
              <div className="font-mono text-xs font-bold text-orange mt-0.5">8.4%</div>
              <div className="mt-1 h-1 w-full rounded-full bg-white/10">
                <div className="h-full w-4/5 rounded-full bg-orange" />
              </div>
            </div>
          </div>

          {/* Mini Table Rows */}
          <div className="rounded-lg border border-white/10 bg-charcoal/60 p-2 space-y-1">
            <div className="flex justify-between text-[8px] text-muted font-mono">
              <span>Patient / Client</span>
              <span>Status</span>
            </div>
            <div className="flex justify-between text-[9px] text-cream">
              <span>Dr. Miller — Clinic App</span>
              <span className="text-lime font-mono">Confirmed</span>
            </div>
            <div className="flex justify-between text-[9px] text-cream">
              <span>Riverside Care — Intake</span>
              <span className="text-orange font-mono">In Review</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="text-[8px] font-mono text-muted flex justify-between border-t border-white/5 pt-1.5">
        <span>Latency: 18ms</span>
        <span className="text-cream">API v2.4</span>
      </div>
    </div>
  )
}
