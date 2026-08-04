"use client";

import Image from "next/image";
import ContactSection from "@/components/Contact/ContactSection";

export default function ContactPage() {
  return (
    <>
      {/* Hero Image Section */}
      <section
        className="hero position-relative d-flex align-items-center justify-content-center text-center"
        style={{ height: "60vh" }}
      >
        <Image
          src="/images/con2.png" // Make sure this exists in public/images
          alt="Contact Us Hero"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
       
      </section>

      {/* Contact Form Section */}
      
      <ContactSection />

      {/* Custom Styles */}
      <style jsx>{`
        .hero {
          position: relative;
        }

        .overlay h1 {
          text-shadow: 0 6px 15px rgba(0, 0, 0, 0.6);
        }

        .overlay p {
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 768px) {
          .hero {
            height: 30vh;
          }
          .overlay h1 {
            font-size: 1.8rem;
          }
          .overlay p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}
