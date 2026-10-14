import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { ArrowUpRight, Clock3, MapPin, Navigation } from 'lucide-react'

import UmtLogo from '../brand/UmtLogo.jsx'
=======
import { Clock3, MapPin, Navigation } from 'lucide-react'

import umtLogo from '../../assets/umt-logo.png'
import umtSeal from '../../assets/umt-seal.png'
>>>>>>> 489011d (landing page added to the project)
import shuttle from '../../assets/campus/campus-shuttle.webp'
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

<<<<<<< HEAD
function Brand({ className, logoSize }) {
  return (
    <Link to="/login" className={className}>
      <span className="brand-icon">
        <UmtLogo size={logoSize} />
      </span>
      <span>
        UMT <strong>Transit</strong>
=======
function Brand() {
  return (
    <Link to="/" className="brand">
      <span className="brand-icon">
        <img src={umtSeal} alt="UMT seal" />
      </span>
      <span>
        UMT<strong>Go</strong>
>>>>>>> 489011d (landing page added to the project)
      </span>
    </Link>
  )
}

export default function AuthLayout({ children, mode = 'login' }) {
<<<<<<< HEAD
  const isSignup = mode === 'signup'
=======
>>>>>>> 489011d (landing page added to the project)
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

<<<<<<< HEAD
        <Brand className="brand" logoSize={46} />
=======
        <Brand />
>>>>>>> 489011d (landing page added to the project)

        <div className="visual-content">
          <span className="eyebrow">
            <span className="live-dot" />
            SMART CAMPUS MOBILITY
          </span>

          <h1>{HEADLINES[mode] ?? HEADLINES.login}</h1>
          <p>{DESCRIPTIONS[mode] ?? DESCRIPTIONS.login}</p>

          <div className="feature-card">
            <div className="feature-icon">
<<<<<<< HEAD
              <Navigation size={21} />
=======
              <Navigation size={20} />
>>>>>>> 489011d (landing page added to the project)
            </div>
            <div>
              <strong>Live bus tracking</strong>
              <span>See your bus on the map</span>
            </div>
<<<<<<< HEAD
            <ArrowUpRight className="feature-arrow" size={19} />
=======
>>>>>>> 489011d (landing page added to the project)
          </div>

          <div className="feature-card">
            <div className="feature-icon">
<<<<<<< HEAD
              <Clock3 size={21} />
=======
              <Clock3 size={20} />
>>>>>>> 489011d (landing page added to the project)
            </div>
            <div>
              <strong>Smarter arrival times</strong>
              <span>Get estimated arrival updates</span>
            </div>
<<<<<<< HEAD
            <ArrowUpRight className="feature-arrow" size={19} />
=======
>>>>>>> 489011d (landing page added to the project)
          </div>
        </div>

        <p className="visual-footer">
          <MapPin size={14} />
          University of Management and Technology · C-II, Johar Town, Lahore
        </p>
      </aside>

      <section className="auth-panel">
<<<<<<< HEAD
        <div className="mobile-hero" aria-hidden="true">
          <img src={shuttle} alt="" decoding="async" />
        </div>

        <div className={`auth-form-wrap ${isSignup ? 'signup-form-wrap' : ''}`}>
          <Brand className="mobile-brand" logoSize={40} />

          {children}

          <p className="security-note">
            University transport access · Secure account required
          </p>
=======
        <div className="auth-card">
          <img
            className="card-logo"
            src={umtLogo}
            alt="University of Management and Technology, Estd. 1990"
          />

          {children}
>>>>>>> 489011d (landing page added to the project)
        </div>
      </section>
    </main>
  )
}
