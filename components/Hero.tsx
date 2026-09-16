'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Globe2, Sparkles } from 'lucide-react';
import { heroSlides } from '@/lib/data';

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  /* -------------------------------------------------------
     Mouse Parallax
  ------------------------------------------------------- */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  /* -------------------------------------------------------
     Auto Slider
  ------------------------------------------------------- */

  useEffect(() => {
    if (!heroSlides?.length) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  if (!heroSlides?.length) return null;

  const slide = heroSlides[index];

  return (
    <section
      className="
        relative
        min-h-[92vh]
        w-full
        overflow-hidden
        bg-primary-deep
        text-white
      "
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Main radial glow */}
        <div
          className="
            absolute
            left-[-15%]
            top-[-20%]
            h-[700px]
            w-[700px]
            rounded-full
            bg-purple-600/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-[-10%]
            bottom-[-20%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-accent-gold/10
            blur-[150px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.045]
            [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
            [background-size:70px_70px]
            [mask-image:linear-gradient(to_bottom,black,transparent)]
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,rgba(10,4,25,.35)_65%,rgba(10,4,25,.85)_100%)]
          "
        />

      </div>

      {/* =====================================================
          CINEMATIC IMAGE — RIGHT SIDE
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[-8%]
          top-0
          hidden
          h-full
          w-[65%]
          overflow-hidden
          lg:block
        "
        style={{
          x: mounted ? smoothX : 0,
          y: mounted ? smoothY : 0,
        }}
      >

        {/* Image */}
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1.04, 1.09, 1.04],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            src="/images/dvcc-hero.png"
            alt="DVCCL future industries and global development"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />
        </motion.div>

        {/* Left gradient — blends image into website */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[55%]
            bg-gradient-to-r
            from-primary-deep
            via-primary-deep/90
            to-transparent
          "
        />

        {/* Top gradient */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[35%]
            bg-gradient-to-b
            from-primary-deep
            to-transparent
          "
        />

        {/* Bottom gradient */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[35%]
            bg-gradient-to-t
            from-primary-deep
            to-transparent
          "
        />

        {/* Gold cinematic glow */}
        <motion.div
          className="
            absolute
            right-[15%]
            top-[35%]
            h-40
            w-40
            rounded-full
            bg-accent-gold/20
            blur-[90px]
          "
          animate={{
            opacity: [0.25, 0.5, 0.25],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

      </motion.div>

      {/* =====================================================
          3D FLOATING ORB
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[18%]
          hidden
          lg:block
        "
        style={{
          x: mounted ? smoothX : 0,
          y: mounted ? smoothY : 0,
        }}
      >
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            relative
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            border
            border-accent-gold/30
            bg-white/5
            shadow-[0_0_60px_rgba(198,161,91,.2)]
            backdrop-blur-xl
          "
        >
          <Globe2
            size={28}
            className="text-accent-gold"
            strokeWidth={1.2}
          />

          <span
            className="
              absolute
              inset-[-10px]
              rounded-full
              border
              border-accent-gold/10
            "
          />

          <span
            className="
              absolute
              inset-[-22px]
              rounded-full
              border
              border-white/5
            "
          />
        </motion.div>
      </motion.div>

      {/* =====================================================
          ANIMATED GROWTH CURVE
      ====================================================== */}

      <svg
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          opacity-30
        "
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="dvccGoldGradient"
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
              stopOpacity="0.8"
            />

            <stop
              offset="100%"
              stopColor="#C6A15B"
              stopOpacity="0.1"
            />
          </linearGradient>
        </defs>

        <motion.path
          d="
            M -100 780
            C 180 730,
            350 690,
            530 600
            C 760 485,
            810 350,
            1050 270
            C 1250 205,
            1430 150,
            1700 80
          "
          fill="none"
          stroke="url(#dvccGoldGradient)"
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
            duration: 3,
            ease: 'easeInOut',
          }}
        />
      </svg>

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="
              absolute
              h-1
              w-1
              rounded-full
              bg-accent-gold
            "
            style={{
              left: `${8 + ((i * 17) % 88)}%`,
              top: `${12 + ((i * 23) % 72)}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.15, 0.7, 0.15],
              scale: [0.7, 1.2, 0.7],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.25,
              ease: 'easeInOut',
            }}
          />
        ))}

      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          container-content
          relative
          z-20
          flex
          min-h-[92vh]
          items-center
          py-28
          sm:py-32
          lg:py-24
        "
      >

        <div className="w-full lg:max-w-8xl">

          <AnimatePresence mode="wait">

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -30,
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* =================================================
                  EYEBROW
              ================================================== */}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="mb-6 flex items-center gap-3"
              >

                <span
                  className="
                    h-px
                    w-10
                    bg-accent-gold
                  "
                />

                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.35em]
                    text-accent-gold
                    sm:text-xs
                  "
                >
                  {slide.kicker}
                </p>

              </motion.div>

              {/* =================================================
                  MAIN HEADING
              ================================================== */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  max-w-8xl
                  font-heading
                  text-5xl
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.04em]
                  text-white
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[82px]
                  xl:text-[92px]
                "
              >
                {slide.title}
              </motion.h1>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.7,
                }}
                className="
                  mt-7
                  max-w-[600px]
                  text-base
                  leading-8
                  text-neutral-muted
                  sm:text-lg
                  sm:leading-8
                  lg:text-[19px]
                "
              >
                {slide.body}
              </motion.p>

              {/* =================================================
                  CTA BUTTONS
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.6,
                  duration: 0.7,
                }}
                className="
                  mt-9
                  flex
                  flex-wrap
                  items-center
                  gap-4
                "
              >

                {/* Primary */}
                <a
                  href="/investor-relations"
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    gap-3
                    overflow-hidden
                    rounded-full
                    bg-accent-gold
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-primary-deep
                    shadow-[0_10px_40px_rgba(198,161,91,.18)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_15px_50px_rgba(198,161,91,.3)]
                  "
                >

                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      bg-white/25
                      transition-transform
                      duration-700
                      group-hover:translate-x-full
                    "
                  />

                  <span className="relative z-10">
                    Partner With DVCCL
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="
                      relative
                      z-10
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </a>

                {/* Secondary */}
                <a
                  href="/about"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/15
                    bg-white/[0.03]
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-accent-gold/40
                    hover:bg-white/[0.07]
                  "
                >
                  About DVCCL

                  <ArrowUpRight
                    size={17}
                    className="
                      text-accent-gold
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </a>

              </motion.div>

              {/* =================================================
                  TRUST MICRO CARD
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.7,
                }}
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  px-4
                  py-3
                  backdrop-blur-xl
                "
              >

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-accent-gold/10
                  "
                >
                  <Sparkles
                    size={16}
                    className="text-accent-gold"
                  />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-muted">
                    Building
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-white">
                    Sri Lanka's Future
                  </p>
                </div>

              </motion.div>

            </motion.div>

          </AnimatePresence>

          {/* =====================================================
              SLIDER NAVIGATION
          ====================================================== */}

          <div className="mt-14 flex items-center gap-5">

            <div className="flex items-center gap-2">

              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className="group relative h-5"
                >

                  <span
                    className={`
                      block
                      h-[3px]
                      rounded-full
                      transition-all
                      duration-700
                      ${
                        i === index
                          ? 'w-12 bg-accent-gold'
                          : 'w-5 bg-white/20 group-hover:bg-white/40'
                      }
                    `}
                  />

                </button>
              ))}

            </div>

            <span className="h-px w-8 bg-white/10" />

            <span className="text-[10px] font-medium tracking-[0.2em] text-white/30">
              0{index + 1} / 0{heroSlides.length}
            </span>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        className="
          absolute
          bottom-7
          left-1/2
          z-30
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          md:flex
        "
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.35em]
            text-white/30
          "
        >
          Scroll
        </span>

        <ChevronDown
          size={18}
          className="text-accent-gold/60"
        />

      </motion.div>

      {/* =====================================================
          TOP RIGHT DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-8
          top-32
          z-20
          hidden
          lg:block
        "
      >

        <div
          className="
            flex
            items-center
            gap-2
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-white/30
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-gold shadow-[0_0_10px_#C6A15B]" />
          Sri Lanka · Global Vision
        </div>

      </div>

    </section>
  );
}