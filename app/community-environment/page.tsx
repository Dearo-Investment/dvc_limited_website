import type { Metadata } from 'next';
import { Leaf, Users, HeartHandshake, Recycle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Community & Environment',
  description:
    'DVCCL\u2019s CSR initiatives and sustainability commitments across the communities we operate in.',
};

const pillars = [
  {
    icon: Leaf,
    title: 'Sustainable Agriculture',
    body: 'Supporting smallholder farmers through DVCCL Agri with training in sustainable, technology-led farming practices.',
  },
  {
    icon: Users,
    title: 'Community Development',
    body: 'Investing in local livelihoods through financing that reaches underserved regions across all 25 branches.',
  },
  {
    icon: HeartHandshake,
    title: 'Education Access',
    body: 'DVCCL Education extends learning accessibility and skills development to communities nationwide.',
  },
  {
    icon: Recycle,
    title: 'Environmental Responsibility',
    body: 'Responsible sourcing and production standards across DVCCL Lime and DCCI operations.',
  },
];

export default function CommunityEnvironmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Community & Environment"
        title="Empowering communities, protecting our environment"
        body="Sustainable growth and community impact sit at the core of every DVCCL venture."
      />
      <section className="py-24">
        <div className="container-content grid sm:grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <AnimatedSection
              key={p.title}
              delay={i * 0.06}
              className="card-surface p-7"
            >
              <p.icon className="text-accent-gold mb-4" size={22} />
              <h3 className="font-heading text-lg font-semibold mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-neutral-muted leading-relaxed">
                {p.body}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
