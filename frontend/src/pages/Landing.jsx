import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  BellRing,
  BusFront,
  Check,
  Clock3,
  MapPin,
  Menu,
  Navigation,
  Route,
  ShieldCheck,
  X,
} from 'lucide-react'

import LiveMapCard from '../components/landing/LiveMapCard.jsx'
import umtSeal from '../assets/umt-seal.png'
import shuttle from '../assets/campus/campus-shuttle.webp'
import lawn from '../assets/campus/campus-lawn.webp'
import building from '../assets/campus/campus-building.webp'
import '../styles/landing.css'

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#routes', label: 'Routes' },
  { href: '#campus', label: 'Campus' },
]

const STATS = [
  { value: '9', label: 'Campus routes' },
  { value: '74', label: 'Pickup stops' },
  { value: 'Live', label: 'Bus tracking' },
  { value: '1990', label: 'UMT established' },
]

const FEATURES = [
  {
    Icon: Navigation,
    title: 'Live bus tracking',
    text: 'Watch your bus move on the map, so you leave home when it matters.',
  },
  {
    Icon: Clock3,
    title: 'Arrival estimates',
    text: 'Get an estimated arrival time for your own stop, not just the route.',
  },
  {
    Icon: Route,
    title: 'Routes & stops',
    text: 'Browse every campus route and its stops before you board.',
  },
  {
    Icon: BellRing,
    title: 'Service updates',
    text: 'Delays and notices reach you before you reach the stop.',
  },
  {
    Icon: BusFront,
    title: 'Driver console',
    text: 'Drivers share trip status and location from one simple screen.',
  },
  {
    Icon: ShieldCheck,
    title: 'Transport admin',
    text: 'The transport office manages fleet, routes and notices in one place.',
  },
]

const STEPS = [
  {
    title: 'Pick your route',
    text: 'Choose the route and stop you ride from every day.',
  },
  {
    title: 'Watch the bus live',
    text: 'See where your bus is and how far it is from your stop.',
  },
  {
    title: 'Arrive on time',
    text: 'Use the arrival estimate and service updates to plan your minute.',
  },
]

const ROUTES = [
  { name: 'Askari X', stops: 9, color: '#0f4c8a' },
  { name: 'Badami Bagh', stops: 9, color: '#f2694a' },
  { name: 'Bahria Town', stops: 7, color: '#1fa463' },
  { name: 'Central Park Kahna', stops: 8, color: '#8e63c7' },
  { name: 'Daroghawala', stops: 8, color: '#12a5b0' },
  { name: 'DHA', stops: 9, color: '#d0344b' },
  { name: 'Manawan', stops: 8, color: '#d09a0a' },
  { name: 'Paragon City', stops: 8, color: '#0b6a99' },
  { name: 'Shahdara', stops: 8, color: '#6b8e23' },
]

const TRACKING_POINTS = [
  'See the bus position update along its route',
  'Know how many stops away it is',
  'Get arrival estimates for your own stop',
]

function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}

/** Fade-and-rise elements marked with data-reveal as they enter the viewport. */
function useReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const items = root.querySelectorAll('[data-reveal]')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    root.classList.add('reveal-ready')
    const timers = []
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            el.classList.add('is-visible')
            observer.unobserve(el)
            // once revealed, hand transitions back to the element's own hover styles
            timers.push(window.setTimeout(() => el.removeAttribute('data-reveal'), 1300))
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    items.forEach((item) => observer.observe(item))
    return () => {
      observer.disconnect()
      timers.forEach((id) => window.clearTimeout(id))
      root.classList.remove('reveal-ready')
    }
  }, [rootRef])
}

