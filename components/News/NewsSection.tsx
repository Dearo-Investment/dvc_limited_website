"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomeNewsSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">

            {/* TOP BANNER IMAGE */}
            <div className="mb-4">
              <Image
                src="/images/news/cover.jpg"
                alt="Dearo Investment News"
                width={1200}
                height={500}
                className="img-fluid rounded shadow-sm"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* DESCRIPTION */}
            <p className="lead text-muted mb-4">
              Dearo Investment Pvt Ltd continues to achieve remarkable milestones,
              earning national recognition through prestigious awards, strategic
              partnerships, and industry excellence. Stay updated with the latest
              announcements, achievements, and corporate developments.
            </p>

            {/* BUTTON */}
            <Link
              href="/community"
              className="btn btn-primary btn-lg px-4"
            >
              View All News →
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
