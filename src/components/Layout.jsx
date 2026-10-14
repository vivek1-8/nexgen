import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Mail, MessageCircle, ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react'
import logo from '../assets/Logo.png'
import siteConfig from '../data/siteConfig.js'
import { mailto, whatsappLink } from '../lib/contact.js'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Track scroll position for backdrop blur and shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Manage body scroll lock cleanly
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? 'border-b border-white/10 bg-dark/90 shadow-2xl backdrop-blur-md'
        : 'border-b border-white/5 bg-dark/70 backdrop-blur-sm'
        }`}
    >
      <div className="wrap flex h-20 items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          aria-label="NexGen Technology Homepage"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="NexGen Technology"
            width="783"
            height="378"
            className="h-10 w-auto object-contain sm:h-12 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          <div className="flex items-center rounded-full border border-white/10 bg-charcoal-card/80 p-1.5 shadow-inner backdrop-blur-md">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${isActive
                    ? 'bg-orange text-dark font-semibold shadow-glow-orange'
                    : 'text-muted-light hover:text-cream hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="ml-4 pl-4 border-l border-white/10">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange to-coral px-6 py-2.5 text-sm font-bold text-dark shadow-glow-orange transition-all duration-300 hover:shadow-lg hover:brightness-110 active:scale-95"
            >
              <span>Let's Talk</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            to="/contact"
            className="rounded-full bg-orange px-3.5 py-1.5 text-xs font-bold text-dark shadow-glow-orange hover:bg-orange-hover"
          >
            Let's Talk
          </Link>
          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-charcoal-card text-cream transition-colors hover:border-orange hover:text-orange focus:outline-none"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Accessible Animated Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-20 z-40 bg-black/80 backdrop-blur-md lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 top-20 z-50 max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-white/10 bg-dark px-6 py-8 shadow-2xl lg:hidden"
            >
              <div className="flex flex-col space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">Navigation</span>
                {navLinks.map((item, idx) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.2 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.end}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-xl px-4 py-3.5 text-xl font-display font-semibold transition-colors ${isActive
                          ? 'bg-orange/15 text-orange border border-orange/30'
                          : 'text-cream hover:bg-white/5 hover:text-orange'
                        }`
                      }
                    >
                      <span>{item.label}</span>
                      <ArrowRight size={18} className="opacity-50" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="mb-4 flex items-center gap-2 text-xs font-medium text-muted">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
                  </span>
                  <span>Available for new projects</span>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-orange w-full py-4 text-base font-bold shadow-glow-orange"
                >
                  <span>Let's Talk</span>
                  <ArrowRight size={18} />
                </Link>
                <div className="mt-4 flex justify-center">
                  <a
                    href={mailto('General Enquiry')}
                    className="text-xs text-muted hover:text-orange transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  const wa = whatsappLink()

  return (
    <footer className="border-t border-white/10 bg-dark text-cream">
      {/* Upper Footer: Agency Banner */}
      <div className="border-b border-white/5 py-12">
        <div className="wrap flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-lime" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-cream">
              STUDIO STATUS: <span className="text-lime font-mono">ACCEPTING NEW PROJECTS</span>
            </span>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-orange hover:text-coral transition-colors"
          >
            <span>Start a conversation with our engineering team</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link to="/" aria-label="NexGen Technology" className="inline-block">
            <img
              src={logo}
              alt="NexGen Technology"
              width="783"
              height="378"
              loading="lazy"
              className="h-12 w-auto object-contain brightness-105"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-light">
            We architect and develop high-performance websites, e-commerce platforms, and tailored web applications built to give ambitious brands a distinctive unfair advantage.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="badge-lime text-[11px]">React 18</span>
            <span className="badge-orange text-[11px]">Vite</span>
            <span className="badge-coral text-[11px]">Tailwind</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-mono text-muted-light">Full-Stack</span>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="md:col-span-2">
          <h2 className="font-display text-xs font-bold uppercase tracking-wider text-muted">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link
                  className="text-muted-light transition-colors hover:text-orange"
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="font-display text-xs font-bold uppercase tracking-wider text-muted">Capabilities</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-light">
            <li><Link to="/services#business" className="hover:text-orange transition-colors">Business & Corporate Sites</Link></li>
            <li><Link to="/services#ecommerce" className="hover:text-orange transition-colors">E-Commerce Stores</Link></li>
            <li><Link to="/services#webapps" className="hover:text-orange transition-colors">Custom Web Applications</Link></li>
            <li><Link to="/services#healthcare" className="hover:text-orange transition-colors">Healthcare & Booking</Link></li>
            <li><Link to="/services#redesign" className="hover:text-orange transition-colors">Redesign & Modernization</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-display text-xs font-bold uppercase tracking-wider text-muted">Direct Connect</h2>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li>
              <a
                className="inline-flex items-center gap-2.5 text-muted-light transition-colors hover:text-orange"
                href={mailto('Project enquiry')}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-orange">
                  <Mail size={14} aria-hidden="true" />
                </div>
                <span>{siteConfig.email}</span>
              </a>
            </li>
            {wa && (
              <li>
                <a
                  className="inline-flex items-center gap-2.5 text-muted-light transition-colors hover:text-orange"
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-lime">
                    <MessageCircle size={14} aria-hidden="true" />
                  </div>
                  <span>WhatsApp{siteConfig.phoneDisplay ? `: ${siteConfig.phoneDisplay}` : ''}</span>
                </a>
              </li>
            )}
            {siteConfig.location && (
              <li className="text-muted text-xs">
                {siteConfig.location}
              </li>
            )}
            {siteConfig.socials.map((s) => (
              <li key={s.href}>
                <a
                  className="inline-flex items-center gap-1.5 text-muted-light transition-colors hover:text-orange"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{s.label}</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-8">
        <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Engineered for performance & elegance.</p>
          <div className="flex items-center gap-6">
            <span>Handcrafted Frontend Architecture</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-orange transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col bg-dark text-cream selection:bg-orange selection:text-dark">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-orange focus:px-4 focus:py-2 focus:text-dark focus:font-bold"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
