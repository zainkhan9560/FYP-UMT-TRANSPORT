import { ArrowRight } from "lucide-react";
import { steps } from "../../../data/landingData";


export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-widest text-blue-700">
            Simple process
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            How UMTGo works
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            A straightforward way to start planning your university commute.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900 text-lg font-extrabold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-5 text-lg font-extrabold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <ArrowRight
                  size={19}
                  className="absolute right-6 top-8 hidden text-blue-300 md:block"
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

