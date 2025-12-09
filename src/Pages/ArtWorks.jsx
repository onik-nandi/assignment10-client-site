import React, { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";

const ArtWorks = () => {
  const [artWorks, setArtWorks] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/artworks?visibility=Public`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArtWorks(data);
      });
  }, []);

  const formatRelativeDate = (dateStr) => {
    if (!dateStr) return "";

    const then = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now - then) / 1000); 

    const units = [
      { limit: 60, name: "s" },
      { limit: 3600, name: "m", divisor: 60 },
      { limit: 86400, name: "h", divisor: 3600 },
      { limit: 604800, name: "d", divisor: 86400 },
    ];

    for (let unit of units) {
      if (diff < unit.limit) {
        const value = unit.divisor ? Math.floor(diff / unit.divisor) : diff;
        return `${value}${unit.name}`;
      }
    }

    return then.toLocaleDateString();
  };

  return (
    <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-secondary">All</span> ArtWorks{" "}
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {artWorks.map((art) => (
          <div
            key={art._id}
            className=" rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200"
          >
            <div className="h-100 w-full object-cover ">
              <img
                src={art.image}
                alt={art.title}
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.png";
                }}
              />
            </div>

            <div className="p-4">
              <h3
                id={`art-${art._id}-title`}
                className="text-lg font-medium truncate"
                title={art.title}
              >
                {art.title}
              </h3>

              <p
                className="text-sm text-zinc-600 mt-1 truncate"
                title={art.artistName}
              >
                {art.artistName}
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span className="inline-flex items-center text-sm text-zinc-700">
                  <span className="px-2 py-1 bg-zinc-100 rounded-full text-xs mr-2">
                    {art.category}
                  </span>
                </span>

                <div className="inline-flex items-center ">
                  <BiHeart className="w-4 h-4 mr-1" />
                  <span>{typeof art.likes === "number" ? art.likes : 0}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button
                  
                  className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-transparent bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-300"
                  aria-label={`View details for ${art.title}`}
                >
                  View Details
                </button>

                <time
                  className="text-xs"
                >
                  {formatRelativeDate(art.createdAt)} Ago
                </time>
              </div>
            </div>
          </div>
        ))}

        {artWorks.length === 0 && (
          <p className="text-sm text-zinc-600 col-span-full">
            No recent artworks to display.
          </p>
        )}
      </div>
    </section>
  );
};

export default ArtWorks;
