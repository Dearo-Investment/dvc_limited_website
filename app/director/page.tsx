"use client";

import Image from "next/image";

const directors = [
  {
    name: "Mr. Prasanna Sanjeewa Ranasinghe",
    role: "Executive Director / Chief Executive Officer",
    image: "/images/directors/prasanna 1.png",
  },
  {
    name: "Mr. Upul Edirisooriya",
    role: "Non Independent Non Executive Director",
    image: "/images/directors/upul.png",
  },
  {
    name: "Mr. Neranjan Warnasooriya",
    role: "Non Board Director / Deputy Chief Executive Officer ",
    image: "/images/directors/nerangen.png",
  },
  {
    name: "Mr. Terence Yatawara",
    role: "Group Director - Sales & Marketing",
    image: "/images/directors/terence.png",
  },
  {
    name: "Mr. Tharindu Dananjaya",
    role: "Non Board Director/ Chief Information Officer",
    image: "/images/directors/tharindu.png",
  },
  {
    name: "Mr. Asitha Suranjith",
    role: "Head Of Investment and Treasury",
    image: "/images/management/asith1.jpg",
  },{
    name: "Mr. Chathura Dissanayaka",
    role: "Senior Manager - Investment & Treasury",
    image: "/images/management/chathura.jpg",
  },
];

export default function DirectorsPage() {
  return (
    <main className="directors-page">
      <section className="container py-5">
        {/* Page Heading */}
        <div className="text-center mb-5">
          <h1 className="page-title">Board of Directors</h1>
          <p className="page-subtitle">
            Strategic leadership guiding Dearo Investment Limited
          </p>
        </div>

        {/* Directors Grid */}
        <div className="row justify-content-center g-4">
          {directors.map((director, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 border-0 shadow-sm text-center director-card p-3">
                <div
                  className="mx-auto mb-3 position-relative"
                  style={{ width: "120px", height: "120px" }}
                >
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    style={{ objectFit: "cover", borderRadius: "50%" }}
                  />
                </div>
                <h6 className="fw-semibold mb-1">{director.name}</h6>
                <small className="text-muted">{director.role}</small>
              </div>
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
          margin-top: 6px;
        }

        .director-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
          background: #fff;
          cursor: pointer;
        }

        .director-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
        }

        h6 {
          font-size: 1rem;
          font-weight: 600;
          color: #111;
        }

        small {
          font-size: 0.85rem;
          color: #6c757d;
        }

        @media (max-width: 991px) {
          .director-card {
            margin-bottom: 20px;
          }
        }

        @media (max-width: 576px) {
          .director-card {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </main>
  );
}
