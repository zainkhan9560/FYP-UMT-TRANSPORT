import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
} from 'lucide-react'

const benefits = [
  'View available routes and pickup stops',
  'Check bus location when live GPS is available',
  'Use estimated arrival times to plan ahead',
]

export default function TrackingSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-slate-100 to-indigo-100 p-5 sm:p-8">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-blue-200/50 blur-3xl" />

          <div className="relative rounded-2xl border border-white bg-white p-5 shadow-xl sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Tracking overview
                </p>
                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  Your bus journey
                </h3>
              </div>

              <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                Demo
              </span>
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-5">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-blue-100 text-blue-700">
                    <MapPin size={18} />
                  </span>
                  <span className="my-1 h-10 border-l-2 border-dashed border-blue-300" />
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                    <MapPin size={18} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-5">
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Pickup stop
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Your selected boarding point
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      UMT Campus
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Destination
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-xl border border-slate-200 p-4">
              <Clock3 size={21} className="text-blue-600" />
              <div>
                <p className="text-xs text-slate-500">
                  Estimated arrival
                </p>
                <p className="mt-1 text-sm font-bold text-slate-800">
                  Awaiting live transport data
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
            Less uncertainty, better planning
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Know more about your journey before you leave.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            UMTGo is designed to bring bus tracking, route details, and
            estimated arrival information together in one place.
          </p>

          <ul className="mt-7 space-y-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base"
              >
                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />
                {benefit}
              </li>
            ))}
          </ul>

          <Link
            to="/login"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Explore tracking
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}