import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import { company } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Build your career with DVCCL — a fast-growing venture platform across agriculture, engineering, education, and technology in Sri Lanka.',
};

const openRoles = [
  { title: 'Investment Analyst', dept: 'Investment', location: 'Colombo' },
  { title: 'Branch Relationship Officer', dept: 'Operations', location: 'Nationwide' },
  { title: 'Agri Field Coordinator', dept: 'DVCCL Agri', location: 'Regional' },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join Our Team"
        body="Grow your career with a disciplined venture platform empowering businesses and communities across Sri Lanka."
      />
      <section className="py-24">
        <div className="container-content">
          <AnimatedSection className="space-y-4 max-w-3xl mx-auto">
            {openRoles.map((role, i) => (
              <div
                key={role.title}
                className="card-surface flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-6"
              >
                <div>
                  <h3 className="font-heading text-lg font-semibold">
                    {role.title}
                  </h3>
                  <p className="text-sm text-neutral-muted">
                    {role.dept} &middot; {role.location}
                  </p>
                </div>
                <a
                  href={`mailto:${company.email}?subject=Application: ${role.title}`}
                  className="btn-ghost"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
