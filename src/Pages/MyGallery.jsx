import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";

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

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/delete/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount == 1) {
              const filterData = myArts.filter((service) => service._id != id);
              setMyArts(filterData);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

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
                <button
                  className="btn btn-error btn-xs mr-2"
                  onClick={() => handelDelete(art?._id)}
                >
                  Delete
                </button>
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
