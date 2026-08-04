"use client";

import Image from "next/image";

export default function InvestorPage() {
  return (
    <main className="bg-light text-dark">

      {/* Hero Banner Section */}
      <section
        className="position-relative text-white text-center"
        style={{ height: "70vh" }}
      >
        <Image
          src="/images/inin.png"
          alt="Dearo Investment Investors"
          fill
          priority
          className="object-fit-cover mt-0"
        />

       

        
      </section>

      <br /><br />

     
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Financial Reports</h2>
          <p className="text-center mb-5">
            At Dearo Investment Limited, we believe in complete financial transparency.
            Our reports provide a clear view of performance, risk, and strategy.
          </p>

          <div className="row g-4">
            {[
              {
                title: "Annual & Quarterly Statements",
                text: "Balance sheets, income statements, and cash flow reports under international standards.",
              },
              {
                title: "Performance Highlights",
                text: "Key metrics, growth trends, and profitability indicators.",
              },
              {
                title: "Risk & Compliance Overview",
                text: "Credit, market, and operational risk with mitigation strategies.",
              },
              {
                title: "Investment & Portfolio Reports",
                text: "Portfolio performance, sector exposure, and ESG impact.",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3 d-flex">
                <div
                  className="glass-card fade-up d-flex"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="card-body d-flex flex-column justify-content-center text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="my-5" />

      {/* Investor Invitation */}
      <section className="py-5 investor-bg text-white">
        <div className="container">
          <h2 className="text-center mb-4">Investor Invitation</h2>
          <p className="text-center mb-5">
            Partner with a high-growth, impact-driven financial institution operating
            in Sri Lanka and emerging global markets.
          </p>

          <div className="row g-4">
            {[
              {
                title: "Attractive & Predictable Returns",
                text: "Structured investment models with transparent reporting.",
              },
              {
                title: "Robust Risk Management",
                text: "Collateral-backed lending and advanced credit controls.",
              },
              {
                title: "Scalable Growth Strategy",
                text: "Expansion across Sri Lanka and international markets.",
              },
              {
                title: "Impact-Driven Investing",
                text: "Strong ESG focus supporting SMEs and communities.",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3 d-flex">
                <div
                  className="glass-card dark fade-up d-flex"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="card-body d-flex flex-column justify-content-center text-center">
                    <h5 className="card-title text-white">{item.title}</h5>
                    <p className="card-text text-light">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center">
        <div className="container">
          <h3 className="mb-4">Ready to Partner With Dearo?</h3>
          <p className="mb-4">
            Join us in driving sustainable growth and impactful returns.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Contact Us
          </a>
        </div>
      </section>

    </main>
  );
}