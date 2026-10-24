import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight, BusFront } from "lucide-react";
import { navigationLinks } from "../../../data/landingData";
import umt_seal from "../../../assets/brand/umt_seal.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[100] w-full border-b border-slate-200/70 bg-white shadow-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
        >
          <img
            src={umt_seal}
            alt="UMT Seal"
            className="h-11 w-11 rounded-xl bg-white object-contain"
          />

          <span className="text-2xl font-extrabold tracking-tight text-slate-900">
            UMT<span className="text-blue-600">Go</span>
            <span className="mt-0.5 block text-xs font-medium tracking-wide text-slate-500">
              University Transport
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {navigationLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-600 transition duration-200 hover:bg-blue-50 hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop account actions */}
        <div className="hidden items-center gap-5 md:flex">
          <Link
            to="/login"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            style={{
              color: "#ffffff",
            }}
            className="group inline-flex items-center gap-2 rounded-xl bg-blue-900 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-blue-600/30"
          >
            Get started
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 md:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile navigation panel */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 shadow-xl md:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navigationLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
              <Link
                to="/login"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700"
              >
                Log in
              </Link>

              <Link
                to="/signup"
                style={{
                  color: "#ffffff",
                }}
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-900 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-blue-600/30"
              >
                Get started
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
