import AnimatedSection from './AnimatedSection';

export default function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <section className="relative border-b border-white/5 bg-primary-deep py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="container-content relative">
        <AnimatedSection>
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold max-w-2xl leading-tight mb-5">
            {title}
          </h1>
          {body && (
            <p className="text-neutral-muted max-w-xl leading-relaxed">
              {body}
            </p>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
