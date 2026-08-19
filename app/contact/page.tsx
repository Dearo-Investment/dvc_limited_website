"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, PhoneCall, Mail, Clock, Globe } from "lucide-react";

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 bg-neutral-offwhite min-h-screen">
      <Container>
        <AnimatedSection>
          <div className="max-w-3xl mb-16">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-deep mb-6">
              Contact DVCCL
            </h1>
            <p className="text-lg text-neutral-muted">
              Our specialized teams are available to discuss strategic partnerships, investment opportunities, and long-term joint ventures.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <AnimatedSection delay={0.2} className="lg:col-span-4 space-y-10">
            <div>
              <h3 className="text-xl font-heading text-primary-deep mb-6 uppercase tracking-wider border-b border-neutral-border pb-4">
                Contact Information
              </h3>
              <ul className="space-y-6">
                {contactDetails.map((item, idx) => {
                  const Icon = item.icon;
                  const row = (
                    <li className="flex items-start gap-4">
                      <Icon className="text-accent shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-neutral-muted mb-1">
                          {item.label}
                        </p>
                        <span className="text-neutral-dark break-words">{item.value}</span>
                      </div>
                    </li>
                  );

                  return item.href ? (
                    <a
                      key={idx}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block hover:opacity-70 transition-opacity"
                    >
                      {row}
                    </a>
                  ) : (
                    <div key={idx}>{row}</div>
                  );
                })}
              </ul>
            </div>

            <div className="bg-primary-deep p-8 text-neutral-white">
              <h4 className="font-heading mb-4 text-accent">Media & Press</h4>
              <p className="text-sm opacity-80 mb-4">For all media inquiries and interview requests, please contact our corporate communications department.</p>
              <a href={`mailto:media@dvccl.example.com`} className="text-sm font-semibold tracking-wide border-b border-transparent hover:border-accent transition-colors">
                media@dvccl.example.com
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="lg:col-span-8">
            <div className="bg-neutral-white p-8 md:p-12 shadow-sm border border-neutral-border">
              <h3 className="text-2xl font-heading text-primary-deep mb-8">
                Send a Message
              </h3>

              {status === "success" && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-800 rounded-sm">
                  Thank you for contacting DVCCL. Your message has been received and our team will be in touch shortly.
                </div>
              )}

              {status === "error" && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-800 rounded-sm">
                  There was an error sending your message. Please try again or contact us directly via email.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-medium text-neutral-dark">Full Name *</label>
                    <input required type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-neutral-offwhite border-b border-primary-secondary/30 focus:border-accent outline-none px-4 py-3 transition-colors text-primary-deep" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-dark">Email Address *</label>
                    <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-neutral-offwhite border-b border-primary-secondary/30 focus:border-accent outline-none px-4 py-3 transition-colors text-primary-deep" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-neutral-offwhite border-b border-primary-secondary/30 focus:border-accent outline-none px-4 py-3 transition-colors text-primary-deep" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-dark">Company or Organization</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full bg-neutral-offwhite border-b border-primary-secondary/30 focus:border-accent outline-none px-4 py-3 transition-colors text-primary-deep" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark">Subject *</label>
                  <input required type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-neutral-offwhite border-b border-primary-secondary/30 focus:border-accent outline-none px-4 py-3 transition-colors text-primary-deep" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-dark">Message *</label>
                  <textarea required id="message" name="message" rows={6} value={formData.message} onChange={handleChange} className="w-full bg-neutral-offwhite border-b border-primary-secondary/30 focus:border-accent outline-none px-4 py-3 transition-colors resize-y text-primary-deep" />
                </div>

                <div className="pt-4 self-end">
                  <Button type="submit" size="lg" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>

        {/* Location Map */}
        <AnimatedSection delay={0.4} className="mt-20">
          <h3 className="text-xl font-heading text-primary-deep mb-6 uppercase tracking-wider border-b border-neutral-border pb-4">
            Find Us
          </h3>
          <div className="w-full h-[400px] md:h-[480px] border border-neutral-border shadow-sm overflow-hidden">
            <iframe
              title="DVCCL Office Location - Ceylinco House, Colombo"
              src="https://www.google.com/maps?q=Ceylinco+House,+69+Janadhipathi+Mawatha,+Colombo+01&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimatedSection>
      </Container>
    </div>
  );
}