import { Link } from "react-router-dom";
import { ArrowRight, BusFront, MapPin, ShieldCheck } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 px-6 py-12 shadow-sm sm:px-12 sm:py-16 lg:px-16">
          {/* Decorative background elements */}
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Text content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100">
                  <BusFront size={16} />
                </span>
                Your journey starts here
              </div>

              <h2 className="mt-6 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Make every campus journey
                <span className="mt-1 block text-blue-600">
                  simpler with UMTGo.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Get access to university transport information, explore bus
                routes, and make your daily commute easier with one connected
                platform.
              </p>

              <div className="mt-7 flex flex-wrap gap-5 text-sm font-medium text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={17} className="text-blue-600" />
                  Explore bus routes
                </span>

                <span className="inline-flex items-center gap-2">
                  <ShieldCheck size={17} className="text-blue-600" />
                  Student-focused access
                </span>
              </div>
            </div>

            {/* Action card */}
            <div className="rounded-2xl border border-white bg-white/90 p-6 shadow-xl shadow-blue-950/5 backdrop-blur-sm sm:p-8">
              <p className="text-lg font-bold text-slate-900">
                Ready to get started?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Create your account or sign in to continue to UMTGo.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  to="/signup"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3.5 font-bold text-white shadow-md shadow-blue-700/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-800"
                >
                  Create account
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/login"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3.5 font-bold text-slate-700 transition duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  Log in to UMTGo
                </Link>
              </div>

              <p className="mt-5 text-center text-xs leading-5 text-slate-400">
                University transport information, all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
