"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteData } from "@/data/siteData";

export default function InvestmentsPage() {
  return (
    <div className="pt-32 pb-24 bg-neutral-offwhite min-h-screen">
      <Container>
        <AnimatedSection>
          <div className="max-w-4xl mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-deep mb-6">
              Investment Strategy
            </h1>
            <p className="text-xl text-neutral-muted leading-relaxed font-body">
              We employ a rigorous, multi-disciplinary approach to capital allocation, targeting sectors with high potential for disruption, scalability, and long-term economic contribution.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <SectionHeading subtitle="FOCUS AREAS" title="Strategic Sectors" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.investmentSectors.map((sector, idx) => (
              <div key={idx} className="bg-white p-8 border border-neutral-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-primary-deep mb-6">
                  {/* Icon placeholder context */}
                  <span className="font-heading font-bold text-xl">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-heading text-primary-deep mb-3">{sector.title}</h3>
                <p className="text-neutral-muted text-sm">{sector.description}</p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center text-sm text-neutral-dark"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span> Growth Capital</li>
                  <li className="flex items-center text-sm text-neutral-dark"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span> Strategic Buyouts</li>
                  <li className="flex items-center text-sm text-neutral-dark"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span> Joint Ventures</li>
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </div>
  );
}
