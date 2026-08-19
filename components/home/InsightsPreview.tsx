import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteData } from "@/data/siteData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function InsightsPreview() {
  return (
    <section className="py-24 bg-neutral-offwhite">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <AnimatedSection className="flex-1">
            <SectionHeading 
              subtitle="INSIGHTS & NEWS" 
              title="Global Perspectives" 
              className="mb-0"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Link href="/insights">
              <Button variant="outline">View All Insights</Button>
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.insights.map((article, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="group bg-neutral-white h-full flex flex-col border border-neutral-border hover:shadow-lg transition-all duration-300">
                <div className="aspect-[16/9] bg-primary-deep/5 relative overflow-hidden flex items-center justify-center">
                  <div className="text-primary-deep/10">Insights Image</div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-muted">
                    <span className="text-accent">{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-heading text-primary-deep mb-4 group-hover:text-primary-secondary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-neutral-muted mb-8 flex-1">
                    {article.description}
                  </p>
                  <Link href="/insights" className="mt-auto inline-flex items-center text-sm font-semibold tracking-wide text-primary-deep group-hover:text-accent transition-colors">
                    Read Article <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
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
