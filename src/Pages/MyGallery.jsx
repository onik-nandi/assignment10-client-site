import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";

const MyGallery = () => {
  const [myArts, setMyArts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:3000/my-artworks?email=${user?.email}`).then(
      (res) =>
        res
          .json()
          .then((data) => setMyArts(data))
          .catch((err) => console.log(err))
    );
  }, [user?.email]);

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
          {myArts.map((art, index) => (
            <tr key={art?._id}>
              <td className="hidden md:table-cell">{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={art.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{art.title}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="">{art.artistName}</div>
              </td>
              <td className="hidden md:table-cell">{art?.category}</td>
              <td className="gap-2">
                <button className="btn btn-error btn-xs mr-2">Delete</button>
                <Link to={`/update-art/${art?._id}`}>
                  <button className="btn btn-primary btn-xs ml-2 mt-2 md:mt-0">
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyGallery;
