import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const MyFavourites = () => {
  const [myFavs, setMyFavs] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/favourites`)
      .then((res) => {
        setMyFavs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="overflow-x-auto w-11/12 mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="hidden md:block ">SL</th>
            <th>Title</th>
            <th>Artist</th>
            <th className="hidden md:block ">Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myFavs.map((myFav, index) => (
            <tr key={myFav?._id}>
              <td className="hidden md:table-cell">{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={myFav.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{myFav.title}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="">{myFav.artistName}</div>
              </td>
              <td className="hidden md:table-cell">{myFav?.category}</td>
              <td className="gap-2">
                <button
                  className="btn btn-error btn-xs mr-2"
                //   onClick={() => handelDelete(art?._id)}
                >
                    Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyFavourites;
