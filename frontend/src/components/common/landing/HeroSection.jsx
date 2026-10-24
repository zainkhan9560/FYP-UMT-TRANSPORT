import { Link } from "react-router-dom";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import campus_shuttle from "../../../assets/campus/campus_shuttle.webp";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      {/* UMT bus background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${campus_shuttle})` }}
      />

      {/* Dark overlay for readable text */}
      <div className="absolute inset-0 -z-10 bg-slate-950/65" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />

      <div className="mx-auto grid min-h-[580px] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 lg:px-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Your campus journey,
            <span className="block bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
              made smarter.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
            Make your daily commute easier with UMTGo. Explore bus routes, check
            transport information, and stay informed about your university
            journey.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/signup"
              className="group inline-flex items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-900 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Get Started
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#routes"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              <MapPin size={18} />
              Explore Routes
            </a>
          </div>
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  );
}
