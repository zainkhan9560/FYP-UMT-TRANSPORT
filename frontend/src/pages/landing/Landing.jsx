import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BellRing,
  Check,
  ChevronDown,
  Clock3,
  Download,
  Languages,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  Route as RouteIcon,
  Search,
  X,
} from 'lucide-react'

import LiveMapCard from '../../components/landing/LiveMapCard.jsx'
import umtSeal from '../../assets/brand/umt-seal.png'
import umtLogo from '../../assets/brand/umt-logo.png'
import shuttle from '../../assets/campus/campus-shuttle.webp'
import '../../styles/landing.css'

/* ------------------------------------------------------------------ */
/* Config: edit these, the page updates itself                         */
/* ------------------------------------------------------------------ */

const SITE = {
  title: 'UMTGo | UMT bus routes, location and arrival times',
  description:
    'Find your UMT bus route and stops, check bus location information and plan your commute with arrival estimates as they become available.',
  // Absolute URL so WhatsApp / social previews work, e.g. https://umtgo.example/og.png
  ogImage: '',
}

// Fill in what you have; empty values are hidden automatically.
const CONTACT = {
  phone: '', // e.g. '+92 42 111 300 200'
  email: '', // e.g. 'transport@umt.edu.pk'
  whatsapp: '', // digits only, e.g. '923001234567'
}

// Add real quotes here and the section appears. Leave empty to hide it.
// Example: { quote: '...', name: 'Ayesha', role: 'BBA student, DHA route' }
const TESTIMONIALS = []

/*
 * These are sample routes from the current frontend.
 * Confirm route names and stop counts with the UMT transport office
 * before presenting them as official transport data.
 * Optional per route: firstBus: '07:00', lastBus: '17:30', stopNames: ['Stop A', 'Stop B']
 */
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

const TOTAL_STOPS = ROUTES.reduce((sum, route) => sum + route.stops, 0)

const STATS = [
  { value: String(ROUTES.length), label: 'Sample routes listed' },
  { value: String(TOTAL_STOPS), label: 'Sample stops' },
  { value: 'GPS', label: 'Tracking integration' },
  { value: 'AI / ML', label: 'ETA prediction goal' },
]

/* ------------------------------------------------------------------ */
/* Copy (English + Urdu for nav, hero, FAQ, contact and final CTA)     */
/* ------------------------------------------------------------------ */

