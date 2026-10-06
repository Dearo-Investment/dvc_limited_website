'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { stats } from '@/lib/data';

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        node.textContent = Math.round(latest).toLocaleString();
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>0</span>;
}

export default function StatsBar() {
  return (
    <section className="relative z-20 w-full bg-primary-darker py-16 sm:py-24 border-y border-white/5">
      <div className="container-content">
        <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center px-4 text-center transition-transform hover:-translate-y-1"
            >
              <h3 className="font-heading text-4xl font-bold tracking-tight text-accent-gold md:text-5xl lg:text-[56px]">
                {stat.prefix}
                <Counter value={stat.value} />
                {stat.suffix}
              </h3>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}