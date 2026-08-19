import { Container } from "@/components/ui/Container";

export function TrustIntro() {
  return (
    <section className="py-24 bg-neutral-offwhite">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-deep leading-tight">
              Capital with purpose.<br />
              <span className="text-accent-soft">Investments with impact.</span>
            </h2>
          </div>
          <div>
            <p className="text-lg md:text-xl text-neutral-muted leading-relaxed font-body">
              DVCCL plays a pivotal role in shaping strategic investments and driving sustainable development. By allocating specialized capital toward infrastructure, technology, and emerging sectors, we empower long-term value creation that defines the future of key industries.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
