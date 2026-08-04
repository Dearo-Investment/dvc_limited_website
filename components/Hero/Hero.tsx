"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/hero1.png",
    title: "Fueling Tomorrow’s Innovators",
    subtitle:
      "We invest in visionary founders shaping the future of technology and business.",
    cta: "Pitch Your Startup",
    link: "#contact",
  },
  {
    image: "/images/slide.jpg",
    title: "Empowering Startups Globally",
    subtitle:
      "Strategic guidance, funding, and a global network to accelerate growth.",
    cta: "Explore Portfolio",
    link: "/portfolio",
  },
  {
    image: "/images/hero3.png",
    title: "Shaping the Future of Industries",
    subtitle:
      "Driving innovation across technology, agriculture, and financial solutions.",
    cta: "Learn More",
    link: "#about",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => {
        const active = index === current;

        return (
          <div key={index} className={`slide ${active ? "active" : ""}`}>
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="hero-image "
            />

            {/* Overlay */}
            <div className="overlay" />

            {/* Content */}
            <div className="content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
             
            </div>
          </div>
        );
      })}

      {/* Dots */}
      <div className="dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={i === current ? "active" : ""}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 120vh;
          width: 100%;
          overflow: hidden;
        }

        .slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: scale(1.03);
          transition: opacity 1.4s ease, transform 8s ease;
        }

        .slide.active {
          opacity: 1;
          transform: scale(1);
          z-index: 2;
        }

        /* IMAGE RESPONSIVE FIX */
        .hero-image {
          object-fit: cover;
          object-position: center center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(0, 0, 0, 0.65),
            rgba(0, 0, 0, 0.25)
          );
          z-index: 1;
        }

        .content {
          position: relative;
          z-index: 2;
          height: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: white;
          animation: fadeUp 1.2s ease forwards;
        }

        h1 {
          font-size: clamp(2.2rem, 4.5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          max-width: 820px;
          margin-bottom: 20px;
          text-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }

        p {
          max-width: 600px;
          font-size: clamp(1.05rem, 2.4vw, 1.3rem);
          margin-bottom: 32px;
          opacity: 0.95;
        }

       

        .hero-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(13, 110, 253, 0.45);
        }

        .dots {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 3;
        }

        .dots button {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
        }

        .dots button.active {
          background: #0d6efd;
          transform: scale(1.4);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===== MOBILE FIX ===== */
        @media (max-width: 768px) {
          .hero {
            height: 92vh;
          }

          .hero-image {
            object-position: center top;
          }

          .content {
            text-align: center;
            align-items: center;
            padding-top: 80px;
          }

          p {
            max-width: 100%;
          }

          .hero-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
