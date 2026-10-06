'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { about } from '@/lib/data';

export default function AboutSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-purple-700/8 blur-[140px]" />

      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-28 items-center">

          {/* Left — Image + Stats card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full max-w-lg mx-auto lg:mx-0">
              <Image
                src="/images/dvcc-hero.png"
                alt="DVCCL — Building Sri Lanka's Future"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 lg:right-[-40px] flex items-center gap-4 rounded-2xl border border-white/10 bg-primary-darker/90 backdrop-blur-xl px-6 py-4 shadow-2xl">
              <div className="text-right">
                <p className="font-heading text-3xl font-bold text-accent-gold">2022</p>
                <p className="text-xs text-neutral-muted uppercase tracking-widest mt-0.5">Est. Year</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="font-heading text-3xl font-bold text-white">25+</p>
                <p className="text-xs text-neutral-muted uppercase tracking-widest mt-0.5">Branches</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent-gold" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-gold">About DVCCL</p>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.05] tracking-tight text-white mb-8">
              A disciplined venture platform, built for Sri Lanka&apos;s future
            </h2>

            <div className="w-16 h-px bg-accent-gold/40 mb-8" />

            <p className="text-base md:text-lg text-neutral-muted leading-relaxed mb-5">
              {about.paragraph1}
            </p>
            <p className="text-base md:text-lg text-neutral-muted leading-relaxed mb-10">
              {about.paragraph2}
            </p>

            {/* Vision card */}
            <div className="relative rounded-2xl border border-accent-gold/15 bg-accent-gold/5 px-6 py-5 mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-accent-gold mb-3">Our Vision</p>
              <p className="text-base text-neutral-muted/90 leading-relaxed italic">
                &ldquo;{about.vision}&rdquo;
              </p>
            </div>

            <a
              href="/about"
              className="group inline-flex items-center gap-3 rounded-full bg-accent-gold px-7 py-4 text-sm font-semibold text-primary-deep shadow-[0_8px_30px_rgba(198,161,91,0.2)] hover:shadow-[0_12px_40px_rgba(198,161,91,0.35)] hover:-translate-y-0.5 transition-all duration-300"
            >
              About DVCCL
              <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
