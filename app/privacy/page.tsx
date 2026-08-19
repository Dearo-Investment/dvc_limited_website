"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function GenericPage() {
  return (
    <div className="pt-32 pb-24 bg-neutral-offwhite min-h-[70vh]">
      <Container>
        <AnimatedSection>
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-deep mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-neutral-muted">
              This section of the DVCCL corporate website is currently being updated with the latest information. Please check back soon.
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  );
}
