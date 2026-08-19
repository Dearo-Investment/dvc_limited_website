import { Mail, Phone } from 'lucide-react';
import { company } from '@/lib/data';

export default function TopBar() {
  const phoneNumber = company.hotline.replace(/\s/g, '');

  return (
    <div className="hidden border-b border-white/5 bg-primary-darker text-neutral-muted md:block">
      <div className="mx-auto flex w-full max-w-8xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Tagline */}
        <p className="truncate pr-6 text-xs tracking-wide">
          {company.tagline}
        </p>

        {/* Contact & Account Links */}
        <div className="flex shrink-0 items-center gap-4 text-xs lg:gap-5">
          
          {/* Hotline */}
          <a
            href={`tel:${phoneNumber}`}
            className="group flex items-center gap-1.5 transition-colors duration-300 hover:text-accent-gold"
            aria-label={`Call ${company.hotline}`}
          >
            <Phone
              size={12}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span>{company.hotline}</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${company.email}`}
            className="group flex items-center gap-1.5 transition-colors duration-300 hover:text-accent-gold"
            aria-label={`Email ${company.email}`}
          >
            <Mail
              size={12}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span>{company.email}</span>
          </a>

          {/* Divider */}
          <span
            className="h-3 w-px bg-white/10"
            aria-hidden="true"
          />

          {/* Login */}
          <a
            href="/login"
            className="transition-colors duration-300 hover:text-accent-gold"
          >
            Login
          </a>

          <span
            className="text-white/20"
            aria-hidden="true"
          >
            |
          </span>

          {/* Register */}
          <a
            href="/register"
            className="transition-colors duration-300 hover:text-accent-gold"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}