const COPY = {
  en: {
    nav: { tracking: 'Live tracking', routes: 'Routes', how: 'How it works', features: 'Features', faq: 'FAQ' },
    login: 'Log in',
    getStarted: 'Get started',
    chip: 'University of Management and Technology',
    h1a: 'Your UMT bus,',
    h1b: 'always in sight.',
    heroText:
      'Find your route, check bus location information and plan your university commute, all in one place.',
    trackCta: 'Track my bus',
    createAccount: 'Create account',
    trust: ['Student accounts', 'Route and stop discovery', 'Arrival-time prediction planned'],
    faqKicker: 'FAQ',
    faqTitle: 'Questions, answered',
    faqText: 'What to know about routes, tracking and accounts.',
    faqs: [
      {
        q: 'What is UMTGo?',
        a: 'UMTGo is a university transport tracking project designed to help students find routes, view bus location information and check estimated arrival times.',
      },
      {
        q: 'Is live GPS tracking available right now?',
        a: 'The map shown on this page is a preview. Actual live tracking requires a connected GPS location source, a working backend and a driver trip that is sharing location data.',
      },
      {
        q: 'How will the arrival time be predicted?',
        a: 'The planned system can use route information, GPS history, distance and travel-time patterns. Machine-learning predictions will only be shown as live predictions after the model is trained, tested and connected.',
      },
      {
        q: 'Which routes are listed?',
        a: `The current version includes ${ROUTES.length} sample route entries. Confirm the official route names and stop counts with the UMT transport office.`,
      },
      {
        q: 'Who can create an account?',
        a: 'Students can create an account from the sign up page. Driver and admin accounts are created by the UMT transport office.',
      },
      {
        q: "My bus isn't showing on the map. What now?",
        a: 'A bus appears only while it is sharing its location during a trip. If you still see nothing, contact the transport office using the details beside this section.',
      },
      {
        q: 'What if I forget my password?',
        a: 'Open the login page and use the Forgot password link. Password recovery works once the authentication and email recovery service are configured.',
      },
    ],
    ctaTitle: 'Make your commute easier to plan.',
    ctaText: 'Sign in to explore the UMTGo experience or create an account to get started.',
    contactTitle: 'Need help?',
    contactText: 'Reach the transport office if your bus is missing or a route has changed.',
  },
  ur: {
    nav: { tracking: 'لائیو ٹریکنگ', routes: 'روٹس', how: 'کیسے کام کرتا ہے', features: 'خصوصیات', faq: 'سوالات' },
    login: 'لاگ اِن',
    getStarted: 'شروع کریں',
    chip: 'یونیورسٹی آف مینجمنٹ اینڈ ٹیکنالوجی',
    h1a: 'آپ کی یو ایم ٹی بس،',
    h1b: 'ہمیشہ نظر میں۔',
    heroText:
      'اپنا روٹ تلاش کریں، بس کی لوکیشن کی معلومات دیکھیں اور یونیورسٹی کے سفر کی منصوبہ بندی کریں، سب ایک جگہ۔',
    trackCta: 'میری بس ٹریک کریں',
    createAccount: 'اکاؤنٹ بنائیں',
    trust: ['طلبہ کے لیے اکاؤنٹ', 'روٹس اور اسٹاپس کی تلاش', 'آمد کے وقت کی پیش گوئی منصوبے میں شامل'],
    faqKicker: 'سوالات',
    faqTitle: 'سوالات، جوابات کے ساتھ',
    faqText: 'روٹس، ٹریکنگ اور اکاؤنٹس کے بارے میں جاننے کی باتیں۔',
    faqs: [
      {
        q: 'یو ایم ٹی گو کیا ہے؟',
        a: 'یو ایم ٹی گو یونیورسٹی کی ٹرانسپورٹ ٹریکنگ کا ایک پروجیکٹ ہے جو طلبہ کو روٹس تلاش کرنے، بس کی لوکیشن دیکھنے اور آمد کا تخمینہ جاننے میں مدد دیتا ہے۔',
      },
      {
        q: 'کیا لائیو جی پی ایس ٹریکنگ ابھی دستیاب ہے؟',
        a: 'اس صفحے پر دکھایا گیا نقشہ صرف ایک پیش منظر ہے۔ اصل لائیو ٹریکنگ کے لیے جی پی ایس لوکیشن کا ذریعہ، کام کرتا ہوا بیک اینڈ اور ایسا ڈرائیور ٹرپ ضروری ہے جو لوکیشن شیئر کر رہا ہو۔',
      },
      {
        q: 'آمد کا وقت کیسے معلوم کیا جائے گا؟',
        a: 'منصوبہ بند نظام روٹ کی معلومات، جی پی ایس ہسٹری، فاصلے اور سفر کے وقت کے رجحانات استعمال کر سکتا ہے۔ مشین لرننگ کی پیش گوئیاں اسی وقت لائیو دکھائی جائیں گی جب ماڈل تیار، ٹیسٹ اور منسلک ہو جائے۔',
      },
      {
        q: 'کون سے روٹس درج ہیں؟',
        a: `موجودہ ورژن میں ${ROUTES.length} نمونہ روٹس شامل ہیں۔ سرکاری روٹ نام اور اسٹاپس کی تعداد یو ایم ٹی ٹرانسپورٹ آفس سے تصدیق کریں۔`,
      },
      {
        q: 'اکاؤنٹ کون بنا سکتا ہے؟',
        a: 'طلبہ سائن اپ صفحے سے اکاؤنٹ بنا سکتے ہیں۔ ڈرائیور اور ایڈمن اکاؤنٹ یو ایم ٹی ٹرانسپورٹ آفس بناتا ہے۔',
      },
      {
        q: 'میری بس نقشے پر نظر نہیں آ رہی، اب کیا کروں؟',
        a: 'بس صرف اس وقت نظر آتی ہے جب وہ سفر کے دوران اپنی لوکیشن شیئر کر رہی ہو۔ اگر پھر بھی کچھ نظر نہ آئے تو اس حصے کے ساتھ دی گئی تفصیلات پر ٹرانسپورٹ آفس سے رابطہ کریں۔',
      },
      {
        q: 'اگر میں پاس ورڈ بھول جاؤں تو کیا کروں؟',
        a: 'لاگ اِن صفحہ کھولیں اور "Forgot password" کا لنک استعمال کریں۔ پاس ورڈ کی بازیابی اسی وقت کام کرے گی جب تصدیق اور ای میل ریکوری سروس ترتیب دی جا چکی ہو۔',
      },
    ],
    ctaTitle: 'اپنے سفر کی منصوبہ بندی آسان بنائیں۔',
    ctaText: 'یو ایم ٹی گو کو آزمانے کے لیے لاگ اِن کریں یا شروع کرنے کے لیے اکاؤنٹ بنائیں۔',
    contactTitle: 'مدد چاہیے؟',
    contactText: 'اگر آپ کی بس نظر نہ آئے یا روٹ بدل گیا ہو تو ٹرانسپورٹ آفس سے رابطہ کریں۔',
  },
}

