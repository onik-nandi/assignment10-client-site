import React from "react";

const highlights = [
  {
    id: 1,
    label: "CUSTOMER CREATIONS",
    image:
      "https://i.ibb.co.com/S4WVb0J1/Gemini-Generated-Image-j4urf9j4urf9j4ur.png",
  },
  {
    id: 2,
    label: "ART CHALLENGES",
    image:
      "https://i.ibb.co.com/7dRSmCT4/Gemini-Generated-Image-twr53xtwr53xtwr5.png",
  },
  {
    id: 3,
    label: "Q & A",
    image:
      "https://i.ibb.co.com/d0j2FjCS/Gemini-Generated-Image-dpo5pdpo5pdpo5pd.png",
  },
  {
    id: 4,
    label: "STUDIO SETUP",
    image:
      "https://i.ibb.co.com/fz2fLQ1y/Gemini-Generated-Image-9w99gz9w99gz9w99.png",
  },
];

const Highlights = () => {
  return (
    <section className="top-artists py-10 ">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-secondary">Community</span> Highlights{" "}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {highlights.map((highlight) => (
          <div
            key={highlight.id}
            className="expert-card text-center p-4 shadow rounded-lg bg-base-100 hover:shadow-2xl hover:cursor-pointer transform transition-transform duration-500 ease-in-out hover:scale-105 "
          >
            <img
              src={highlight.image}
              alt={highlight.label}
              className=" mx-auto  mb-4"
            />
            <h3 className="text-xl font-semibold">{highlight.label}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
