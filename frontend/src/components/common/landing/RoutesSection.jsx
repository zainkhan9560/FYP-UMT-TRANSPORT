
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Search } from "lucide-react";
import { routes } from "../../../data/landingData";

export default function RoutesSection() {
  const [query, setQuery] = useState("");

  const filteredRoutes = useMemo(() => {
    return routes.filter((route) =>
      route.name.toLowerCase().includes(query.trim().toLowerCase())
    );
  }, [query]);

  return (
    <section
      id="routes"
      className="scroll-mt-24 bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-widest text-blue-700">
              Route finder
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Explore listed routes
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Search the sample routes currently shown in UMTGo.
            </p>
          </div>

          <label className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm md:max-w-sm">
            <Search size={19} className="shrink-0 text-slate-400" />

            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="Search route name..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </label>
        </div>

        <p className="mt-5 text-sm text-slate-500" aria-live="polite">
          Showing {filteredRoutes.length} of {routes.length} sample routes
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRoutes.map((route) => (
            <article
              key={route.name}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/5"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-800">
                  <MapPin size={21} />
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                  {route.stops} sample stops
                </span>
              </div>

              <h3 className="mt-5 text-lg font-extrabold text-slate-900">
                {route.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Route details may need confirmation with the UMT
                transport office.
              </p>

              <Link
                to="/login"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-800 group-hover:text-blue-950"
              >
                View details <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}

          {filteredRoutes.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center sm:col-span-2 lg:col-span-3">
              <p className="font-bold text-slate-800">No routes found</p>
              <p className="mt-1 text-sm text-slate-500">
                Try another route name.
              </p>
            </div>
          )}
        </div>

        <p className="mt-6 text-xs leading-5 text-slate-500">
          These are sample frontend entries, not verified official route data.
        </p>
      </div>
    </section>
  );
}