const NAV_ORDER = [
  { id: 'tracking', key: 'tracking' },
  { id: 'routes', key: 'routes' },
  { id: 'how-it-works', key: 'how' },
  { id: 'features', key: 'features' },
  { id: 'faq', key: 'faq' },
]

const SECTION_IDS = NAV_ORDER.map((item) => item.id)

const FEATURES = [
  {
    Icon: Navigation,
    title: 'Bus location',
    text: 'View a bus on its route when GPS tracking is connected and the driver is sharing a location.',
  },
  {
    Icon: Clock3,
    title: 'Smarter arrival estimates',
    text: 'Use estimated arrival times to plan your trip. ML-based predictions will be added once the model is trained and integrated.',
  },
  {
    Icon: RouteIcon,
    title: 'Routes and stops',
    text: 'Find your route and check its stops before heading to your pickup point.',
  },
  {
    Icon: BellRing,
    title: 'Service updates',
    text: 'Stay informed about delays and transport notices when the notification service is available.',
  },
]

const STEPS = [
  { title: 'Find your route', text: 'Search for your route and identify your pickup stop.' },
  { title: 'Check bus progress', text: 'View location information when a bus is sharing GPS data.' },
  { title: 'Plan your departure', text: 'Use available arrival estimates and transport updates to plan your journey.' },
]

const TRACKING_POINTS = [
  'Find routes and pickup stops',
  'See location information when GPS is connected',
  'Use arrival estimates when available',
]

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */

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

/**
 * Reveals elements marked with data-reveal as they enter the viewport.
 * Only mark elements that are always in the DOM; elements added later
 * (for example filtered search results) are never observed.
 */
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    items.forEach((item) => observer.observe(item))
    return () => {
      observer.disconnect()
      root.classList.remove('reveal-ready')
    }
  }, [rootRef])
}

/** Returns the id of the section currently in the middle band of the viewport. */
function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}

/** Sets title, description and Open Graph tags without an extra dependency. */
function usePageMeta({ title, description, ogImage }) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    const created = []
    const setMeta = (attr, key, content) => {
      if (!content) return
      let el = document.head.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
        created.push(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:image', ogImage)
    setMeta('name', 'twitter:card', 'summary_large_image')

    return () => {
      document.title = previousTitle
      created.forEach((el) => el.remove())
    }
  }, [title, description, ogImage])
}

