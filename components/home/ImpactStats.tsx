import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteData } from "@/data/siteData";

export function ImpactStats() {
  return (
    <section className="py-24 bg-primary-deep text-neutral-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent to-transparent" />
      
      <Container className="relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            OUR IMPACT
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-neutral-white">
            Delivering Measurable Change
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {siteData.impactStats.map((stat, idx) => (
            <AnimatedSection 
              key={idx} 
              delay={idx * 0.1}
              className="text-center border-l border-neutral-white/20 pl-4 py-4 md:border-l-0 md:border-t md:pt-8 md:px-4"
            >
              <div className="text-4xl md:text-5xl lg:text-7xl font-heading text-neutral-white mb-4">
                {stat.value}
              </div>
              <p className="text-neutral-white/70 text-sm md:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
