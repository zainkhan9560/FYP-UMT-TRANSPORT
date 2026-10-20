import { Link } from 'react-router-dom'
import { ArrowUpRight, BusFront } from 'lucide-react'
import { navigationLinks } from '../../data/landingData'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-4 text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-16">
          <div>
            <Link
              to="/"
              className="flex w-fit items-center gap-3"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-white">
                <BusFront size={23} />
              </span>

              <span className="text-2xl font-extrabold text-white">
                UMT<span className="text-blue-400">Go</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              A smarter university transport experience, designed to
              make everyday journeys easier to plan.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Explore</h3>

            <div className="mt-5 flex flex-col items-start gap-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Your account</h3>

            <div className="mt-5 flex flex-col items-start gap-4">
              <Link
                to="/login"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Log in
              </Link>

              <Link
                to="/signup"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Create account
              </Link>

              <Link
                to="/forgot-password"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Forgot password
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Project</h3>

            <div className="mt-5 space-y-4 text-sm text-slate-400">
              <p>UMTGo</p>
              <p>University transport platform</p>
              <p>Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} UMTGo. All rights reserved.
          </p>

          <a
            href="#top"
            className="inline-flex w-fit items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-white"
          >
            Back to top
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}