function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  return (
    <header className={`lp-nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="lp-container lp-nav-inner">
        <Link to="/" className="lp-brand" onClick={() => setOpen(false)}>
          <img src={umtSeal} alt="UMT seal" />
          <span>
            UMT<strong>Go</strong>
          </span>
        </Link>

        <nav className="lp-nav-links" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="lp-nav-actions">
          <Link to="/login" className="lp-nav-login">
            Log in
          </Link>
          <Link to="/signup" className="lp-btn lp-btn-nav">
            Get started
          </Link>
        </div>

        <button
          type="button"
          className="lp-nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="lp-drawer">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <div className="lp-drawer-actions">
          <Link to="/login" className="lp-btn lp-btn-ghost-dark">
            Log in
          </Link>
          <Link to="/signup" className="lp-btn lp-btn-light">
            Get started
          </Link>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="lp-hero">
      <img className="lp-hero-bg" src={shuttle} alt="" fetchPriority="high" />
      <div className="lp-hero-shade" />

      <div className="lp-container lp-hero-inner">
        <div className="lp-hero-copy">
          <span className="lp-chip">
            <i /> University of Management and Technology
          </span>

          <h1>
            Your UMT bus,
            <br />
            <span>always in sight.</span>
          </h1>

          <p>
            Live tracking, arrival estimates and every campus route in one place, so your
            commute stops being a guessing game.
          </p>

          <div className="lp-hero-actions">
            <Link to="/login" className="lp-btn lp-btn-light lp-btn-lg">
              Track my bus <ArrowRight size={18} />
            </Link>
            <Link to="/signup" className="lp-btn lp-btn-glass lp-btn-lg">
              Create account
            </Link>
          </div>
        </div>

        <div className="lp-hero-floats" aria-hidden="true">
          <div className="lp-float lp-float-eta">
            <span className="lp-float-icon">
              <BusFront size={18} />
            </span>
            <div>
              <strong>Askari X</strong>
              <span>6 min away</span>
            </div>
          </div>
          <div className="lp-float lp-float-ok">
            <i /> On time
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  return (
    <div className="lp-container">
      <div className="lp-stats" data-reveal>
        {STATS.map((stat) => (
          <div key={stat.label} className="lp-stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function SectionHead({ kicker, title, text, center = false, light = false }) {
  return (
    <div className={`lp-section-head ${center ? 'is-center' : ''} ${light ? 'is-light' : ''}`} data-reveal>
      <span className="lp-kicker">{kicker}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function Tracking() {
  return (
    <section className="lp-section lp-tracking" id="tracking">
      <div className="lp-container lp-tracking-grid">
        <div data-reveal>
          <span className="lp-kicker">Live tracking</span>
          <h2 className="lp-h2">See your bus move. Plan your minute.</h2>
          <p className="lp-lead">
            No more waiting at the stop wondering. UMTGo shows where your bus is on its route
            and when it should reach you.
          </p>

          <ul className="lp-checks">
            {TRACKING_POINTS.map((point) => (
              <li key={point}>
                <span>
                  <Check size={14} strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <Link to="/login" className="lp-btn lp-btn-primary">
            Open live tracking <ArrowRight size={18} />
          </Link>
        </div>

        <div className="lp-tracking-visual" data-reveal style={{ '--d': '120ms' }}>
          <div className="lp-blob lp-blob-a" />
          <div className="lp-blob lp-blob-b" />
          <LiveMapCard />
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="lp-section" id="features">
      <div className="lp-container">
        <SectionHead
          center
          kicker="Features"
          title="Everything your commute needs"
          text="Built for students, drivers and the transport office, with one account for each."
        />

        <div className="lp-feature-grid">
          {FEATURES.map(({ Icon, title, text }, index) => (
            <article key={title} className="lp-feature" data-reveal style={{ '--d': `${(index % 3) * 90}ms` }}>
              <span className="lp-feature-icon">
                <Icon size={24} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="lp-section lp-dark" id="how-it-works">
      <div className="lp-container">
        <SectionHead center light kicker="How it works" title="Three steps to a calmer commute" />

        <div className="lp-steps">
          {STEPS.map((step, index) => (
            <article key={step.title} className="lp-step" data-reveal style={{ '--d': `${index * 110}ms` }}>
              <span className="lp-step-no">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Routes() {
  return (
    <section className="lp-section" id="routes">
      <div className="lp-container">
        <SectionHead
          kicker="Routes"
          title="Find your route"
          text="Nine routes bring the city to the UMT campus. Log in to follow any of them live."
        />

        <div className="lp-route-grid">
          {ROUTES.map((route, index) => (
            <Link
              key={route.name}
              to="/login"
              className="lp-route"
              style={{ '--route': route.color, '--d': `${(index % 3) * 80}ms` }}
              data-reveal
            >
              <div className="lp-route-top">
                <span className="lp-route-bar" />
                <ArrowUpRight size={18} className="lp-route-arrow" />
              </div>
              <span className="lp-route-no">ROUTE {String(index + 1).padStart(2, '0')}</span>
              <h3>{route.name}</h3>
              <div className="lp-route-meta">
                <span>
                  <MapPin size={15} /> {route.stops} stops
                </span>
                <span>
                  <Navigation size={15} /> To UMT campus
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Campus() {
  return (
    <section className="lp-section lp-campus" id="campus">
      <div className="lp-container">
        <SectionHead
          kicker="Our campus"
          title="A campus worth arriving at"
          text="From the main academic block to the open lawns, the journey ends somewhere you will want to be."
        />

        <div className="lp-gallery">
          <figure className="lp-shot lp-shot-tall" data-reveal>
            <img src={shuttle} alt="A blue UMT shuttle bus in front of the main academic block" loading="lazy" />
            <figcaption>The UMT shuttle</figcaption>
          </figure>
          <figure className="lp-shot" data-reveal style={{ '--d': '100ms' }}>
            <img src={lawn} alt="UMT campus lawn with academic blocks and flags" loading="lazy" />
            <figcaption>Campus lawn</figcaption>
          </figure>
          <figure className="lp-shot" data-reveal style={{ '--d': '200ms' }}>
            <img src={building} alt="UMT main building under a blue sky" loading="lazy" />
            <figcaption>Main building</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

function Vision() {
  return (
    <section className="lp-vision">
      <img src={lawn} alt="" loading="lazy" />
      <div className="lp-vision-shade" />
      <div className="lp-container lp-vision-inner" data-reveal>
        <span className="lp-kicker lp-kicker-light">UMT Office of Transportation</span>
        <blockquote>
          We endeavor to provide the best transport system which is safe, reliable, efficient,
          environment friendly and satisfying to the stakeholders.
        </blockquote>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="lp-section lp-cta-wrap">
      <div className="lp-container">
        <div className="lp-cta" data-reveal>
          <img className="lp-cta-seal" src={umtSeal} alt="" />
          <div>
            <h2>Ready for a more predictable commute?</h2>
            <p>Create your UMTGo account in a minute and start tracking your bus today.</p>
          </div>
          <div className="lp-cta-actions">
            <Link to="/signup" className="lp-btn lp-btn-light lp-btn-lg">
              Create account <ArrowRight size={18} />
            </Link>
            <Link to="/login" className="lp-btn lp-btn-glass lp-btn-lg">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="lp-footer">
      <div className="lp-container lp-footer-grid">
        <div className="lp-footer-brand">
          <Link to="/" className="lp-brand">
            <img src={umtSeal} alt="UMT seal" />
            <span>
              UMT<strong>Go</strong>
            </span>
          </Link>
          <p>Campus bus tracking for the University of Management and Technology.</p>
        </div>

        <div>
          <h4>Explore</h4>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div>
          <h4>Account</h4>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Create account</Link>
          <Link to="/forgot-password">Forgot password</Link>
        </div>

        <div>
          <h4>Campus</h4>
          <span>UMT Office of Transportation</span>
          <span>C-II, Johar Town, Lahore</span>
        </div>
      </div>

      <div className="lp-container lp-footer-bottom">
        <span>© 2026 UMTGo · University of Management and Technology</span>
        <span>Lahore, Pakistan</span>
      </div>
    </footer>
  )
}

export default function Landing() {
  const rootRef = useRef(null)
  useReveal(rootRef)

  return (
    <div className="lp" ref={rootRef}>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Tracking />
        <Features />
        <HowItWorks />
        <Routes />
        <Campus />
        <Vision />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
