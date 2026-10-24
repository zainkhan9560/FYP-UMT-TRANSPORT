
import { Clock3, MapPin, BusFront } from "lucide-react";

const stops = [
  { left: "10%", top: "74%" },
  { left: "29%", top: "74%" },
  { left: "29%", top: "49%" },
  { left: "55%", top: "49%" },
  { left: "55%", top: "25%" },
  { left: "83%", top: "25%" },
];

export default function LiveMapCard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 p-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Illustrative route
          </p>
          <h3 className="mt-1 text-lg font-extrabold text-slate-900">
            Askari X route
          </h3>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          Preview
        </span>
      </div>

      <div
        className="relative h-64 overflow-hidden bg-slate-50 sm:h-72"
        aria-label="Illustrative route map"
      >
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        <div className="absolute left-[10%] top-[25%] h-16 w-[20%] rounded-xl bg-emerald-100/70" />
        <div className="absolute left-[47%] top-[65%] h-14 w-[35%] rounded-xl bg-blue-100/70" />

        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <path
            d="M10 74 H29 V49 H55 V25 H83"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="2.5"
            strokeDasharray="2 2"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10 74 H29 V49 H55 V25 H83"
            fill="none"
            stroke="#1d4ed8"
            strokeWidth="1.3"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {stops.map((stop, index) => (
          <span
            key={index}
            className="absolute z-10 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-blue-700 shadow"
            style={{ left: stop.left, top: stop.top }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          </span>
        ))}

        <span className="absolute left-[55%] top-[25%] z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border-2 border-white bg-blue-900 text-white shadow-lg">
          <BusFront size={20} />
        </span>

        <span className="absolute bottom-4 left-4 rounded-lg border border-slate-200 bg-white/95 px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm">
          Sample map preview
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 p-4">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
          <MapPin size={16} className="text-blue-700" />
          Route stops shown
        </span>

        <span className="inline-flex items-center gap-2 text-xs text-slate-500">
          <Clock3 size={15} />
          No live ETA connected
        </span>
      </div>
    </div>
  );
}