/** Captures the browser's "install app" prompt (PWA) and detects iOS Safari. */
function useInstallPrompt() {
  const [promptEvent, setPromptEvent] = useState(null)
  const [installed, setInstalled] = useState(false)

  useEffect(() => {
    const onPrompt = (event) => {
      event.preventDefault()
      setPromptEvent(event)
    }
    const onInstalled = () => {
      setInstalled(true)
      setPromptEvent(null)
    }
    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  const isStandalone =
    typeof window !== 'undefined' &&
    (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true)
  const isIos = typeof navigator !== 'undefined' && /iphone|ipad|ipod/i.test(navigator.userAgent)

  const install = async () => {
    if (!promptEvent) return
    promptEvent.prompt()
    await promptEvent.userChoice
    setPromptEvent(null)
  }

  return {
    canInstall: Boolean(promptEvent) && !installed && !isStandalone,
    showIosHint: isIos && !isStandalone && !installed,
    install,
  }
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function Navbar({ lang, setLang, t, activeId }) {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)
  const toggleLang = () => setLang(lang === 'en' ? 'ur' : 'en')

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className={`lp-nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="lp-container lp-nav-inner">
        <Link to="/" className="lp-brand" onClick={closeMenu} aria-label="UMTGo home">
          <img src={umtSeal} alt="UMT seal" width="46" height="46" />
          <span>
            UMT<strong>Go</strong>
          </span>
        </Link>

        <nav className="lp-nav-links" aria-label="Main navigation">
          {NAV_ORDER.map(({ id, key }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeId === id ? 'is-active' : ''}
              aria-current={activeId === id ? 'true' : undefined}
            >
              {t.nav[key]}
            </a>
          ))}
        </nav>

        <div className="lp-nav-actions">
          <button type="button" className="lp-lang" onClick={toggleLang} aria-label="Switch language between English and Urdu">
            <Languages size={16} /> {lang === 'en' ? 'اردو' : 'English'}
          </button>
          <Link to="/login" className="lp-nav-login">
            {t.login}
          </Link>
          <Link to="/signup" className="lp-btn lp-btn-nav">
            {t.getStarted}
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
        {NAV_ORDER.map(({ id, key }) => (
          <a key={id} href={`#${id}`} onClick={closeMenu}>
            {t.nav[key]}
          </a>
        ))}
        <button type="button" className="lp-lang lp-lang-drawer" onClick={toggleLang}>
          <Languages size={16} /> {lang === 'en' ? 'اردو' : 'English'}
        </button>
        <div className="lp-drawer-actions">
          <Link to="/login" className="lp-btn lp-btn-ghost-dark" onClick={closeMenu}>
            {t.login}
          </Link>
          <Link to="/signup" className="lp-btn lp-btn-light" onClick={closeMenu}>
            {t.getStarted}
          </Link>
        </div>
      </div>
    </header>
  )
}

