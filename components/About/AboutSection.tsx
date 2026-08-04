"use client";
import Image from "next/image";

export default function AboutSection() {
  const milestones = [
    {
      year: "2022",
      title: "Establishment of Dearo Investment",
      description:
        "Dearo Investment Limited was formally established, laying the foundation for a disciplined and growth-oriented investment platform.",
    },
    {
      year: "2023",
      title: "Strategic Expansion & Branch Growth",
      description:
        "Launch of Dearo Agri and Dearo Engineering, expanding Dearo’s operations into agricultural and engineering-led project facilitation. During the same year, Dearo expanded its physical presence to 9 branches across Sri Lanka.",
    },
    {
      year: "2024",
      title: "Launch of Dearo Education",
      description:
        "Introduction of Dearo Education, extending Dearo’s impact beyond supporting education initiatives and learning accessibility.",
    },
    {
      year: "2025",
      title: "Nationwide Expansion",
      description:
        "Expanded to 25 branches across Sri Lanka, reinforcing nationwide reach and operational strength.",
    },
  ];

  const awards = [
    { title: "Iconic Awards 2024", image: "/images/awards/AW.jpg" },
    { title: "Peoples Excellency Awards 2024", image: "/images/awards/AW23.jpg" },
    { title: "Iconic Awards Bangkok 2025", image: "/images/awards/AW2.jpg" },
    { title: "Asia Miracle Awards 2024", image: "/images/awards/AW3.jpg" },
    { title: "BWIO USA Awards 2025", image: "/images/awards/AW4.jpg" },
    { title: "Best SME Financing Initiative", image: "/images/awards/AW5.jpg" },
  ];

  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">

        {/* ===== ABOUT OVERVIEW ===== */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="fw-bold mb-3 text-black">About Our Company</h2>
            <p className="text-dark">
              Dearo Investment Limited was incorporated under the Companies Act
              No. 07 of 2007 and officially registered on 1st September 2022.
            </p>
            <p className="text-dark">
              With disciplined risk management and strong governance, Dearo
              empowers businesses and communities across Sri Lanka.
            </p>
          </div>

          <div className="col-md-6">
            <Image
              src="/images/about.png"
              alt="About Dearo"
              width={600}
              height={420}
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>
        </div>

        {/* ===== KEY MILESTONES ===== */}
        <div className="row mb-5">
          <div className="col-12 mb-3">
            <h3 className="fw-bold text-black">Key Milestones</h3>
          </div>

          {milestones.map((item, i) => (
            <div key={i} className="col-md-6 mb-4">
              <div className="milestone-card h-100">
                <h5>{item.year}</h5>
                <h6 className="fw-semibold text-black">{item.title}</h6>
                <p className="mb-0 text-dark">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      

        {/* ===== AWARDS ===== */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h3 className="fw-bold text-black">Awards & Recognition</h3>
            <p className="text-muted">
              Recognition of excellence and leadership
            </p>
          </div>

          {awards.map((award, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="award-card h-100">
                <div className="award-icon">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="award-img"
                  />
                </div>
                <h6 className="fw-semibold text-black">{award.title}</h6>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
  /* ================= TYPOGRAPHY ================= */
  p {
    line-height: 1.7;
    color: #374151;
    font-size: 1rem;
  }

  h2, h3 {
    line-height: 1.3;
  }

  /* ================= MILESTONES ================= */
  .milestone-card {
    background: #ffffff;
    padding: 24px;
    border-radius: 14px;
    border-left: 4px solid #1e40af;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
    height: 100%;
  }

  .milestone-card h5 {
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    color: #1e40af;
    margin-bottom: 6px;
  }

 
  /* ================= AWARDS ================= */
  .award-card {
    background: #ffffff;
    border-radius: 16px;
    border: 1px solid #e5e7eb;
    padding: 28px 20px;
    text-align: center;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    height: 100%;
  }

  .award-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }

  .award-icon {
    width: 110px;
    height: 110px;
    margin: 0 auto 16px;
    position: relative;
  }

  .award-img {
    object-fit: contain;
    padding: 10px;
  }

  /* ================= RESPONSIVE BREAKPOINTS ================= */

  /* Tablets */
  @media (max-width: 992px) {
    .leader-image-wrapper {
      height: 550px;
    }
  }

  /* Mobile */
  @media (max-width: 576px) {
    section {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }

    h2 {
      font-size: 1.6rem;
    }

    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.95rem;
    }

    .leader-image-wrapper {
      height: 260px;
    }

    .milestone-card {
      padding: 20px;
    }

    .award-icon {
      width: 90px;
      height: 90px;
    }
  }
`}</style>
    </section>
  );
}