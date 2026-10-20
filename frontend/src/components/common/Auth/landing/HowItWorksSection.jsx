import { ArrowRight } from 'lucide-react'
import { steps } from '../../data/landingData'

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
            Simple by design
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Three steps. One smarter journey.
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            The goal is to make everyday university transport easier
            to understand and plan.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="relative rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-600 text-lg font-extrabold text-white shadow-lg shadow-blue-600/20">
                  {step.number}
                </span>

                {index < steps.length - 1 && (
                  <ArrowRight
                    size={22}
                    className="hidden text-blue-300 md:block"
                  />
                )}
              </div>

              <h3 className="mt-7 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}