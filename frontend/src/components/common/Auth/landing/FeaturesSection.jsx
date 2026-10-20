import { features } from '../../data/landingData'

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="scroll-mt-24 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
            What UMTGo offers
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything your commute needs
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            A unified transport experience designed for students,
            drivers, and university transport administrators.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={25} strokeWidth={1.8} />
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {description}
              </p>

              <span className="pointer-events-none absolute -bottom-5 -right-1 text-7xl font-black text-slate-100 transition group-hover:text-blue-50">
                {String(index + 1).padStart(2, '0')}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}