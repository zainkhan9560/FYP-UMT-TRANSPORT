import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock3, MapPin, Navigation } from 'lucide-react'

import umtLogo from '../../assets/brand/umt_logo.png'
import umtSeal from '../../assets/brand/umt_seal.png'
import shuttle from '../../assets/campus/campus_shuttle.webp'
import lawn from '../../assets/campus/campus-lawn.webp'
import building from '../../assets/campus/campus-building.webp'
import '../../styles/auth.css'

const HEADLINES = {
  login: (
    <>
      Your campus journey,
      <br />
      <span>made simpler.</span>
    </>
  ),
  signup: (
    <>
      Move smarter.
      <br />
      <span>Arrive better.</span>
    </>
  ),
  recovery: (
    <>
      Back on the road,
      <br />
      <span>in a few steps.</span>
    </>
  ),
}

const DESCRIPTIONS = {
  login:
    'Know where your university bus is, track its journey, and plan your arrival with confidence.',
  signup:
    'Join your campus transit community and make every university journey easier to plan.',
  recovery:
    'Reset your password securely and get back to tracking your campus bus.',
}

const CAMPUS_PHOTOS = {
  shuttle: { src: shuttle, alt: 'A blue UMT shuttle bus parked in front of the main academic block' },
  lawn: { src: lawn, alt: 'UMT campus lawn with academic blocks and international flags' },
  building: { src: building, alt: 'UMT main building under a blue sky with shaded seating areas' },
}

// Each page opens on a different photo, then the slideshow cycles through all three.
const SLIDE_ORDER = {
  login: ['shuttle', 'lawn', 'building'],
  signup: ['lawn', 'building', 'shuttle'],
  recovery: ['building', 'shuttle', 'lawn'],
}

function Brand() {
  return (
    <Link to="/" className="brand">
      <span className="brand-icon">
        <img src={umtSeal} alt="UMT seal" />
      </span>
      <span>
        UMT<strong>Go</strong>
      </span>
    </Link>
  )
}

export default function AuthLayout({ children, mode = 'login' }) {
  const isSignup = mode === 'signup'
  const slides = (SLIDE_ORDER[mode] ?? SLIDE_ORDER.login).map((key) => CAMPUS_PHOTOS[key])

  return (
    <main className={`auth-page auth-${mode}`}>
      <aside className="auth-visual">
        <div className="auth-slides" aria-hidden="true">
          {slides.map((photo, index) => (
            <img
              key={photo.src}
              className="auth-slide"
              src={photo.src}
              alt=""
              style={{ '--slide-index': index }}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          ))}
        </div>

        <Brand />

        <div className="visual-content">
          <span className="eyebrow">
            <span className="live-dot" />
            SMART CAMPUS MOBILITY
          </span>

          <h1>{HEADLINES[mode] ?? HEADLINES.login}</h1>
          <p>{DESCRIPTIONS[mode] ?? DESCRIPTIONS.login}</p>

          <div className="feature-card">
            <div className="feature-icon">
              <Navigation size={21} />
            </div>
            <div>
              <strong>Live bus tracking</strong>
              <span>See your bus on the map</span>
            </div>
            <ArrowUpRight className="feature-arrow" size={19} />
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Clock3 size={21} />
            </div>
            <div>
              <strong>Smarter arrival times</strong>
              <span>Get estimated arrival updates</span>
            </div>
            <ArrowUpRight className="feature-arrow" size={19} />
          </div>
        </div>

        <p className="visual-footer">
          <MapPin size={14} />
          University of Management and Technology · C-II, Johar Town, Lahore
        </p>
      </aside>

      <section className="auth-panel">
        <div className="mobile-hero" aria-hidden="true">
          <img src={shuttle} alt="" decoding="async" />
        </div>

        <div className={`auth-form-wrap ${isSignup ? 'signup-form-wrap' : ''}`}>
          <img
            className="form-logo"
            src={umtLogo}
            alt="University of Management and Technology, Estd. 1990"
          />

          {children}
        </div>
      </section>
    </main>
  )
}
