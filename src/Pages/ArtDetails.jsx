import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const ArtDetails = () => {
  const [artwork, setArtWork] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://assignment10-backend-tau.vercel.app/artWorks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArtWork(data);
        // console.log(data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [id]);

  useEffect(() => {
    if (user?.email && artwork?._id) {
      axios
        .get(
          `https://assignment10-backend-tau.vercel.app/favourites/check?email=${user.email}&artId=${artwork._id}`
        )
        .then((res) => {
          setIsFavourite(res.data.isFavourite);
        });
    }
  }, [user?.email, artwork?._id]);
  const handelFavourite = () => {
    const { _id, ...artWorkWithoutId } = artwork;
    const favArtWorks = {
      ...artWorkWithoutId,
      userEmail: user?.email,
      artId: artwork._id,
    };
    // console.log(favArtWorks)
    axios
      .post(
        `https://assignment10-backend-tau.vercel.app/favourites`,
        favArtWorks
      )
      .then((res) => {
        const { acknowledged } = res.data;

        if (acknowledged) {
          Swal.fire({
            title: "Added To Favourite List",
            icon: "success",
            draggable: true,
          });
          setIsFavourite(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  rounded-lg p-6">
        {/* Left Image Section */}
        <figure className="border rounded-lg">
          <img
            src={artwork?.image}
            alt={artwork?.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </figure>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{artwork?.title}</h1>
          <p className="text-lg ">by {artwork?.artistName}</p>
          <div className="flex flex-wrap gap-2">
            <span className="badge badge-primary">{artwork?.category}</span>
            <span className="badge badge-secondary">{artwork?.tools}</span>
            <span className="badge badge-ghost">
              Uploaded by {artwork?.userName}
            </span>
          </div>

          <p className="">{artwork?.description}</p>

          <div className="space-y-1 text-sm">
            <p>
              <span className="font-semibold">Dimensions:</span>{" "}
              {artwork?.dimensions || "Not provided"}
            </p>
            <p>
              <span className="font-semibold">Price:</span>{" "}
              {artwork?.price ? `$${artwork?.price}` : "Not for sale"}
            </p>
            <p>
              <span className="font-semibold">Uploaded:</span>{" "}
              {new Date(artwork?.createdAt).toLocaleDateString()}
            </p>
          </div>

          <button
            onClick={handelFavourite}
            disabled={isFavourite}
            className={
              isFavourite ? " btn btn-primary mt-3" : " btn btn-primary mt-3"
            }
          >
            {isFavourite ? "Already in Favourites" : "Add to Favourite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtDetails;
