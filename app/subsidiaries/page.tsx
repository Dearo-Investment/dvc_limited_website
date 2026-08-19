import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import { subsidiaries } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Subsidiaries',
  description:
    'Explore DVCCL\u2019s diversified subsidiaries across agriculture, engineering, education, lime production, seafood, and IT solutions.',
};

export default function SubsidiariesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Subsidiaries"
        title="Driving growth through diversified and strategic business ventures"
      />
      <section className="py-24">
        <div className="container-content space-y-6">
          {subsidiaries.map((s, i) => (
            <AnimatedSection
              key={s.slug}
              delay={i * 0.05}
              className="card-surface relative p-8 md:p-10 scroll-mt-28"
            >
              <span id={s.slug} className="block -mt-28 pt-28 absolute" aria-hidden />
              <p className="eyebrow mb-3">0{i + 1}</p>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
                {s.name}
              </h2>
              <p className="text-neutral-muted leading-relaxed max-w-2xl">
                {s.summary}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
