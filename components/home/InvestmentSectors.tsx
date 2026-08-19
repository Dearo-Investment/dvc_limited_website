import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteData } from "@/data/siteData";
import { Building2, Cpu, Map, Zap, HeartPulse, Leaf, ArrowRight } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Building2": return <Building2 className="w-8 h-8" />;
    case "Cpu": return <Cpu className="w-8 h-8" />;
    case "Map": return <Map className="w-8 h-8" />;
    case "Zap": return <Zap className="w-8 h-8" />;
    case "HeartPulse": return <HeartPulse className="w-8 h-8" />;
    case "Leaf": return <Leaf className="w-8 h-8" />;
    default: return <Building2 className="w-8 h-8" />;
  }
};

export function InvestmentSectors() {
  return (
    <section className="py-24 bg-neutral-offwhite">
      <Container>
        <AnimatedSection>
          <SectionHeading 
            subtitle="WHERE WE INVEST" 
            title="Strategic Investment Focus" 
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {siteData.investmentSectors.map((sector, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="group bg-neutral-white p-10 border border-neutral-border hover:border-accent transition-colors duration-300 h-full flex flex-col relative overflow-hidden">
                <div className="text-xl font-heading text-neutral-border mb-6">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <div className="text-primary-deep mb-6 transform group-hover:text-accent transition-colors duration-300">
                  {getIcon(sector.icon)}
                </div>
                <h3 className="text-2xl font-heading text-primary-deep mb-4">
                  {sector.title}
                </h3>
                <p className="text-neutral-muted mb-8 flex-grow">
                  {sector.description}
                </p>
                <div className="mt-auto flex items-center text-sm font-semibold tracking-wide text-primary-deep group-hover:text-accent transition-colors">
                  EXPLORE <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                {/* Subtle bottom border accent on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent transition-all duration-300 group-hover:w-full" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
