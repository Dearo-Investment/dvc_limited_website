'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const previewSubsidiaries = [
  { slug: 'agriculture-plantation', name: 'Agriculture & Plantation', image: '/subsidiaries/agri_plantation.jpg', tag: 'Smart Farming' },
  { slug: 'engineering-construction', name: 'Engineering & Construction', image: '/subsidiaries/engineering_construction.jpg', tag: 'Infrastructure' },
  { slug: 'education-training', name: 'Education & Training', image: '/subsidiaries/education_training.jpg', tag: 'Human Capital' },
  { slug: 'dvccl-lime', name: 'DVCCL Lime', image: '/subsidiaries/dvccl_lime.jpg', tag: 'Industrial' },
  { slug: 'dcci', name: 'DCCI', image: '/subsidiaries/dcci_seafood.jpg', tag: 'Global Exports' },
  { slug: 'it-solutions', name: 'DVCCL IT Solutions', image: '/subsidiaries/it_solutions.jpg', tag: 'Digital Innovation' },
];

export default function SubsidiariesPreview() {
  return (
    <section className="relative py-32 bg-primary-darker border-y border-white/5 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent-gold" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-gold">Our Subsidiaries</p>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight max-w-xl leading-tight">
              Driving growth through diversified ventures
            </h2>
          </motion.div>
          <motion.a
            href="/subsidiaries"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-accent-gold hover:text-white transition-colors"
          >
            View All
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
          {previewSubsidiaries.map((s, i) => (
            <motion.a
              key={s.slug}
              href={`/subsidiaries#${s.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 hover:border-accent-gold/30 transition-all duration-500 aspect-[4/3] block"
            >
              <Image
                src={s.image}
                alt={s.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Always-on dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0820]/90 via-[#0f0820]/30 to-transparent" />
              {/* Hover gold tint */}
              <div className="absolute inset-0 bg-accent-gold/0 group-hover:bg-accent-gold/5 transition-colors duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent-gold mb-1.5">{s.tag}</p>
                <div className="flex items-end justify-between gap-2">
                  <h3 className="font-heading text-base md:text-lg font-bold text-white leading-tight">{s.name}</h3>
                  <ArrowUpRight size={18} className="shrink-0 text-white/40 group-hover:text-accent-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
