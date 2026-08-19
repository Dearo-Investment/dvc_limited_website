import AnimatedSection from './AnimatedSection';
import { about } from '@/lib/data';

export default function AboutSection() {
  return (
    <section className="py-28">
      
      <div className="container-content grid md:grid-cols-2 w-full gap-16 items-start">
        <AnimatedSection>
          <p className="eyebrow mb-4">About DVCCL</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight mb-6">
            A disciplined venture platform, built for Sri Lanka&apos;s future
          </h2>
          <p className="text-neutral-muted leading-relaxed mb-4">
            {about.paragraph1}
          </p>
          <p className="text-neutral-muted leading-relaxed mb-8">
            {about.paragraph2}
          </p>
          <a href="/about" className="btn-primary">
            About DVCCL
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="card-surface p-8 md:p-10 relative">
            <div className="section-rule mb-6" />
            <p className="eyebrow mb-4">Our Vision</p>
            <p className="font-heading text-xl md:text-2xl leading-relaxed text-neutral-white/90">
              &ldquo;{about.vision}&rdquo;
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
