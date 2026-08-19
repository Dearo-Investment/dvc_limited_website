import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteData } from "@/data/siteData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function PortfolioPreview() {
  return (
    <section className="py-24 bg-neutral-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <AnimatedSection className="flex-1">
            <SectionHeading 
              subtitle="OUR PORTFOLIO" 
              title="Transformative Ventures" 
              className="mb-0"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Link href="/portfolio">
              <Button variant="outline">View All Investments</Button>
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.portfolio.map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="group block cursor-pointer">
                <div className="aspect-[4/3] bg-neutral-offwhite relative overflow-hidden mb-6">
                  {/* Decorative placeholder since we don't have images */}
                  <div className="absolute inset-0 bg-primary-secondary opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-deep/30 transform group-hover:scale-105 transition-transform duration-700 ease-out">
                    <span className="font-heading text-4xl">{item.name[0]}</span>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-primary-deep/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-end justify-between">
                    <span className="text-neutral-white font-medium text-sm tracking-wide flex items-center">
                      View Project <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>
                
                <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-2 block">
                    {item.sector}
                  </span>
                  <h3 className="text-2xl font-heading text-primary-deep mb-3 group-hover:text-primary-secondary transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex justify-between items-end text-neutral-muted text-sm">
                    <p>{item.description}</p>
                    {item.location && (
                      <span className="block text-right min-w-max ml-4 opacity-70">
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
