import { Link } from 'react-router-dom'
import { ArrowRight, BusFront } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-6 py-14 text-center text-white shadow-xl shadow-blue-900/10 sm:px-12 sm:py-20">
          <div className="absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-28 -left-20 -z-10 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
            <BusFront size={30} />
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100 sm:text-sm">
            Your next journey starts here
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Make every trip to campus a little easier.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
            Sign in to explore your transport experience with UMTGo.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Create your account
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              I already have an account
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}