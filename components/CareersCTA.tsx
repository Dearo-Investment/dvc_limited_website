import AnimatedSection from './AnimatedSection';

export default function CareersCTA() {
  return (
    <section className="py-24">
      <div className="container-content">
        <AnimatedSection className="relative overflow-hidden rounded-3xl border border-accent-gold/30 bg-gradient-to-br from-primary-light to-primary-deep px-8 py-16 md:px-16 text-center">
          <p className="eyebrow mb-4 justify-center flex">Careers</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Join Our Team
          </h2>
          <p className="text-neutral-muted max-w-xl mx-auto mb-8 leading-relaxed">
            Build your career with a fast-growing venture platform shaping
            Sri Lanka&apos;s agriculture, engineering, education, and
            technology sectors.
          </p>
          <a href="/careers" className="btn-primary">
            View Open Roles
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
