import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteData } from "@/data/siteData";
import { User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function LeadershipPreview() {
  return (
    <section className="py-24 bg-neutral-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <AnimatedSection className="flex-1">
            <SectionHeading 
              subtitle="LEADERSHIP" 
              title="Experienced Leadership. Strategic Vision." 
              className="mb-0"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Link href="/leadership">
              <Button variant="outline">View Leadership Team</Button>
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.leadership.map((leader, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="group bg-neutral-offwhite hover:bg-white border border-transparent hover:border-neutral-border p-8 transition-all duration-300">
                <div className="aspect-[3/4] mb-6 bg-primary-deep/5 relative overflow-hidden flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                  <div className="text-primary-deep/20 font-heading text-6xl">
                    {leader.name[0]}
                  </div>
                </div>
                
                <h3 className="text-2xl font-heading text-primary-deep mb-1">
                  {leader.name}
                </h3>
                <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
                  {leader.position}
                </p>
                <p className="text-neutral-muted text-sm mb-6 line-clamp-3">
                  {leader.bio}
                </p>
                <div className="flex justify-start">
                  <Link href="#" className="opacity-50 hover:opacity-100 hover:text-primary-secondary transition-opacity flex items-center text-sm font-semibold tracking-wide">
                    <User className="w-4 h-4 mr-2" /> View Profile
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
