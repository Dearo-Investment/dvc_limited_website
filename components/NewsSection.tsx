import AnimatedSection from './AnimatedSection';
import { newsItems } from '@/lib/data';

export default function NewsSection() {
  return (
    <section className="py-28">
      <div className="container-content">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4 justify-center flex">
            {newsItems[0].title}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Latest announcements &amp; developments
          </h2>
          <p className="text-neutral-muted leading-relaxed">
            {newsItems[0].body}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
