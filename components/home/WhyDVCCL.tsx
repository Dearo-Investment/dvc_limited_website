import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteData } from "@/data/siteData";
import { Target, TrendingUp, Handshake, Globe2, ShieldCheck } from "lucide-react";

const getIcon = (idx: number) => {
  const icons = [Target, TrendingUp, Globe2, Handshake, ShieldCheck];
  const Icon = icons[idx % icons.length];
  return <Icon className="w-6 h-6" />;
};

export function WhyDVCCL() {
  return (
    <section className="py-24 bg-neutral-offwhite">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <AnimatedSection>
              <SectionHeading 
                title="WHY PARTNER WITH DVCCL?" 
                className="mb-8"
              />
              <p className="text-lg text-neutral-muted leading-relaxed mb-8">
                We combine deep institutional credibility with visionary strategy. 
                Our approach to strategic capital is built on driving robust growth 
                and enduring value across dynamic markets.
              </p>
              <div className="h-px w-24 bg-accent mb-8" />
              <p className="text-primary-deep font-heading text-2xl italic">
                &quot;Excellence in execution, precision in strategy.&quot;
              </p>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteData.whyUs.map((reason, idx) => (
                <AnimatedSection 
                  key={idx} 
                  delay={idx * 0.15}
                  className="bg-neutral-white p-8 border-t-2 border-transparent hover:border-accent shadow-sm transition-all duration-300"
                >
                  <div className="text-accent mb-6 bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center">
                    {getIcon(idx)}
                  </div>
                  <h3 className="text-xl font-heading text-primary-deep mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-neutral-muted text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
