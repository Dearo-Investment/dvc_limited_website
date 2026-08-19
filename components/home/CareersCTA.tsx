import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { siteData } from "@/data/siteData";

export function CareersCTA() {
  return (
    <section className="py-24 bg-neutral-white">
      <Container>
        <AnimatedSection className="bg-primary-deep p-12 lg:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 rounded-sm">
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-20 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-heading text-neutral-white mb-6">
              BUILD THE FUTURE WITH US
            </h2>
            <p className="text-lg text-neutral-white/80 leading-relaxed font-body">
              Join a team focused on creating sustainable value through strategic investment and innovation. We are always looking for exceptional talent to join our specialized divisions.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <Link href="/careers" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full">
                View Opportunities
              </Button>
            </Link>
            <Link href={`mailto:${siteData.contact.email}`} className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full text-neutral-white border-neutral-white hover:bg-neutral-white hover:text-primary-deep">
                Send Your CV
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
