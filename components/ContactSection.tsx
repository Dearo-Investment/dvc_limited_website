'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { company } from '@/lib/data';

const infoCards = [
  { icon: Mail, label: 'Email', value: company.email },
  { icon: Phone, label: 'Hotline', value: company.hotline },
  { icon: Phone, label: 'General', value: company.general },
  { icon: MapPin, label: 'Office', value: company.address },
  { icon: Clock, label: 'Office Hours', value: company.hours },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-28">
      <div className="container-content">
        <AnimatedSection className="max-w-xl mb-16">
          <p className="eyebrow mb-4">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Contact Us
          </h2>
          <p className="text-neutral-muted leading-relaxed">
            Reach out for partnerships, investments, or any inquiries. Our
            team is ready to assist you.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-10">
          <AnimatedSection className="lg:col-span-2 space-y-4">
            {infoCards.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="card-surface flex items-start gap-4 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-mutedDark mb-1">
                    {label}
                  </p>
                  <p className="text-sm text-neutral-white/90">{value}</p>
                </div>
              </div>
            ))}
            <p className="text-sm text-neutral-mutedDark">
              {company.website}
            </p>

            <div className="overflow-hidden rounded-2xl border border-white/10 h-64">
              <iframe
                title="DVCCL Office Location"
                src={company.mapEmbedSrc}
                className="h-full w-full grayscale invert-[0.9] contrast-[0.9]"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="card-surface p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wide text-neutral-mutedDark mb-2">
                    Full Name*
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-lg border border-white/15 bg-primary-deep px-4 py-3 text-sm outline-none focus:border-accent-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-neutral-mutedDark mb-2">
                    Role / Position
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Investor, Partner"
                    className="w-full rounded-lg border border-white/15 bg-primary-deep px-4 py-3 text-sm outline-none placeholder:text-neutral-mutedDark focus:border-accent-gold"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wide text-neutral-mutedDark mb-2">
                    Email Address*
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-lg border border-white/15 bg-primary-deep px-4 py-3 text-sm outline-none focus:border-accent-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-neutral-mutedDark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-white/15 bg-primary-deep px-4 py-3 text-sm outline-none focus:border-accent-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-neutral-mutedDark mb-2">
                  Message*
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-lg border border-white/15 bg-primary-deep px-4 py-3 text-sm outline-none focus:border-accent-gold"
                />
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="text-xs text-neutral-mutedDark">
                  We respond to every inquiry within 24 hours.
                </p>
                <button type="submit" className="btn-primary">
                  Send Message <Send size={15} />
                </button>
              </div>

              {submitted && (
                <p className="text-sm text-accent-gold">
                  Thank you — your message has been received.
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
