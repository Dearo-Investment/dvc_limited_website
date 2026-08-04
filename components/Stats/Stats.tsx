"use client";

import { useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { BiBuilding, BiGroup, BiDollar, BiBriefcase } from "react-icons/bi";

const stats = [
  { label: "Branches", value: 25, icon: <BiBuilding size={40} /> },
  { label: "Happy Clients", value: 25000, icon: <BiGroup size={40} /> },
  { label: "Total Assets", value: "2 Bn+", icon: <BiDollar size={40} /> },
  { label: "Work Force", value: 350, icon: <BiBriefcase size={40} /> },
];

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="py-5" ref={ref} style={{ backgroundColor: "#100755" }}>
      <div className="container">
        <div className="row text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="col-6 col-md-3 mb-4 mb-md-0 d-flex flex-column align-items-center"
            >
              {/* Animated Icon */}
              <div className={`stats-icon mb-3 ${inView ? "active" : ""}`}>
                {stat.icon}
              </div>

              {/* Animated Number */}
              <h3 className="display-5 fw-bold mb-2">
                {inView && typeof stat.value === "number" ? (
                  <CountUp end={stat.value} duration={2} separator="," />
                ) : (
                  stat.value
                )}
              </h3>

              <p className="fw-semibold text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stats-icon {
          color: #FFFFFF;
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.7s ease;
        }

        .stats-icon.active {
          opacity: 1;
          transform: translateY(0);
        }

        h3 {
          font-size: clamp(2rem, 3vw, 2.5rem);
          transition: transform 0.3s ease;
        }

        h3:hover {
          transform: scale(1.1);
        }

        p {
          font-size: 1rem;
          color: #FFFFFF;
        }

        @media (max-width: 768px) {
          h3 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
