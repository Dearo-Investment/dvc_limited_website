"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "../ui/Button";
import Link from "next/link";
import { siteData } from "../../data/siteData";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[95vh] flex items-center bg-primary-deep text-neutral-white overflow-hidden pt-24 pb-12">
      {/* Background Graphic elements */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero.png" 
          alt="Premium Architecture background" 
          fill
          priority
          className="object-cover opacity-20 object-center mix-blend-overlay"
        />
        <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-gradient-to-l from-primary-secondary/40 to-transparent skew-x-12 translate-x-32" />
        <div className="absolute bottom-0 right-10 w-96 h-96 border border-accent/20 rounded-full blur-3xl opacity-50" />
      </div>

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block text-accent font-semibold tracking-widest text-xs sm:text-sm uppercase mb-6">
            {siteData.company.name}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-medium leading-tight mb-8">
            {siteData.company.tagline.split(" ").map((word, idx) => (
              <span key={idx} className="inline-block mr-3">
                {word}
              </span>
            ))}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-white/80 leading-relaxed mb-10 max-w-xl">
            {siteData.company.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/portfolio">
              <Button size="lg" className="w-full sm:w-auto text-sm tracking-wide">
                Explore Our Investments
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-neutral-white border-neutral-white hover:bg-neutral-white hover:text-primary-deep text-sm tracking-wide">
                Discover DVCCL
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] lg:h-[600px] w-full hidden lg:block rounded-xl overflow-hidden shadow-2xl border border-white/10"
        >
          {/* Use the generated premium image here */}
          <Image 
            src="/hero.png"
            alt="Strategic Investment Vision"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep/60 to-transparent" />

          <motion.div 
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-32 h-64 border border-accent/40 bg-accent/5 backdrop-blur-sm flex flex-col items-center justify-center text-center px-4" 
          >
            <span className="text-3xl font-heading font-medium text-accent">$50M+</span>
            <span className="text-xs uppercase tracking-widest text-neutral-white/70 mt-2">
              Assets Under Management
            </span>
          </motion.div>
          <motion.div 
            animate={{ 
              y: [0, 15, 0],
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/3 w-48 h-48 border border-neutral-white/20 bg-neutral-white/5 backdrop-blur-sm flex flex-col items-center justify-center text-center px-4" 
          >
            <span className="text-3xl font-heading font-medium text-neutral-white">15+</span>
            <span className="text-xs uppercase tracking-widest text-neutral-white/70 mt-2">
              Years of Strategic Growth
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}