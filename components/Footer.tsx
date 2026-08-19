import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';
import Logo from '@/components/Logo';
import {
  company,
  footerQuickLinks,
  subsidiaries,
} from '@/lib/data';

const socials = [
  {
    icon: Facebook,
    href: '#',
    label: 'Facebook',
  },
  {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn',
  },
  {
    icon: Instagram,
    href: '#',
    label: 'Instagram',
  },
  {
    icon: Youtube,
    href: '#',
    label: 'YouTube',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary-darker pt-16 pb-8">
      {/* Main Footer */}
      <div className="mx-auto grid w-full max-w-8xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 xl:px-10">
        
        {/* Company Information */}
        <div className="md:col-span-2">
          <a
            href="/"
            className="group mb-5 flex w-fit items-center"
            aria-label={`${company.name} Home`}
          >
            <Logo />
          </a>

          <p className="max-w-md text-sm leading-relaxed text-neutral-muted">
            Empowering transformative businesses across industries for a
            sustainable and prosperous future.
          </p>

          {/* Contact Information */}
          <div className="mt-6 space-y-2 text-sm text-neutral-muted">
            <p className="leading-relaxed">
              {company.address}
            </p>

            <p>
              <a
                href={`tel:${company.hotline.replace(/\s/g, '')}`}
                className="transition-colors duration-300 hover:text-accent-gold"
              >
                {company.hotline}
              </a>

              <span className="mx-2 text-white/20">
                ·
              </span>

              <a
                href={`tel:${company.general.replace(/\s/g, '')}`}
                className="transition-colors duration-300 hover:text-accent-gold"
              >
                {company.general}
              </a>
            </p>

            <p>
              <a
                href={`mailto:${company.email}`}
                className="transition-colors duration-300 hover:text-accent-gold"
              >
                {company.email}
              </a>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="eyebrow mb-5">
            Quick Links
          </h4>

          <ul className="space-y-3">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group flex w-fit items-center text-sm text-neutral-muted transition-colors duration-300 hover:text-accent-gold"
                >
                  <span className="mr-0 w-0 overflow-hidden transition-all duration-300 group-hover:mr-2 group-hover:w-2">
                    →
                  </span>

                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subsidiaries */}
        <div>
          <h4 className="eyebrow mb-5">
            Subsidiaries
          </h4>

          <ul className="space-y-3">
            {subsidiaries.map((subsidiary) => (
              <li key={subsidiary.slug}>
                <a
                  href={`/subsidiaries#${subsidiary.slug}`}
                  className="group flex w-fit items-center text-sm text-neutral-muted transition-colors duration-300 hover:text-accent-gold"
                >
                  <span className="mr-0 w-0 overflow-hidden transition-all duration-300 group-hover:mr-2 group-hover:w-2">
                    →
                  </span>

                  {subsidiary.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mx-auto mt-12 flex w-full max-w-8xl flex-col-reverse items-center gap-6 border-t border-white/10 px-4 pt-6 sm:px-6 md:flex-row md:justify-between lg:px-8 xl:px-10">
        
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="text-xs leading-relaxed text-neutral-mutedDark">
            &copy; 2026 {company.name}. All Rights Reserved.
          </p>

          <div className="mt-1.5 flex flex-wrap justify-center gap-2 text-xs text-neutral-mutedDark md:justify-start">
            <a
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-accent-gold"
            >
              Privacy Policy
            </a>

            <span className="text-white/20">
              ·
            </span>

            <a
              href="/terms-of-service"
              className="transition-colors duration-300 hover:text-accent-gold"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <span className="mr-1 hidden text-xs text-neutral-mutedDark sm:block">
            Connect With Us
          </span>

          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent-gold hover:bg-accent-gold/10 hover:text-accent-gold"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}