"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

function DropdownArrow({ open }: { open?: boolean }) {
  return (
    <span
      style={{
        display: "inline-block",
        marginLeft: "6px",
        width: "6px",
        height: "6px",
        borderRight: "2px solid #111",
        borderBottom: "2px solid #111",
        transform: open ? "rotate(-135deg)" : "rotate(45deg)",
        transition: "transform 0.3s ease",
      }}
    />
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [leadershipOpen, setLeadershipOpen] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    setIsOpen(false);
    setLeadershipOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setLeadershipOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setLeadershipOpen(false), 200);
  };

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Subsidiaries", href: "/sectors" },
    { name: "Community & Environment", href: "/community" },
    { name: "Investor Relations", href: "/investors" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`navbar navbar-expand-lg premium-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        {/* Logo */}
        <Link href="/" className="navbar-brand" onClick={closeMenu}>
          <Image
            src="/images/venturelogo.jpeg"
            alt="Dearo Logo"
            width={155}
            height={55}
            className="logo"
          />
        </Link>

        {/* Hamburger */}
        <button className="navbar-toggler border-0" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-center nav-menu">
            {/* Leadership Dropdown */}
            <li
              className={`nav-item leadership-wrapper ${leadershipOpen ? "open" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="#" className="nav-link leadership-btn-text">
                Our Leadership <DropdownArrow open={leadershipOpen} />
              </Link>

              <ul className={`dropdown-menu leadership-menu ${leadershipOpen ? "show" : ""}`}>
                <li>
                  {<Link href="/director" className="dropdown-item" onClick={closeMenu}>
                    Directors
                  </Link> }
                </li>
                <li>
                  <Link href="/management" className="dropdown-item" onClick={closeMenu}>
                    Corporate Management
                  </Link>
                </li>
              </ul>
            </li>

            {/* Other nav items */}
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <Link href={item.href} className="nav-link" onClick={closeMenu}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* Logo */
        .logo {
          display: block;
          transition: transform 0.35s ease;
        }

        .premium-nav.scrolled .logo {
          transform: scale(0.9);
        }

        /* Navbar (Glass) */
        .premium-nav {
          position: sticky;
          top: 0;
          z-index: 999;
          background: rgb(255, 255, 255);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          padding: 14px 0;
          transition: all 0.35s ease;
        }

        .premium-nav.scrolled {
          padding: 6px 0;
          background: rgb(255, 255, 255);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        /* Nav menu */
        .nav-menu {
          display: flex;
          gap: 30px;
        }

        @media (max-width: 991px) {
          .nav-menu {
            flex-direction: column;
            gap: 20px;
          }
        }

        /* Nav links */
        .nav-link {
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          color: #111;
          padding: 6px 12px;
          display: flex;
          align-items: center;
          position: relative;
          transition: all 0.3s ease;
        }

        .premium-nav.scrolled .nav-link {
          padding: 4px 10px;
          font-size: 0.8rem;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #0d6efd, #5aa2ff);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #0d6efd;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Dropdown */
        .leadership-wrapper {
          position: relative;
        }

        .leadership-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 220px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.25s ease;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 14px;
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.18);
          padding: 8px 0;
        }

        .leadership-wrapper.open .leadership-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          padding: 12px 18px;
          transition: all 0.25s ease;
        }

        .dropdown-item:hover {
          background: linear-gradient(90deg, #0d6efd, #5aa2ff);
          color: #fff;
        }

        @media (max-width: 991px) {
          .leadership-menu {
            position: static;
            opacity: 1 !important;
            visibility: visible !important;
            box-shadow: none;
          }
        }
      `}</style>
    </nav>
  );
}