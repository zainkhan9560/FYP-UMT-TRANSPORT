import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  BusFront,
  Clock3,
  MapPin,
  Navigation,
} from 'lucide-react'

const CONTENT = {
  login: {
    eyebrow: 'SMART CAMPUS MOBILITY',
    title: 'Your campus journey,',
    highlight: 'made simpler.',
    description:
      'Know where your university bus is, track its journey, and plan your arrival with confidence.',
  },
  signup: {
    eyebrow: 'JOIN UM TGO',
    title: 'Move smarter.',
    highlight: 'Arrive better.',
    description:
      'Join your campus transport community and make university journeys easier to plan.',
  },
  recovery: {
    eyebrow: 'ACCOUNT RECOVERY',
    title: 'Back on the road,',
    highlight: 'in a few steps.',
    description:
      'Reset your password and get back to your campus transport experience.',
  },
}

export default function AuthLayout({
  children,
  mode = 'login',
}) {
  const content = CONTENT[mode] ?? CONTENT.login

  return (
    <main className="min-h-screen bg-white lg:grid lg:grid-cols-2">
      <aside className="relative hidden min-h-screen flex-col overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-700 p-10 text-white lg:flex xl:p-14">
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />

        <Link
          to="/"
          className="relative z-10 flex w-fit items-center gap-3"
        >
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/20">
            <BusFront size={26} />
          </span>

          <span className="text-2xl font-extrabold tracking-tight">
            UMT<span className="text-blue-300">Go</span>
          </span>
        </Link>

        <div className="relative z-10 my-auto max-w-xl py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-blue-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {content.eyebrow}
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight xl:text-5xl">
            {content.title}
            <br />
            <span className="text-blue-300">
              {content.highlight}
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-blue-100">
            {content.description}
          </p>

          <div className="mt-10 space-y-4">
            <Feature
              icon={Navigation}
              title="Live bus tracking"
              description="See bus locations when GPS is available."
            />
            <Feature
              icon={Clock3}
              title="Smarter arrival times"
              description="Plan your commute with ETA estimates."
            />
          </div>
        </div>

        <p className="relative z-10 flex items-center gap-2 text-sm text-blue-200">
          <MapPin size={16} />
          University of Management and Technology · Lahore
        </p>
      </aside>

      <section className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-8">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="mb-8 flex items-center justify-center gap-3 lg:hidden"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-white">
              <BusFront size={24} />
            </span>
            <span className="text-2xl font-extrabold">
              UMT<span className="text-blue-600">Go</span>
            </span>
          </Link>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-9">
            {children}
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            UMTGo · University Transport Platform
          </p>

          <Link
            to="/"
            className="mx-auto mt-3 flex w-fit items-center gap-1 text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            Back to homepage
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}

function Feature({ icon: Icon, title, description }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-blue-200">
        <Icon size={22} />
      </span>
      <div>
        <h2 className="font-bold">{title}</h2>
        <p className="mt-1 text-sm text-blue-100">{description}</p>
      </div>
    </div>
  )
}