'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, company } from '@/lib/data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close mobile menu when screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-primary-deep/95 shadow-lg backdrop-blur-xl'
          : 'border-b border-transparent bg-primary-deep/80 backdrop-blur-md'
      }`}
    >
      {/* Main Navbar Container */}
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">

        {/* ==================== LEFT - LOGO ==================== */}
        <a
          href="/"
          className="group flex shrink-0 items-center"
          aria-label={`${company.name} Home`}
        >
          <img
            src="logo.svg"
            alt={`${company.name} Logo`}
            className="
              h-10
              w-auto
              object-contain
              transition-transform
              duration-300
              group-hover:scale-105
              sm:h-11
              md:h-12
            "
          />
        </a>

        {/* ==================== DESKTOP NAVIGATION ==================== */}
        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-7 2xl:gap-9"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                group
                relative
                py-2
                text-sm
                font-medium
                text-neutral-muted
                transition-colors
                duration-300
                hover:text-accent-gold
                xl:text-[15px]
              "
            >
              {link.label}

              {/* Hover underline */}
              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-accent-gold
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </nav>

        {/* ==================== DESKTOP CTA ==================== */}
        <a
          href="/contact"
          className="hidden shrink-0 lg:inline-flex"
        >
          <span className="btn-primary">
            Get In Touch
          </span>
        </a>

        {/* ==================== MOBILE MENU BUTTON ==================== */}
        <button
          type="button"
          aria-label={
            open
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((prev) => !prev)}
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-md
            text-white
            transition-colors
            hover:bg-white/10
            hover:text-accent-gold
            lg:hidden
          "
        >
          {open ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </div>

      {/* ==================== MOBILE NAVIGATION ==================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className="
              overflow-hidden
              border-t
              border-white/10
              bg-primary-deep
              lg:hidden
            "
          >
            <nav
              className="
                mx-auto
                flex
                w-full
                max-w-[1600px]
                flex-col
                px-4
                py-4
                sm:px-6
                lg:px-8
              "
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                  }}
                  className="
                    border-b
                    border-white/5
                    py-3.5
                    text-sm
                    font-medium
                    text-neutral-muted
                    transition-colors
                    duration-300
                    last:border-0
                    hover:text-accent-gold
                  "
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="
                  btn-primary
                  mt-4
                  w-full
                  justify-center
                  text-center
                "
              >
                Get In Touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}