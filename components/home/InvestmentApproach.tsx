import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteData } from "@/data/siteData";

export function InvestmentApproach() {
  return (
    <section className="py-24 bg-primary-deep text-neutral-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-secondary rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <Container className="relative z-10">
        <AnimatedSection>
          <SectionHeading 
            subtitle="OUR APPROACH" 
            title="Strategic Investment Philosophy" 
            light 
          />
        </AnimatedSection>
        
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row justify-between gap-8 relative">
            {/* Horizontal timeline line for desktop */}
            <div className="hidden lg:block absolute top-[28px] left-8 right-8 h-px bg-neutral-white/20" />
            
            {siteData.approach.map((step, idx) => (
              <AnimatedSection 
                key={idx} 
                delay={idx * 0.1}
                className="relative flex-1"
              >
                {/* Mobile vertical line */}
                <div className="lg:hidden absolute top-14 bottom-[-32px] left-[28px] w-px bg-neutral-white/20" />
                
                <div className="flex flex-row lg:flex-col items-start gap-6 lg:gap-8 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-primary-secondary border border-neutral-white/20 flex items-center justify-center font-heading text-lg shrink-0 group hover:border-accent transition-colors">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading text-neutral-white mb-3 mt-3 lg:mt-0">
                      {step.title}
                    </h3>
                    <p className="text-neutral-white/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
