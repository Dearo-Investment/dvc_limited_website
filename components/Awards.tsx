import AnimatedSection from './AnimatedSection';
import { Award } from 'lucide-react';
import { awards } from '@/lib/data';

export default function Awards() {
  return (
    <section className="py-28">
      <div className="container-content">
        <AnimatedSection className="mb-14 max-w-xl">
          <p className="eyebrow mb-4">Awards & Recognition</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">
            Recognised for excellence
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {awards.map((award, i) => (
            <AnimatedSection
              key={award}
              delay={i * 0.06}
              className="card-surface flex flex-col items-center justify-center gap-3 px-6 py-10 text-center"
            >
              <Award className="text-accent-gold" size={26} />
              <p className="text-sm text-neutral-muted">{award}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
