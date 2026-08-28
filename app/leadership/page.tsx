import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Our Leadership',
  description:
    'Meet the leadership team guiding DVCCL’s strategy and governance.',
};

const directors = [
  {
    name: 'Mr. Prasanna Sanjeewa Ranasinghe',
    role: 'Executive Director / Chief Executive Officer',
    image: '/directors/prasanna 1.png',
  },
  {
    name: 'Mr. Roshan Jansen',
    role: 'Executive Director / Deputy Chief Executive Officer',
    image: '/directors/roshan.png',
  },
  {
    name: 'Mr. Upul Edirisooriya',
    role: 'Non Independent Non Executive Director',
    image: '/directors/upul.png',
  },
  {
    name: 'Mr. Seiichirou Ukegawa',
    role: 'Non Independent Non Executive Director',
    image: '/directors/Seiichirou-Ukegawa.webp',
  },
  {
    name: 'Mr. Iwatsuka Sangyo',
    role: 'Non Independent Non Executive Director',
    image: '/directors/Iwatsuka-Sangyo.jpeg',
  },
];

const corporateManagement = [
  {
    name: 'Mr. Terence Yatawara',
    role: 'Head of Sales & Marketing',
    image: '/directors/terence.png',
  },
  {
    name: 'Mr. Rajitha Madushanka',
    role: 'Head of Administration',
    image: '/directors/rajitha.jpg',
  },
  {
    name: 'Mr. Asitha Suranjith',
    role: 'Head of Investment',
    image: '/directors/asith1.jpg',
  },
  {
    name: 'Mr. Chathura Dissanayaka',
    role: 'Head of Channel Development',
    image: '/directors/chathura.jpg',
  },
  {
    name: 'Mr. Rex',
    role: 'Head of Branch Operation',
    image: '/directors/rex1.jpg',
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Leadership"
        title="The people steering DVCCL"
        body="Strategic leadership and operational excellence guiding Dearo Venture Capital Limited."
      />

      {/* Board of Directors */}
      <section className="py-20">
        <div className="container-content">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Board of Directors
            </h2>
            <p className="text-neutral-mutedDark max-w-2xl mx-auto">
              Strategic leadership guiding Dearo Venture Capital Limited
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {directors.map((director, i) => (
              <AnimatedSection key={director.name} delay={i * 0.08}>
                <div className="card-surface p-6 h-full flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-square w-36 h-36 mb-5 rounded-full overflow-hidden ring-4 ring-primary-light/30 group-hover:ring-primary/50 transition-all duration-300">
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 144px, 144px"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-1">
                    {director.name}
                  </h3>
                  <p className="text-sm text-accent-gold font-medium">
                    {director.role}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-content">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-mutedDark/20 to-transparent"></div>
      </div>

      {/* Corporate Management */}
      <section className="py-20">
        <div className="container-content">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Corporate Management
            </h2>
            <p className="text-neutral-mutedDark max-w-2xl mx-auto">
              Driving operational excellence across Dearo Venture Capital Limited
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {corporateManagement.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.08}>
                <div className="card-surface p-6 h-full flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-square w-32 h-32 mb-5 rounded-full overflow-hidden ring-4 ring-primary-light/30 group-hover:ring-primary/50 transition-all duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 128px, 128px"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs text-neutral-mutedDark font-medium px-4 py-1.5 bg-primary-light/10 rounded-full mt-2">
                    {member.role}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}