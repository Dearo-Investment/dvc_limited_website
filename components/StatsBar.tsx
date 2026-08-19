'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { stats } from '@/lib/data';

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

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
    <section className="relative z-20 -mt-16">
      {/* Stats Container - max width 8xl */}
      <div className="container-content">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="card-surface px-5 py-6 shadow-gold md:px-7 md:py-8"
            >
              <p className="font-heading text-2xl font-semibold text-accent-gold md:text-3xl">
                {stat.prefix}
                <Counter value={stat.value} />
                {stat.suffix}
              </p>

              <p className="mt-1 text-xs tracking-wide text-neutral-muted md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}