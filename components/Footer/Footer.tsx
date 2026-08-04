"use client";

import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Sectors", href: "/sectors" },
    { name: "Contact", href: "/contact" },
    { name: "Community", href: "/community" },
  ];

  const subsidiaries = [
    "Agriculture & Plantation",
    "Engineering & Construction",
    "Education & Training",
    "Dearo Lime",
    "DCCI – From Our Waters to the World",
    "DEARO IT SOLUTION",
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">

          {/* Company Info */}
          <div className="col-md-6 col-lg-3 footer-col">
            <h5 className="footer-title">Dearo Venture Capital Limited</h5>
            <p>
              9th Floor, Ceylinco House, No 69, Janadhipathi Mawatha, Colombo 01
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+94743908274" className="footer-link">
                011 478 2400
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:info@dearoinvestment.com" className="footer-link">
                info@dearoinvestment.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-3 footer-col">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              {quickLinks.map((link, i) => (
                <li key={i} className="quick-link-item">
                  <Link href={link.href} className="quick-link">
                    <span className="quick-link-inner">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subsidiaries */}
          <div className="col-md-6 col-lg-3 footer-col">
            <h5 className="footer-title">Subsidiaries</h5>
            <ul className="footer-links">
              {subsidiaries.map((item, i) => (
                <li key={i} className="quick-link-item">
                  <span className="subsidiary-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-6 col-lg-3 footer-col">
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/dearoinvestmentlimited/" target="_blank" className="facebook"><Facebook size={22} /></a>
              <a href="https://www.instagram.com/dearoinvestmentlimited/" target="_blank" className="instagram"><Instagram size={22} /></a>
              <a href="https://www.youtube.com/@DearoInvestmentlimited" target="_blank" className="youtube"><Youtube size={22} /></a>
              <a href="https://www.linkedin.com/company/dearoinvestmentlimited" target="_blank" className="linkedin"><Linkedin size={22} /></a>
            </div>
          </div>

        </div>

        <hr />

        <div className="copyright">
          ©2026 Dearo Venture Capital Limited — All Rights Reserved
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .footer {
          background: #0a0a0a;
          color: #d1d5db;
          padding: 4rem 0 2rem;
        }

        .footer-title {
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        p {
          font-size: 0.95rem;
          margin-bottom: 0.6rem;
        }

        .footer-link {
          color: #ffffff;
          text-decoration: none;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .quick-link-item {
          margin-bottom: 12px;
          opacity: 0;
          transform: translateY(10px);
          animation: fadeUp 0.6s ease forwards;
        }

        .quick-link {
          color: #e5e7eb;
          text-decoration: none;
          font-size: 0.95rem;
          position: relative;
          display: inline-block;
        }

        .quick-link-inner {
          transition: transform 0.35s ease;
        }

        .quick-link:hover .quick-link-inner {
          transform: translateX(6px);
        }

        .subsidiary-text {
          font-size: 0.9rem;
          color: #9ca3af;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .social-icons {
          display: flex;
          gap: 16px;
        }

        .facebook { color: #1877f2; }
        .instagram { color: #e1306c; }
        .youtube { color: #ff0000; }
        .linkedin { color: #0a66c2; }

        .social-icons a:hover {
          transform: scale(1.2);
          filter: brightness(1.2);
        }

        hr {
          border-color: #374151;
          margin: 2rem 0 1.5rem;
          opacity: 0.3;
        }

        .copyright {
          text-align: center;
          font-size: 0.85rem;
          color: #9ca3af;
        }

        /* ================= MOBILE CENTER ================= */
        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 1.5rem;
          }

          .footer-col {
            text-align: center;
          }

          .footer-links {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .social-icons {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}  