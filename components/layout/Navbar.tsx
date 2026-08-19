"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Investments", href: "/investments" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Insights", href: "/insights" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || mobileMenuOpen || pathname !== "/"
            ? "bg-primary-deep/95 backdrop-blur-md border-b border-primary-secondary py-4"
            : "bg-transparent py-6"
        )}
      >
        <Container className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group z-50">
            <Image 
              src="/logo-transparent (1).png" 
              alt="DVCCL Logo" 
              width={64} 
              height={64} 
              className="object-contain w-12 h-12 md:w-16 md:h-16 rounded-sm bg-white p-1"
            />
            <div className="hidden sm:block text-xl md:text-2xl font-heading font-bold text-neutral-white tracking-wider group-hover:text-accent-soft transition-colors">
              DVCCL
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors hover:text-accent",
                    pathname === link.href
                      ? "text-accent"
                      : "text-neutral-white/80"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link href="/contact">
              <Button variant="secondary" size="sm" className="hidden lg:inline-flex group">
                Partner With Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-neutral-white p-2 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary-deep pt-24 px-4 flex flex-col h-screen"
          >
            <div className="flex flex-col gap-6 items-center w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-xl font-medium tracking-wide w-full text-center py-2 transition-colors",
                    pathname === link.href
                      ? "text-accent"
                      : "text-neutral-white hover:text-accent-soft"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full mt-4 flex justify-center">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="secondary" size="lg" className="w-full max-w-sm">
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
