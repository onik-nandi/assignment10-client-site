import React, { useContext, useEffect, useState } from "react";
import Hero from "./Hero";
import TopArtists from "./TopArtists";
import Highlights from "./Highlights";
import axios from "axios";
import { BiHeart } from "react-icons/bi";
import { Link } from "react-router";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Pages/Loader";

const Home = () => {
  const [recentArtworks, setRecentArtWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://assignment10-backend-tau.vercel.app/recentArtworks?visibility=Public`
      )
      .then((res) => {
        setRecentArtWorks(res.data);
        setLoading(false);
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
  if (loading) {
    return <Loader></Loader>;
  }
  const handleLike = async (id) => {
    try {
      await axios.put(
        `https://assignment10-backend-tau.vercel.app/artWorks/${id}/like`
      );
      setRecentArtWorks((prev) =>
        prev.map((art) =>
          art._id === id ? { ...art, likes: (art.likes || 0) + 1 } : art
        )
      );
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <div>
      <Hero></Hero>
      <h2 className="text-3xl font-bold text-center mt-8">
        <span className="text-secondary">Recent</span> ArtWorks{" "}
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 mt-8 md:max-w-9/12 mx-auto ">
        {recentArtworks.map((art) => (
          <div
            key={art?._id}
            className=" rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200 md:max-w-[400px] md:min-h-[450px] mx-4 "
          >
            <div className="h-100 w-full object-cover ">
              <img
                src={art?.image}
                alt={art?.title}
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.png";
                }}
              />
            </div>

            <div className="p-4">
              <h3
                id={`art-${art?._id}-title`}
                className="text-lg font-medium truncate"
                title={art?.title}
              >
                <Fade delay={1e1} cascade damping={1e-1}>
                  {art?.title}
                </Fade>
              </h3>

              <p
                className="text-sm text-zinc-600 mt-1 truncate"
                title={art?.artistName}
              >
                {art?.artistName}
              </p>

              <div className="mt-3 flex items-center justify-between">
                <span className="inline-flex items-center text-sm text-zinc-700">
                  <span className="px-2 py-1 bg-zinc-100 rounded-full text-xs mr-2">
                    {art?.category}
                  </span>
                </span>

                <div className="inline-flex items-center ">
                  <button
                    onClick={() => handleLike(art._id)}
                    className="inline-flex items-center hover:text-red-500"
                  >
                    <BiHeart className="w-8 h-8 mr-1 cursor-pointer" />
                    <span>{art.likes || 0}</span>
                  </button>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between md:h-[60px]">
                <p>
                  {art?.description?.length > 80
                    ? art.description.slice(0, 80) + "..."
                    : art?.description}
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between ">
                <p>
                  <span className="font-extralight ">Uploaded By:</span>{" "}
                  {art?.userName}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link
                  className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-transparent bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-300 hover:cursor-pointer "
                  aria-label={`View details for ${art?.title}`}
                  to={`/artWorks/${art?._id}`}
                >
                  View Details
                </Link>

                <time className="text-xs">
                  {formatRelativeDate(art?.createdAt)} Ago
                </time>
              </div>
            </div>
          </div>
        ))}

        {recentArtworks.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              alt="No Data"
              className="w-40 opacity-80"
            />
            <h2 className="text-xl font-semibold mt-6">
              <Fade delay={1} cascade damping={1e-1}>
                No Data Found
              </Fade>{" "}
            </h2>
            <p className=" mt-2 max-w-sm">
              <Fade delay={1e3} cascade damping={1e-1}>
                Add something to make it useful.
              </Fade>
            </p>
          </div>
        )}
      </div>

      <TopArtists></TopArtists>
      <Highlights></Highlights>
    </div>
  );
};

export default Home;
