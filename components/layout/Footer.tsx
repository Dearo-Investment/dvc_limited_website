import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteData } from "@/data/siteData";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-neutral-white pt-20 pb-10 border-t border-primary-secondary">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-heading font-bold tracking-wider text-neutral-white">
                DVCCL
              </span>
            </Link>
            <p className="text-neutral-white/70 text-sm leading-relaxed max-w-md pr-4">
              {siteData.company.description}
            </p>
          </div>

          <div>
            <h4 className="text-accent font-semibold tracking-widest text-sm uppercase mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-neutral-white/80 hover:text-accent transition-colors text-sm">About Us</Link></li>
              <li><Link href="/leadership" className="text-neutral-white/80 hover:text-accent transition-colors text-sm">Leadership</Link></li>
              <li><Link href="/careers" className="text-neutral-white/80 hover:text-accent transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-semibold tracking-widest text-sm uppercase mb-6">Investments</h4>
            <ul className="space-y-4">
              <li><Link href="/investments" className="text-neutral-white/80 hover:text-accent transition-colors text-sm">Investment Focus</Link></li>
              <li><Link href="/portfolio" className="text-neutral-white/80 hover:text-accent transition-colors text-sm">Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-semibold tracking-widest text-sm uppercase mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/insights" className="text-neutral-white/80 hover:text-accent transition-colors text-sm">Insights & News</Link></li>
              <li><Link href="/contact" className="text-neutral-white/80 hover:text-accent transition-colors text-sm">Contact</Link></li>
              <li><Link href="/privacy" className="text-neutral-white/80 hover:text-accent transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-secondary flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-white/60">
            © 2026 Development Venture Capital Corporation Limited. All rights reserved.
          </p>
          <div className="flex gap-4">
            {Object.entries(siteData.social).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-white/60 hover:text-accent transition-colors text-sm capitalize"
              >
                {key}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
