import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowUp, BusFront } from "lucide-react";
import { navigationLinks } from "../../../data/landingData";
import umt_seal from "../../../assets/brand/umt_seal.png";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div>
          <Link to="/" className="inline-flex items-center gap-3 text-white">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
              <img
                src={umt_seal}
                alt="UMT logo"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="text-xl font-extrabold">UMTGo</span>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            A university transport project designed to help the UMT community
            explore routes and plan daily commutes.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Explore
          </h2>

          <div className="flex flex-col items-start gap-3 text-sm">
            {navigationLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Account
          </h2>

          <div className="flex flex-col items-start gap-3 text-sm">
            <Link to="/login" className="hover:text-white">
              Log in
            </Link>
            <Link to="/signup" className="hover:text-white">
              Create account
            </Link>
            <Link to="/forgot-password" className="hover:text-white">
              Forgot password
            </Link>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            University
          </h2>

          <p className="text-sm leading-6 text-slate-400">
            UMT Office of Transportation
            <br />
            Johar Town, Lahore
          </p>

          <a
            href="https://www.umt.edu.pk/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white"
          >
            UMT official website <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-slate-400 sm:px-8">
          <span>
            © {new Date().getFullYear()} UMTGo · University of Management and
            Technology
          </span>

          <a
            href="#top"
            className="inline-flex items-center gap-1 font-semibold hover:text-white"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
