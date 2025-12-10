import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";
import Swal from "sweetalert2";

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

  const handelUnfavourite = (id) => {
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
          .delete(`http://localhost:3000/delete-favourite/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount == 1) {
              const filterData = myFavs.filter((myFav) => myFav._id != id);
              setMyFavs(filterData);
              Swal.fire({
                title: "Deleted!",
                text: " Art Unfavourite Successfull .",
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
    <div className="overflow-x-auto w-11/12 mx-auto md:min-h-[65vh]">
      {myFavs.length != 0 ? (
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
                    onClick={() => handelUnfavourite(myFav?._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
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
              Your page is feeling a little empty. Add something to make it
              useful.
            </Fade>
          </p>
        </div>
      )}
    </div>
  );
};

export default MyFavourites;
