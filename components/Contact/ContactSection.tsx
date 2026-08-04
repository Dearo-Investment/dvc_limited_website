"use client";

import React, { useState } from "react";

interface FormState {
  name: string;
  role: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    role: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/investor-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", role: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {/* Left Info Column */}
          <div className="col-lg-5">
            <div className="h-100 p-4 p-lg-5 rounded-4 shadow-sm bg-white text-black">
              <h3 className="fw-semibold mb-3">Contact Information</h3>
              <p className="mb-4 opacity-75">
                Reach out for partnerships, investments, or general inquiries.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Email:</strong>
                  <br /> info@dearoventurecapital.lk
                </li>
                <li className="mb-3">
                  <strong>Phone:</strong>
                  <br /> Hotline: 011 478 2400
                  <br /> General: +94 74 390 8274
                  <br /> Treasury: +94 74 987 6543
                  <br /> Financing: +94 74 390 8274
                </li>
                <li>
                  <strong>Office:</strong>
                  <br /> 8th Floor, Ceylinco House, No 69, Janadhipathi Mawatha, Colombo
                  01
                </li>
              </ul>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="col-lg-7">
            <form
              className="h-100 shadow-sm p-4 p-lg-5 rounded-4 border"
              onSubmit={handleSubmit}
            >
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Role</label>
                  <input
                    name="role"
                    type="text"
                    className="form-control"
                    placeholder="Your Role / Position"
                    value={form.role}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    className="form-control"
                    placeholder="+94 7XXXXXXXX"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows={5}
                    placeholder="Write your message here..."
                    required
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 rounded-pill"
                    disabled={status === "loading"}
                  >
                    {status === "loading"
                      ? "Sending..."
                      : status === "success"
                      ? "Sent ✅"
                      : status === "error"
                      ? "Error ❌"
                      : "Submit Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .form-control:focus {
          box-shadow: 0 0 0 0.2rem rgba(48, 112, 207, 0.2);
          border-color: #c6a54a;
        }

        .btn-primary {
          background: linear-gradient(90deg, #0d6efd, #6610f2);
          border: none;
          transition: all 0.2s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(240, 237, 237, 0.4);
        }
      `}</style>
    </section>
  );
}