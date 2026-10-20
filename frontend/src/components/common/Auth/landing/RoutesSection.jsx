import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { routes } from '../../data/landingData'

export default function RoutesSection() {
  return (
    <section
      id="routes"
      className="scroll-mt-24 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
              Plan your journey
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Explore your route
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Discover route information and continue to the tracking
              experience.
            </p>
          </div>

          <Link
            to="/login"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-700 transition hover:text-blue-900"
          >
            View tracking
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route, index) => (
            <Link
              to="/login"
              key={route.name}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                  <MapPin size={22} />
                </span>

                <span className="text-xs font-bold tracking-wider text-slate-400">
                  ROUTE {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-bold text-slate-900">
                {route.name}
              </h3>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-sm text-slate-500">
                  {route.stops}
                </span>

                <ArrowUpRight
                  size={19}
                  className="text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                />
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-6 text-xs leading-6 text-slate-500">
          Sample routes for demonstration only. Actual availability,
          stops, and route details must come from the transport database.
        </p>
      </div>
    </section>
  )
}