function Hero({ t }) {
  return (
    <section className="lp-hero">
      <img className="lp-hero-bg" src={shuttle} alt="" width="1600" height="900" fetchPriority="high" />
      <div className="lp-hero-shade" />

      <div className="lp-container lp-hero-inner">
        <div className="lp-hero-copy">
          <span className="lp-chip">
            <i /> {t.chip}
          </span>

          <h1>
            {t.h1a}
            <br />
            <span>{t.h1b}</span>
          </h1>

          <p>{t.heroText}</p>

          <div className="lp-hero-actions">
            <Link to="/login" className="lp-btn lp-btn-light lp-btn-lg">
              {t.trackCta} <ArrowRight size={18} />
            </Link>
            <Link to="/signup" className="lp-btn lp-btn-glass lp-btn-lg">
              {t.createAccount}
            </Link>
          </div>

          <ul className="lp-trust">
            {t.trust.map((item) => (
              <li key={item}>
                <Check size={15} strokeWidth={3} /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a href="#stats" className="lp-scroll-cue" aria-label="Scroll down">
        <ChevronDown size={22} />
      </a>
    </section>
  )
}

function StatsBar() {
  return (
    <div className="lp-container" id="stats">
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

/** A phone frame showing a sample student ETA screen. Values are illustrative. */
function PhoneMockup() {
  const sample = ROUTES[0]
  return (
    <div className="lp-phone" aria-hidden="true">
      <div className="lp-phone-notch" />
      <div className="lp-phone-screen">
        <div className="lp-phone-head">
          <span className="lp-phone-dot" style={{ background: sample.color }} />
          <strong>{sample.name}</strong>
          <small>Sample</small>
        </div>
        <div className="lp-phone-eta">
          <span>Estimated arrival</span>
          <strong>
            4<small> min</small>
          </strong>
        </div>
        <div className="lp-phone-track">
          <i style={{ '--route': sample.color }} />
          <b style={{ '--route': sample.color }} />
        </div>
        <div className="lp-phone-meta">
          <span>2 stops away</span>
          <span>Illustrative</span>
        </div>
      </div>
    </div>
  )
}

function Tracking() {
  return (
    <section className="lp-section lp-tracking" id="tracking">
      <div className="lp-container lp-tracking-grid">
        <div data-reveal>
          <span className="lp-kicker">Bus tracking and ETA</span>
          <h2 className="lp-h2">Less waiting. Better planning.</h2>
          <p className="lp-lead">
            UMTGo is designed to bring route information, bus location and estimated arrival times
            together in one convenient experience.
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
            Open tracking <ArrowRight size={18} />
          </Link>

          <p className="lp-fineprint">
            Live GPS and arrival predictions depend on backend integration and available bus data.
          </p>
        </div>

        <div className="lp-tracking-visual" data-reveal style={{ '--d': '120ms' }}>
          <div className="lp-blob lp-blob-a" />
          <div className="lp-blob lp-blob-b" />

          <div className="lp-preview-note" role="note">
            <strong>Preview mode:</strong> this map is illustrative. It does not confirm a live bus
            location or a real-time ETA.
          </div>

          <LiveMapCard />
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}

function Routes() {
  const [query, setQuery] = useState('')
  const [openName, setOpenName] = useState(null)

  const term = query.trim().toLowerCase()
  const visible = ROUTES.map((route, index) => ({ route, index })).filter(({ route }) =>
    route.name.toLowerCase().includes(term),
  )

  return (
    <section className="lp-section" id="routes">
      <div className="lp-container">
        <SectionHead
          kicker="Route finder"
          title="Find your route"
          text="Search the sample routes currently listed in UMTGo, then tap one for details."
        />

        <div className="lp-search" data-reveal>
          <Search size={19} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by route name, e.g. DHA"
            aria-label="Search routes"
          />
        </div>

        <p className="lp-search-count" aria-live="polite">
          {visible.length} of {ROUTES.length} sample routes shown
        </p>

        {visible.length > 0 ? (
          <div className="lp-route-grid" data-reveal>
            {visible.map(({ route, index }) => {
              const isOpen = openName === route.name
              const panelId = `route-panel-${index}`
              return (
                <article
                  key={route.name}
                  className={`lp-route ${isOpen ? 'is-open' : ''}`}
                  style={{ '--route': route.color }}
                >
                  <button
                    type="button"
                    className="lp-route-toggle"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenName(isOpen ? null : route.name)}
                  >
                    <div className="lp-route-top">
                      <span className="lp-route-bar" />
                      <ChevronDown size={18} className="lp-route-arrow" />
                    </div>
                    <span className="lp-route-no">ROUTE {String(index + 1).padStart(2, '0')}</span>
                    <h3>{route.name}</h3>
                    <div className="lp-route-meta">
                      <span>
                        <MapPin size={15} /> {route.stops} sample stops
                      </span>
                      <span>
                        <Navigation size={15} /> To UMT campus
                      </span>
                    </div>
                  </button>

                  <div className="lp-route-panel" id={panelId} hidden={!isOpen}>
                    {route.firstBus && route.lastBus && (
                      <p className="lp-route-times">
                        <Clock3 size={15} /> First bus {route.firstBus} · Last bus {route.lastBus}
                      </p>
                    )}
                    {route.stopNames?.length > 0 && (
                      <ol className="lp-route-stops">
                        {route.stopNames.map((stop) => (
                          <li key={stop}>{stop}</li>
                        ))}
                      </ol>
                    )}
                    {!route.firstBus && !route.stopNames?.length && (
                      <p className="lp-route-note">
                        Log in to see this route's stops and bus location when it is available.
                      </p>
                    )}
                    <Link to="/login" className="lp-role-link">
                      Log in to open this route <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="lp-empty">
            <p>No routes match “{query}”.</p>
            <button type="button" className="lp-btn lp-btn-primary" onClick={() => setQuery('')}>
              Clear search
            </button>
          </div>
        )}

        <p className="lp-fineprint">
          Route names and stop counts are sample data. Verify them with the transport office before
          using them as official information.
        </p>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="lp-section lp-dark" id="how-it-works">
      <div className="lp-container">
        <SectionHead
          center
          light
          kicker="How it works"
          title="Three steps to plan your commute"
          text="The intended student journey, from finding a route to checking bus progress."
        />

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

function Features() {
  return (
    <section className="lp-section" id="features">
      <div className="lp-container">
        <SectionHead
          center
          kicker="What UMTGo offers"
          title="Everything for your commute"
          text="A transport experience designed around UMT students."
        />

        <div className="lp-feature-grid">
          {FEATURES.map(({ Icon, title, text }, index) => (
            <article key={title} className="lp-feature" data-reveal style={{ '--d': `${(index % 4) * 80}ms` }}>
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

function SocialProof() {
  if (TESTIMONIALS.length === 0) return null
  return (
    <section className="lp-section lp-proof" id="riders">
      <div className="lp-container">
        <SectionHead center kicker="Riders" title="What students say" />
        <div className="lp-proof-grid">
          {TESTIMONIALS.map((item, index) => (
            <figure key={item.name} className="lp-quote" data-reveal style={{ '--d': `${index * 90}ms` }}>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                {item.role && <span>{item.role}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactCard({ t }) {
  const items = [
    CONTACT.phone && { Icon: Phone, label: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s+/g, '')}` },
    CONTACT.email && { Icon: Mail, label: CONTACT.email, href: `mailto:${CONTACT.email}` },
    CONTACT.whatsapp && { Icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/${CONTACT.whatsapp}` },
  ].filter(Boolean)

  return (
    <div className="lp-contact">
      <h3>{t.contactTitle}</h3>
      <p>{t.contactText}</p>
      <ul>
        <li>
          <MapPin size={16} /> UMT Office of Transportation, Johar Town, Lahore
        </li>
        {items.map(({ Icon, label, href }) => (
          <li key={href}>
            <Icon size={16} />
            <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Faq({ t }) {
  return (
    <section className="lp-section lp-faq" id="faq">
      <div className="lp-container lp-faq-grid">
        <div>
          <SectionHead kicker={t.faqKicker} title={t.faqTitle} text={t.faqText} />
          <ContactCard t={t} />
        </div>
        <div className="lp-faq-list" data-reveal>
          {t.faqs.map(({ q, a }) => (
            <details key={q} className="lp-faq-item">
              <summary>
                {q}
                <ChevronDown size={18} />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCta({ t }) {
  const { canInstall, showIosHint, install } = useInstallPrompt()

  return (
    <section className="lp-section lp-cta-wrap">
      <div className="lp-container">
        <div className="lp-cta" data-reveal>
          <img className="lp-cta-seal" src={umtSeal} alt="" width="340" height="340" />
          <div>
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaText}</p>
            {showIosHint && !canInstall && (
              <p className="lp-install-hint">On iPhone: tap Share, then Add to Home Screen.</p>
            )}
          </div>
          <div className="lp-cta-actions">
            <Link to="/signup" className="lp-btn lp-btn-light lp-btn-lg">
              {t.createAccount} <ArrowRight size={18} />
            </Link>
            <Link to="/login" className="lp-btn lp-btn-glass lp-btn-lg">
              {t.login}
            </Link>
            {canInstall && (
              <button type="button" className="lp-btn lp-btn-glass lp-btn-lg" onClick={install}>
                <Download size={18} /> Add to Home Screen
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer({ t }) {
  return (
    <footer className="lp-footer">
      <div className="lp-container lp-footer-grid">
        <div className="lp-footer-brand">
          <Link to="/" className="lp-brand" aria-label="UMTGo home">
            <img src={umtSeal} alt="UMT seal" width="46" height="46" />
            <span>
              UMT<strong>Go</strong>
            </span>
          </Link>
          <p>A university transport project designed to help the UMT community plan its daily commute.</p>
          <img
            className="lp-footer-logo"
            src={umtLogo}
            alt="University of Management and Technology"
            loading="lazy"
          />
        </div>

        <div>
          <h4>Explore</h4>
          {NAV_ORDER.map(({ id, key }) => (
            <a key={id} href={`#${id}`}>
              {t.nav[key]}
            </a>
          ))}
        </div>

        <div>
          <h4>Account</h4>
          <Link to="/login">{t.login}</Link>
          <Link to="/signup">{t.createAccount}</Link>
          <Link to="/forgot-password">Forgot password</Link>
        </div>

        <div>
          <h4>University</h4>
          <span>UMT Office of Transportation</span>
          <span>Johar Town, Lahore</span>
          <a href="https://www.umt.edu.pk" target="_blank" rel="noreferrer">
            UMT official website <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      <div className="lp-container lp-footer-bottom">
        <span>© {new Date().getFullYear()} UMTGo · University of Management and Technology</span>
        <a href="#top" className="lp-to-top">
          <ArrowUp size={14} /> Back to top
        </a>
      </div>
    </footer>
  )
}

export default function Landing() {
  const rootRef = useRef(null)
  const [lang, setLang] = useState('en')
  const t = COPY[lang]
  const activeId = useActiveSection(SECTION_IDS)

  useReveal(rootRef)
  usePageMeta(SITE)

  return (
    <div className="lp" ref={rootRef} id="top" lang={lang} dir={lang === 'ur' ? 'rtl' : 'ltr'}>
      <Navbar lang={lang} setLang={setLang} t={t} activeId={activeId} />
      <main>
        <Hero t={t} />
        <StatsBar />
        <Tracking />
        <Routes />
        <HowItWorks />
        <Features />
        <SocialProof />
        <Faq t={t} />
        <FinalCta t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}