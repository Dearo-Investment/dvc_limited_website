import AnimatedSection from './AnimatedSection';
import { leadership } from '@/lib/data';

export default function LeadershipPreview() {
  return (
    <section className="py-28 bg-primary-darker/60 border-y border-white/5">
      <div className="container-content">
        <AnimatedSection className="mb-14 max-w-xl">
          <p className="eyebrow mb-4">Our Leadership</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">
            The people steering DVCCL
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6">
          {leadership.map((person, i) => (
            <AnimatedSection key={person.title} delay={i * 0.08}>
              <div className="card-surface p-6">
                <div className="mb-5 aspect-square w-full rounded-xl bg-primary-light/80 flex items-center justify-center text-neutral-mutedDark text-xs">
                  Photo
                </div>
                <h3 className="font-heading text-lg font-semibold">
                  {person.name}
                </h3>
                <p className="text-sm text-accent-gold mb-2">{person.title}</p>
                <p className="text-xs text-neutral-mutedDark">
                  {person.note}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center">
          <a href="/leadership" className="btn-ghost">
            Meet the Full Team
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
