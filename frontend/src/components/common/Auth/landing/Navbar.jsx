import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BusFront, Menu, X } from 'lucide-react'
import { navigationLinks } from "../../../../data/landingData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
        >
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <BusFront size={24} />
          </span>

          <span className="text-2xl font-extrabold tracking-tight text-slate-900">
            UMT<span className="text-blue-600">Go</span>
          </span>
        </Link>

        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute left-0 right-0 top-full flex-col gap-1 border-b border-slate-200 bg-white p-4 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          aria-label="Main navigation"
        >
          {navigationLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 md:px-0 md:py-2 md:hover:bg-transparent"
            >
              {item.label}
            </a>
          ))}

          <div className="mt-2 flex flex-col gap-3 md:hidden">
            <Link
              to="/login"
              onClick={closeMenu}
              className="rounded-xl border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-slate-700"
            >
              Log in
            </Link>

            <Link
              to="/signup"
              onClick={closeMenu}
              className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get started
            </Link>
          </div>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            to="/login"
            className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Get started
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 md:hidden"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  )
}