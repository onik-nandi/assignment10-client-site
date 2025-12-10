import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import Loader from "./Loader";
const MyGallery = () => {
  const [myArts, setMyArts] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://assignment10-backend-tau.vercel.app/my-artworks?email=${user?.email}`
    ).then((res) =>
      res
        .json()
        .then((data) => {
          setMyArts(data);
          setLoading(false);
        })
        // .catch((err) => console.log(err))
    );
  }, [user?.email]);
if (loading) {
  return <Loader></Loader>;
}
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
          .delete(`https://assignment10-backend-tau.vercel.app/delete/${id}`)
          .then((res) => {
            // console.log(res.data);
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
            // console.log(err);
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto w-11/12 mx-auto md:min-h-[65vh]">
      {myArts.length != 0 ? (
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
                <td className="hidden md:table-cell">{art?.Visibility}</td>
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
              Add something to make it useful.
            </Fade>
          </p>
        </div>
      )}
    </div>
  );
};

export default MyGallery;
