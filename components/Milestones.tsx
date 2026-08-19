import AnimatedSection from './AnimatedSection';
import { milestones } from '@/lib/data';

export default function Milestones() {
  return (
    <section className="py-28 bg-primary-darker/60 border-y border-white/5">
      <div className="container-content">
        <AnimatedSection className="mb-16 max-w-xl">
          <p className="eyebrow mb-4">Key Milestones</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">
            Our journey so far
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
          <div className="space-y-12 md:space-y-0">
            {milestones.map((m, i) => (
              <AnimatedSection
                key={m.year}
                delay={i * 0.08}
                className={`relative md:grid md:grid-cols-2 md:gap-16 ${
                  i % 2 === 0 ? '' : ''
                }`}
              >
                <div
                  className={`pl-10 md:pl-0 ${
                    i % 2 === 0
                      ? 'md:col-start-1 md:text-right md:pr-16'
                      : 'md:col-start-2 md:pl-16'
                  }`}
                >
                  <span className="absolute left-0 md:left-1/2 top-1 h-3.5 w-3.5 -translate-x-[calc(50%-15px)] md:-translate-x-1/2 rounded-full bg-accent-gold ring-4 ring-primary-darker" />
                  <p className="font-heading text-2xl font-semibold text-accent-gold mb-1">
                    {m.year}
                  </p>
                  <p className="text-sm uppercase tracking-wide text-neutral-muted mb-2">
                    {m.tag}
                  </p>
                  <p className="text-neutral-muted leading-relaxed">
                    {m.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
