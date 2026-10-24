import { stats } from "../../../data/landingData";


export default function StatsSection() {
  return (
    <section
      id="stats"
className="relative mx-auto mt-10 max-w-7xl px-5 sm:px-8"    >
      <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="border-b border-slate-100 px-5 py-6 text-center last:border-b-0 sm:border-r sm:px-7 lg:border-b-0"
          >
            <p className="text-2xl font-extrabold tracking-tight text-blue-900">
              {item.value}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-500">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

