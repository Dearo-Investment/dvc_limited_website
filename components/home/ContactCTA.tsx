import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, PhoneCall, MapPin, Clock, Globe } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@dearoventurecapital.com",
    href: "mailto:info@dearoventurecapital.com",
  },
  {
    icon: PhoneCall,
    label: "Hotline",
    value: "011 478 2400",
    href: "tel:+94114782400",
  },
  {
    icon: Phone,
    label: "General",
    value: "+94 74 390 8274",
    href: "tel:+94743908274",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "9th Floor, Ceylinco House, No 69, Janadhipathi Mawatha, Colombo 01",
    href: "https://maps.google.com/?q=Ceylinco+House+Colombo",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Sat: 8:30 AM – 5:00 PM",
    href: null,
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.dearoventurecapital.com",
    href: "https://www.dearoventurecapital.com/",
  },
];

export function ContactCTA() {
  return (
    <section className="py-24 bg-primary-deep text-neutral-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-deep via-accent to-primary-deep" />

      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-6xl font-heading mb-8">
            LET&apos;S BUILD WHAT&apos;S NEXT.
          </h2>
          <p className="text-xl text-neutral-white/70 mb-12 font-body max-w-2xl mx-auto">
            Explore opportunities to partner, invest, and create long-term value. Our specialized teams are ready to discuss strategic alignments.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-accent text-primary-deep hover:bg-neutral-white">
                Partner With Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-neutral-white border-neutral-white hover:bg-neutral-white hover:text-primary-deep">
                Contact DVCCL
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </Container>

      {/* Contact Information */}
      <Container className="relative z-10 mt-24">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold tracking-widest text-xs sm:text-sm uppercase mb-4">
            Contact Information
          </span>
          <h3 className="text-3xl md:text-5xl font-heading mb-6">
            We&apos;d Love to Hear From You
          </h3>
          <p className="text-lg text-neutral-white/70 font-body">
            Here&apos;s how you can reach us.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactDetails.map((item, idx) => {
            const Icon = item.icon;
            const content = (
              <div className="flex flex-col items-start gap-4 h-full p-8 rounded-xl border border-neutral-white/10 bg-neutral-white/5 hover:border-accent/40 hover:bg-neutral-white/10 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-neutral-white/10 text-accent group-hover:bg-accent group-hover:text-primary-deep transition-colors">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-neutral-white/50 mb-2">
                    {item.label}
                  </p>
                  <p className="text-base font-medium text-neutral-white leading-relaxed break-words">
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return item.href ? (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group"
              >
                {content}
              </a>
            ) : (
              <div key={idx} className="group">
                {content}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
