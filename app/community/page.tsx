"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const newsArticles = [
  {
    title: "Dearo Investment Pvt Ltd sweeps multiple awards at Iconic Awards 2024",
    description:
      "Dearo Investment Pvt. Ltd. excelled at the Iconic Awards 2024, winning four notable awards including Best Investment Product Provider and Best Customer Service Excellence. The award ceremony took place at the BMICH in Colombo. The company specializes in comprehensive financial services and innovative digital solutions, with a focus on SME financing and business support. With over 30 branches, they aim to enhance their digital footprint. Under the leadership of CEO Prasanna Sanjeewa, Dearo has diversified into several sectors, fostering strong customer relationships and emphasizing growth and innovation.",
    images: ["/images/news/newsg.jpg"],
  },
  {
    title: "Celebrating Children's Day: Dearo Investment Ltd Supports Ampara Uhana Junior School",
    description:
      "As part of its Corporate Social Responsibility initiatives, Dearo Investment Ltd proudly supported Children’s Day by providing lunch to the students of Ampara Uhana Primary School. This initiative reflects Dearo’s commitment to nurturing young minds, supporting local communities, and contributing to the well-being of future generations.  ",
    images: [
      "/images/news/school00.jpg",
      "/images/news/school1.jpg",
      "/images/news/school2.jpg", 
      "/images/news/school4.jpg",
    ],
  },
  {
    title: "Dearo Investment shines at People’s Excellency Awards",
    description:
      "Dearo Investment Pvt. Ltd. won four awards, including Excellence in Workplace Development and Best Customer Service Provider, at the People’s Excellency Awards 2024 in Colombo. Known for its financial services, such as SME financing and entrepreneur loans, the company operates over 25 branches nationwide. Under CEO Prasanna Sanjeewa, Dearo plans to expand its offerings, focusing on the MSME sector.",
    images: ["/images/news/news1.jpg"],
  },
   {
    title: "Dearo Supports Ampara Village Temple Annual Procession",
    description:
      "Dearo Investment Limited proudly supported the annual procession of the Ampara Village Temple, demonstrating its commitment to preserving local traditions and strengthening community bonds. Through this initiative, Dearo actively promotes cultural heritage and fosters meaningful engagement within the communities it serves.  ",
    images: [
      "/images/news/temple.jpg",
      "/images/news/temple1.jpg",
    ],
  },
];

export default function NewsPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [slideIndexes, setSlideIndexes] = useState<number[]>(
    newsArticles.map(() => 0)
  );

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndexes((prev) =>
        prev.map((val, idx) =>
          newsArticles[idx].images.length > 1
            ? (val + 1) % newsArticles[idx].images.length
            : val
        )
      );
    }, 4000); // slides every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-light">
      {/* Hero Section */}
      <section className="hero text-center py-5 bg-white shadow-sm">
        <h1 className="display-4 fw-bold mb-2 text-black">News & Updates</h1>
        <p className="lead text-muted">
          Stay informed with the latest announcements, projects, and initiatives from Dearo.
        </p>
      </section>

      {/* News Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {newsArticles.map((news, index) => {
              const isExpanded = expandedIndex === index;
              const previewLength = 180;
              const currentSlide = slideIndexes[index];

              return (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm news-card">
                    {/* Image Carousel */}
                    <div className="position-relative" style={{ height: "250px" }}>
                      {news.images.map((img, i) => (
                        <div
                          key={i}
                          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
                            i === currentSlide ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <Image
                            src={img}
                            alt={news.title}
                            fill
                            style={{
                              objectFit: "cover",
                              borderTopLeftRadius: "0.5rem",
                              borderTopRightRadius: "0.5rem",
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Card Body */}
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-semibold">{news.title}</h5>
                      <p className="card-text flex-grow-1 text-muted">
                        {isExpanded
                          ? news.description
                          : news.description.length > previewLength
                          ? news.description.slice(0, previewLength) + "..."
                          : news.description}
                      </p>

                      {news.description.length > previewLength && (
                        <button
                          className="btn btn-link p-0 mt-2 fw-semibold text-primary align-self-start"
                          onClick={() => setExpandedIndex(isExpanded ? null : index)}
                        >
                          {isExpanded ? "Read Less ↑" : "Read More →"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .news-card {
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          border-radius: 0.5rem;
        }

        .news-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .hero {
          background: linear-gradient(120deg, #f8f9fa, #ffffff);
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          .hero p {
            font-size: 1rem;
          }
        }
      `}</style>
    </main>
  );
}
