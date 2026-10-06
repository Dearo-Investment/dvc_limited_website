'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { awards } from '@/lib/data';

export default function Awards() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="pointer-events-none absolute right-[-10%] top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent-gold/5 blur-[120px]" />

      <div className="container-content relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent-gold" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-gold">Awards & Recognition</p>
              <span className="h-px w-10 bg-accent-gold" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Recognised for excellence
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={award}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/5 bg-primary-darker px-6 py-10 text-center hover:border-accent-gold/30 hover:shadow-[0_8px_30px_rgba(198,161,91,0.07)] transition-all duration-500"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent-gold/20 bg-accent-gold/10 group-hover:bg-accent-gold/15 transition-colors">
                <Award className="text-accent-gold" size={24} />
              </div>
              <p className="text-sm font-semibold text-white leading-snug">{award}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
