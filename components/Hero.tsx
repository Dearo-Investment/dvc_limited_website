'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { heroSlides } from '@/lib/data';

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-primary-deep">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />

      {/* Ascending Growth Line */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M -50 700 C 200 650, 350 600, 480 520 C 620 435, 700 320, 860 250 C 980 200, 1080 160, 1260 90"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: 1,
            opacity: 1,
          }}
          transition={{
            duration: 2.6,
            ease: 'easeInOut',
          }}
        />

        <defs>
          <linearGradient
            id="goldGrad"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop
              offset="0%"
              stopColor="#C6A15B"
              stopOpacity="0"
            />

            <stop
              offset="45%"
              stopColor="#C6A15B"
              stopOpacity="0.9"
            />

            <stop
              offset="100%"
              stopColor="#8B5CF6"
              stopOpacity="0.9"
            />
          </linearGradient>
        </defs>
      </svg>

      {/* Full Width Responsive Content */}
      <div className="container-content relative z-10 py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -24,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full max-w-2xl"
          >
            {/* Eyebrow */}
            <p className="eyebrow mb-5">
              {slide.kicker}
            </p>

            {/* Heading */}
            <h1 className="mb-6 font-heading text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="mb-10 max-w-lg text-base leading-relaxed text-neutral-muted sm:text-lg">
              {slide.body}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/investor-relations"
                className="btn-primary"
              >
                Partner With DVCCL
              </a>

              <a
                href="/about"
                className="btn-ghost"
              >
                About DVCCL
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Indicators */}
        <div className="mt-16 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index
                  ? 'w-10 bg-accent-gold'
                  : 'w-4 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-muted"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}