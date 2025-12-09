import React from "react";



export const topArtists = [
  {
    id: 1,
    name: "Anika Rahman",
    specialization: "Digital Illustration",
    image:
      "https://i.ibb.co.com/qYD4NbSJ/Gemini-Generated-Image-t2wy75t2wy75t2wy.png",
  },
  {
    id: 2,
    name: "Rafael Karim",
    specialization: "Oil Painting & Portraits",
    image:
      "https://i.ibb.co.com/dsqQcBvL/Gemini-Generated-Image-1nvp4d1nvp4d1nvp.png",
  },
  {
    id: 3,
    name: "Sadia Hossain",
    specialization: "Modern Abstract Art",
    image:
      "https://i.ibb.co.com/zhH5814R/Gemini-Generated-Image-6cbnnw6cbnnw6cbn.png",
  },
  {
    id: 4,
    name: "Tareq Hasan",
    specialization: "Street & Graffiti Art",
    image:
      "https://i.ibb.co.com/cK0hbsjd/Gemini-Generated-Image-m1vu5zm1vu5zm1vu.png",
  },
];

const TopArtists = () => {
  return (
    <section className="top-artists py-10 ">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-secondary">Top Artists</span> Of The Week{" "}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {topArtists.map((topArtist) => (
          <div
            key={topArtist.id}
            className="expert-card text-center p-4 shadow rounded-lg bg-base-100 hover:shadow-2xl hover:cursor-pointer transform transition-transform duration-500 ease-in-out hover:scale-105 "
          >
            <img
              src={topArtist.image}
              alt={topArtist.name}
              className=" mx-auto  mb-4"
            />
            <h3 className="text-xl font-semibold">{topArtist.name}</h3>
            <p className="text-gray-600">{topArtist.specialization}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopArtists;
