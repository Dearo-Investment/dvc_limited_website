import AnimatedSection from './AnimatedSection';
import { ArrowUpRight } from 'lucide-react';
import { subsidiaries } from '@/lib/data';

export default function SubsidiariesPreview() {
  return (
    <section className="py-28 bg-primary-darker/60 border-y border-white/5">
      <div className="container-content">
        <AnimatedSection className="mb-14 max-w-xl">
          <p className="eyebrow mb-4">Our Subsidiaries</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">
            Driving growth through diversified and strategic business ventures
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          {subsidiaries.map((s, i) => (
            <AnimatedSection key={s.slug} delay={i * 0.06}>
              <a
                href={`/subsidiaries#${s.slug}`}
                className="group card-surface flex h-full flex-col justify-between p-7 transition-colors hover:border-accent-gold/40"
              >
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {s.name}
                  </h3>
                  <p className="text-sm text-neutral-muted leading-relaxed">
                    {s.summary}
                  </p>
                </div>
                <ArrowUpRight
                  className="mt-6 text-accent-gold opacity-0 -translate-y-1 translate-x-0 transition-all group-hover:opacity-100 group-hover:translate-y-0"
                  size={18}
                />
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center">
          <a href="/subsidiaries" className="btn-ghost">
            View All Subsidiaries
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
