import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import { leadership } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Leadership',
  description:
    'Meet the leadership team guiding DVCCL\u2019s strategy and governance.',
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Leadership"
        title="The people steering DVCCL"
        body="Add director names, titles, photos, and biographies here."
      />
      <section className="py-24">
        <div className="container-content grid sm:grid-cols-3 gap-6">
          {leadership.map((person, i) => (
            <AnimatedSection key={person.title} delay={i * 0.08}>
              <div className="card-surface p-6">
                <div className="mb-5 aspect-square w-full rounded-xl bg-primary-light/80 flex items-center justify-center text-neutral-mutedDark text-xs">
                  Photo
                </div>
                <h3 className="font-heading text-lg font-semibold">
                  {person.name}
                </h3>
                <p className="text-sm text-accent-gold mb-2">
                  {person.title}
                </p>
                <p className="text-xs text-neutral-mutedDark">
                  {person.note}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
