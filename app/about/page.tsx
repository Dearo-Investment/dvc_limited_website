"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteData } from "@/data/siteData";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-neutral-offwhite min-h-screen">
      <Container>
        <AnimatedSection>
          <div className="max-w-4xl mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-deep mb-6">
              About DVCCL
            </h1>
            <p className="text-xl text-neutral-muted leading-relaxed font-body">
              {siteData.company.description} Development Venture Capital Corporation Limited stands at the forefront of strategic global investments, committed to fostering robust infrastructure, breakthrough technologies, and sustainable long-term value.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="bg-white p-10 h-full border border-neutral-border">
              <h3 className="text-2xl font-heading text-primary-deep mb-4 border-b border-accent pb-4 inline-block">Our Mission</h3>
              <p className="text-neutral-muted leading-relaxed mt-4">
                To identify and empower transformative ventures that produce superior, risk-adjusted returns while catalyzing measurable positive impact in the communities and sectors they serve. We partner with visionaries to build enduring market leaders.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.2}>
            <div className="bg-white p-10 h-full border border-neutral-border">
              <h3 className="text-2xl font-heading text-primary-deep mb-4 border-b border-accent pb-4 inline-block">Our Vision</h3>
              <p className="text-neutral-muted leading-relaxed mt-4">
                We envision a resilient global economy powered by intelligent capital, where innovative enterprises thrive and infrastructure scales sustainably. DVCCL aims to be the preeminent partner for strategic growth, known for integrity, foresight, and exceptional execution.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <SectionHeading subtitle="OUR VALUES" title="Core Principles" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Integrity", "Innovation", "Sustainability", "Excellence"].map((value, idx) => (
              <div key={idx} className="bg-primary-deep text-white p-8 group hover:-translate-y-2 transition-transform duration-300">
                <div className="text-accent text-sm font-semibold tracking-widest mb-4">0{idx + 1}</div>
                <h4 className="text-xl font-heading mb-2">{value}</h4>
                <div className="h-1 w-0 bg-accent group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </div>
  );
}
