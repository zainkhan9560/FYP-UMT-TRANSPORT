
import { CheckCircle2 } from "lucide-react";
import LiveMapCard from "./LiveMapCard";

const benefits = [
  "Explore available transport routes",
  "Review route and stop information",
  "Keep trip details in one place",
];

export default function TrackingSection() {
  return (
    <section
      id="tracking"
      className="scroll-mt-24 py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-widest text-blue-700">
            Transport information
          </p>

          <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Know your route before you leave.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Find useful route information without searching across
            different places. UMTGo brings essential commute details
            together.
          </p>

          <ul className="mt-7 space-y-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 text-sm font-semibold text-slate-700"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <LiveMapCard />
      </div>
    </section>
  );
}
