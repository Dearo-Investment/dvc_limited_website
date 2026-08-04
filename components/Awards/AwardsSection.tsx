"use client";

const awards = [
  { year: "2023", title: "Best Financial Growth", description: "Recognized for outstanding contributions to Sri Lanka's financial sector." },
  { year: "2022", title: "Top SME Support", description: "Awarded for supporting small & medium enterprises across the nation." },
];

export default function AwardsSection() {
  return (
    <section id="awards" className="py-20 container mx-auto px-4">
      <h2 className="fw-bold mb-3 text-dark">Our Awards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {awards.map((award) => (
          <div key={award.title} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">{award.title} ({award.year})</h3>
            <p>{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
