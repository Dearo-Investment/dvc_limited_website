"use client";

import Image from "next/image";

const directors = [
  {
    name: "Mr. Asitha Suranjith",
    role: "Head Of Investment and Treasury",
    image: "/images/management/asith1.jpg",
  }, {
    name: "Mr. Chathura Dissanayaka",
    role: "Senior Manager - Investment & Treasury",
    image: "/images/management/chathura.jpg",
  },
  {
    name: "Mr. Nalin Kumara",
    role: "Chief Manager – Branch Operations",
    image: "/images/management/nalin.png",
  },
  {
    name: "Mr. Dilshan Nuwantha",
    role: "Cheif Manager – Branch Development",
    image: "/images/management/team-dilshan-nuwantha.jpg",
  },
  {
    name: "Mr. Mahesh Gunarathna",
    role: "Manager Audit",
    image: "/images/management/Mahesh Gunarathna Manager Audit.jpeg",
  },
  {
    name: "Mr. Rajitha Madushanka",
    role: "Chief Manager Asset Lending – Leasing",
    image: "/images/management/team-rajitha.jpg",
  }, {
    name: "Mr. Rex",
    role: "Senior Manager - North & East Region",
    image: "/images/management/rex1.jpg",
  }, {
    name: "Mr. Mohomed Nifri",
    role: "Manager Branch Operation and Development",
    image: "/images/management/nifri.jpg",
  },{
    name: "Mr. T. Maventhan ",
    role: "Aissistant Manager - Investment North & East Region",
    image: "/images/management/mawe.jpg",
  }, {
    name: "Mr. Chathura Ubesekara",
    role: "Senior Manager Down South Region",
    image: "/images/management/chathura.jpeg",
  },
];

export default function DirectorsPage() {
  return (
    <main className="directors-page py-5">
      <section className="container">
        <div className="text-center mb-5">
          <h1 className="page-title">Corporate Management</h1>
          <p className="page-subtitle">
            Strategic leadership guiding Dearo Investment Limited
          </p>
        </div>

        <div className="directors-grid">
          {directors.map((member, index) => (
            <div key={index} className="director-card">
              <div className="director-img-wrapper mb-3">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  style={{ objectFit: "cover", borderRadius: "6px" }}
                />
              </div>
              <h5 className="director-name">{member.name}</h5>
              <p className="director-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .directors-page {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .page-title {
          font-size: 2rem;
          font-weight: 700;
          color: #111;
        }

        .page-subtitle {
          font-size: 1rem;
          color: #6c757d;
          margin-top: 5px;
        }

        .directors-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
        }

        .director-card {
          flex: 1 1 calc(25% - 1.5rem); /* 4 per row */
          max-width: 200px;
          background: #fff;
          border-radius: 12px;
          text-align: center;
          padding: 1rem;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .director-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
        }

        .director-img-wrapper {
          margin: 0 auto 0.75rem;
          width: 100%;
          height: 120px;
          overflow: hidden;
          border-radius: 6px;
        }

        .director-name {
          font-size: 1rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 3px;
        }

        .director-role {
          font-size: 0.85rem;
          font-weight: 600;
          color: #0d6efd;
          margin: 0;
        }

        @media (max-width: 1200px) {
          .director-card {
            flex: 1 1 calc(33.333% - 1rem); /* 3 per row */
          }
        }

        @media (max-width: 992px) {
          .director-card {
            flex: 1 1 calc(50% - 0.8rem); /* 2 per row */
          }
        }

        @media (max-width: 576px) {
          .director-card {
            flex: 1 1 100%; /* 1 per row */
          }
        }
      `}</style>
    </main>
  );
}
