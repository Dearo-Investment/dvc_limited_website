'use client';

import { motion } from 'framer-motion';
import { milestones } from '@/lib/data';

export default function Milestones() {
  return (
    <section className="relative py-32 bg-primary-darker border-y border-white/5 overflow-hidden">
      {/* Background number watermark */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 font-heading text-[20rem] font-bold text-white/[0.02] select-none leading-none">
        DVCCL
      </div>

      <div className="container-content relative">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">

          {/* Left — Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-72 xl:w-96 shrink-0"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent-gold" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-gold">Key Milestones</p>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Our journey so far
            </h2>
            <p className="mt-6 text-neutral-muted leading-relaxed">
              From a disciplined founding to nationwide expansion — every milestone reflects our commitment to Sri Lanka&apos;s future.
            </p>
          </motion.div>

          {/* Right — Timeline */}
          <div className="flex-1 relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent-gold/40 via-accent-gold/20 to-transparent" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="relative pl-10"
                >
                  {/* Dot */}
                  <span className="absolute left-0 top-1.5 h-3 w-3 -translate-x-[5px] rounded-full bg-accent-gold shadow-[0_0_10px_rgba(198,161,91,0.6)] ring-4 ring-primary-darker" />

                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                    <div className="shrink-0">
                      <p className="font-heading text-4xl font-bold text-accent-gold leading-none">{m.year}</p>
                    </div>
                    <div className="flex-1 pb-4 border-b border-white/5">
                      <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">{m.tag}</p>
                      <p className="text-base text-neutral-muted leading-relaxed">{m.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
