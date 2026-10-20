import { stats } from '../../data/landingData'

export default function StatsSection() {
  return (
    <section className="border-b border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 sm:grid-cols-4 sm:divide-y-0">
        {stats.map((item) => (
          <div
            key={item.label}
            className="px-4 py-5 text-center sm:px-6"
          >
            <p className="text-2xl font-extrabold tracking-tight text-blue-700 sm:text-3xl">
              {item.value}
            </p>
            <p className="mx-auto mt-2 max-w-40 text-xs leading-5 text-slate-500 sm:text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}