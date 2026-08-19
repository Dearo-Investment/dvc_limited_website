import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteData } from "@/data/siteData";

export function AboutSection() {
  return (
    <section className="py-24 bg-neutral-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="right">
            <div className="relative h-[600px] bg-primary-deep overflow-hidden">
              <div className="absolute inset-0 bg-primary-secondary opacity-50" />
              {/* Optional: Add an image here when available using Image component */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="border border-neutral-white/20 p-12 backdrop-blur-sm bg-neutral-white/5 w-full h-full flex flex-col justify-end">
                  <div className="w-16 h-1 bg-accent mb-6" />
                  <p className="text-neutral-white font-heading text-2xl">
                    Values: Integrity, Innovation, Sustainability, Excellence.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="left" delay={0.2}>
            <SectionHeading 
              subtitle="WHO WE ARE" 
              title={siteData.company.aboutHeading}
            />
            <div className="space-y-6 text-neutral-muted leading-relaxed text-lg">
              <p>{siteData.company.aboutText}</p>
              <p>
                As a trusted partner to investors, founders, and governments, we 
                structure our investments to generate returns while creating tangible 
                societal and economic benefits.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-heading text-xl text-primary-deep mb-2">Established</h4>
                <p className="text-3xl font-light text-accent">{siteData.company.established}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
