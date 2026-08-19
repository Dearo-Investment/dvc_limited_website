import type { Metadata } from 'next';
import { FileText } from 'lucide-react';
import PageHero from '@/components/PageHero';
import AnimatedSection from '@/components/AnimatedSection';
import { investorReports, investorInvitation } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Investor Relations',
  description:
    'Financial transparency at DVCCL — annual reports, performance highlights, risk overview, and investment opportunities in Sri Lanka.',
};

export default function InvestorRelationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Relations"
        title="Financial Reports"
        body="At DVCCL, we believe in complete financial transparency. Our reports provide a clear view of performance, risk, and strategy."
      />

      <section className="py-24">
        <div className="container-content grid sm:grid-cols-2 gap-5">
          {investorReports.map((r, i) => (
            <AnimatedSection
              key={r.title}
              delay={i * 0.06}
              className="card-surface p-7"
            >
              <FileText className="text-accent-gold mb-4" size={22} />
              <h3 className="font-heading text-lg font-semibold mb-2">
                {r.title}
              </h3>
              <p className="text-sm text-neutral-muted leading-relaxed">
                {r.body}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-24 bg-primary-darker/60 border-y border-white/5">
        <div className="container-content">
          <AnimatedSection className="max-w-xl mb-14">
            <p className="eyebrow mb-4">Investor Invitation</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold">
              Partner with a high-growth, impact-driven financial institution
              operating in Sri Lanka and emerging global markets.
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-5">
            {investorInvitation.map((item, i) => (
              <AnimatedSection
                key={item.title}
                delay={i * 0.06}
                className="card-surface p-7"
              >
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-muted leading-relaxed">
                  {item.body}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-content">
          <AnimatedSection className="relative overflow-hidden rounded-3xl border border-accent-gold/30 bg-gradient-to-br from-primary-light to-primary-deep px-8 py-16 md:px-16 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              Ready to Partner With DVCCL?
            </h2>
            <p className="text-neutral-muted max-w-xl mx-auto mb-8 leading-relaxed">
              Join us in driving sustainable growth and impactful returns.
            </p>
            <a href="/contact" className="btn-primary">
              Contact Our Investment Team
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
