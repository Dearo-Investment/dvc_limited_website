'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const subsidiaries = [
  {
    slug: 'agriculture-plantation',
    number: '01',
    name: 'Agriculture & Plantation',
    summary:
      'Sustainable farming solutions powered by modern agricultural technology and innovation. We integrate smart farming practices, precision agriculture, and eco-friendly techniques to drive productivity and food security across Sri Lanka.',
    image: '/subsidiaries/agri_plantation.jpg',
    tag: 'Smart Farming',
  },
  {
    slug: 'engineering-construction',
    number: '02',
    name: 'Engineering & Construction',
    summary:
      'High-quality civil, structural, and infrastructure development across Sri Lanka. From commercial towers to critical infrastructure, we deliver engineering excellence grounded in safety, sustainability, and innovation.',
    image: '/subsidiaries/engineering_construction.jpg',
    tag: 'Infrastructure',
  },
  {
    slug: 'education-training',
    number: '03',
    name: 'Education & Training',
    summary:
      'Professional education programs focused on skills development and future readiness. We empower individuals and organizations with knowledge-driven programs that align with the demands of a rapidly evolving global economy.',
    image: '/subsidiaries/education_training.jpg',
    tag: 'Human Capital',
  },
  {
    slug: 'dvccl-lime',
    number: '04',
    name: 'DVCCL Lime',
    summary:
      'Natural high-calcium lime products for industrial and agricultural applications. Our lime operations combine rigorous quality control with sustainable extraction, supplying reliable, premium-grade products to local and international markets.',
    image: '/subsidiaries/dvccl_lime.jpg',
    tag: 'Industrial',
  },
  {
    slug: 'dcci',
    number: '05',
    name: 'DCCI',
    summary:
      "From Our Waters to the World — sustainable source seafood processed with international quality standards for global markets. We bring the finest of Sri Lanka's ocean harvest to discerning customers around the world.",
    image: '/subsidiaries/dcci_seafood.jpg',
    tag: 'Global Exports',
  },
  {
    slug: 'it-solutions',
    number: '06',
    name: 'DVCCL IT Solutions',
    summary:
      'Innovating the Digital Future: smart, secure and scalable IT solutions designed to empower your business. We deliver enterprise-grade technology services from software development to cybersecurity and cloud infrastructure.',
    image: '/subsidiaries/it_solutions.jpg',
    tag: 'Digital Innovation',
  },
];

export default function SubsidiariesList() {
  return (
    <section className="py-24">
      <div className="container-content">
        <div className="space-y-8">
          {subsidiaries.map((s, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={s.slug}
                id={s.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#130B24] hover:border-accent-gold/25 hover:shadow-[0_0_60px_rgba(198,161,91,0.07)] transition-all duration-700"
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[420px]`}>

                  {/* Image Side */}
                  <div className="relative w-full lg:w-[48%] h-72 lg:h-auto overflow-hidden shrink-0">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 48vw"
                    />
                    {/* Gradient fading into card bg */}
                    <div
                      className={`absolute inset-0 ${
                        isEven
                          ? 'bg-gradient-to-r from-transparent to-[#130B24]'
                          : 'bg-gradient-to-l from-transparent to-[#130B24]'
                      } opacity-80 group-hover:opacity-60 transition-opacity duration-700`}
                    />
                    {/* Mobile bottom gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#130B24] to-transparent lg:hidden" />

                    {/* Number watermark */}
                    <div className="absolute top-6 left-6 font-heading text-7xl font-bold text-white/5 select-none">
                      {s.number}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`relative flex flex-col justify-center flex-grow p-10 lg:p-16 ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>

                    {/* Tag */}
                    <div className="mb-5 inline-flex items-center gap-2 self-start">
                      <span className="h-px w-8 bg-accent-gold" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent-gold">
                        {s.tag}
                      </span>
                    </div>

                    {/* Number + Title */}
                    <div className="flex items-start gap-5 mb-6">
                      <span className="hidden lg:block font-heading text-6xl font-bold text-white/8 leading-none select-none mt-1">
                        {s.number}
                      </span>
                      <h2 className="font-heading text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight group-hover:text-accent-gold transition-colors duration-500">
                        {s.name}
                      </h2>
                    </div>

                    {/* Divider */}
                    <div className="w-16 h-px bg-accent-gold/40 mb-7" />

                    {/* Summary */}
                    <p className="text-base md:text-lg text-neutral-muted/85 leading-relaxed max-w-xl mb-10">
                      {s.summary}
                    </p>

                    {/* CTA */}
                    <div className="mt-auto">
                      <a
                        href={`/subsidiaries#${s.slug}`}
                        className="group/btn inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/10 bg-white/[0.03] text-sm font-semibold text-white hover:bg-accent-gold hover:border-accent-gold hover:text-primary-deep transition-all duration-300"
                      >
                        <span>Learn More</span>
                        <ArrowUpRight
                          size={17}
                          className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
