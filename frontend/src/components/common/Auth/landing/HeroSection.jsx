import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BusFront,
  Clock3,
  MapPin,
} from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-700 text-white">
      <div className="absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -bottom-40 left-1/3 -z-10 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-blue-100 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            University of Management and Technology
          </div>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Your campus commute,
            <span className="mt-1 block text-blue-300">
              made smarter.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
            Track your university bus, check estimated arrival times,
            and plan your journey with less uncertainty.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-blue-800 shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Track your bus
              <ArrowRight size={18} />
            </Link>

            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white transition hover:bg-white/20"
            >
              Explore features
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4 text-sm text-blue-100">
            <div className="flex -space-x-2">
              {['U', 'M', 'T'].map((letter) => (
                <span
                  key={letter}
                  className="grid h-9 w-9 place-items-center rounded-full border-2 border-blue-800 bg-white text-xs font-bold text-blue-700"
                >
                  {letter}
                </span>
              ))}
            </div>
            <span>One connected transport experience</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-8 rounded-full bg-blue-300/20 blur-3xl" />

          <div className="relative rounded-3xl border border-white/20 bg-white p-5 text-slate-900 shadow-2xl shadow-blue-950/30 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Your journey
                </span>
                <h2 className="mt-1 text-xl font-bold">
                  Campus shuttle
                </h2>
              </div>

              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                <BusFront size={25} />
              </span>
            </div>

            <div className="relative mt-6 h-60 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
              <div className="absolute -left-8 top-16 h-4 w-[120%] rotate-12 bg-white/90" />
              <div className="absolute left-0 top-36 h-5 w-[120%] -rotate-12 bg-white/90" />
              <div className="absolute left-1/3 top-0 h-[130%] w-5 rotate-12 bg-white/90" />
              <div className="absolute left-0 top-1/2 h-px w-full border-t-2 border-dashed border-blue-300" />

              <div className="absolute left-[12%] top-[28%] flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-bold shadow-md">
                <MapPin size={16} className="text-blue-600" />
                Pickup
              </div>

              <span className="absolute left-[44%] top-[46%] grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-white shadow-xl ring-4 ring-white">
                <BusFront size={24} />
              </span>

              <div className="absolute bottom-[13%] right-[7%] flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-bold shadow-md">
                <MapPin size={16} className="text-emerald-600" />
                UMT Campus
              </div>

              <span className="absolute bottom-3 left-3 rounded-full border border-white bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-500">
                Illustrative map preview
              </span>
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-100 text-blue-700">
                <Clock3 size={21} />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-500">
                  Arrival estimate
                </p>
                <p className="mt-1 text-sm font-bold text-slate-800">
                  Ready for live data
                </p>
              </div>

              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                Preview
              </span>
            </div>
          </div>

          <div className="absolute -left-3 top-10 hidden items-center gap-3 rounded-2xl border border-white/60 bg-white p-4 text-slate-800 shadow-xl sm:flex lg:-left-8">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-100 text-blue-700">
              <MapPin size={20} />
            </span>
            <div>
              <p className="text-sm font-bold">Live location</p>
              <p className="mt-1 text-xs text-slate-500">
                When a driver is connected
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 right-4 hidden items-center gap-2 rounded-xl border border-white/40 bg-white/95 px-4 py-3 text-sm font-semibold text-slate-700 shadow-xl sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Smarter journeys start here
          </div>
        </div>
      </div>
    </section>
  )
}