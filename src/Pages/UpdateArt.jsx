import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const UpdateArt = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [art, setArt] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://assignment10-backend-tau.vercel.app/artWorks/${id}`)
      .then((res) => {
        setArt(res.data);
      });
  }, [id]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const artistName = form.artistName.value;
    const category = form.category.value;
    const tools = form.tools.value;
    const price = parseInt(form.price.value);
    const description = form.description.value;
    const dimensions = form.dimensions.value;
    const image = form.image.value;
    const Visibility = form.Visibility.value;
    const userName = form.userName.value;
    const email = form.email.value;

    const formData = {
      title,
      artistName,
      category,
      tools,
      price,
      description,
      dimensions,
      image,
      Visibility,
      userName,
      email,
    };
    console.log(formData);
    axios
      .put(`https://assignment10-backend-tau.vercel.app/update/${id}`, formData)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: "Updated Successfully",
          icon: "success",
          draggable: true,
        });
        navigate("/my-gallery");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form
        className="max-w-lg mx-auto shadow p-6 rounded space-y-4"
        onSubmit={handleUpdate}
      >
        <h2 className="text-xl font-semibold">Add Artwork</h2>

        {/* Title */}
        <div>
          <label className="block text-sm">Title</label>
          <input
            defaultValue={art?.title}
            type="text"
            className="w-full border rounded px-3 py-2 focus:border-blue-500 outline-none"
            placeholder="Enter Title"
            name="title"
          />
        </div>
        {/* Name */}
        <div>
          <label className="block text-sm">Artist Name</label>
          <input
            defaultValue={art?.artistName}
            type="text"
            className="w-full border rounded px-3 py-2 focus:border-blue-500 outline-none"
            placeholder="Enter Artist Name"
            name="artistName"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm">Category</label>
          <select
            defaultValue={art?.category}
            className="w-full border rounded px-3 py-2 outline-none bg-base-100 text-base-content "
            name="category"
          >
            <option>Paintings</option>
            <option>Illustration</option>
            <option>Digital Art</option>
            <option>Conceptual Art</option>
          </select>
        </div>

        {/* Tools */}
        <div>
          <label className="block text-sm">Tools</label>
          <input
            defaultValue={art?.tools}
            type="text"
            className="w-full border rounded px-3 py-2 focus:border-blue-500 outline-none"
            placeholder="Enter Tools Name"
            name="tools"
          />
        </div>
        {/* Price */}
        <div>
          <label className="block text-sm">Price</label>
          <input
            defaultValue={art?.price}
            type="number"
            min="0"
            className="w-full border rounded px-3 py-2 outline-none"
            name="price"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm">Description</label>
          <textarea
            defaultValue={art?.description}
            rows="3"
            className="w-full border rounded px-3 py-2 focus:border-blue-500 outline-none"
            placeholder="Short description"
            name="description"
          ></textarea>
        </div>
        {/* Description */}
        <div>
          <label className="block text-sm">Dimensions</label>
          <input
            defaultValue={art?.dimensions}
            rows="3"
            className="w-full border rounded px-3 py-2 focus:border-blue-500 outline-none"
            placeholder="Enter Size/Dimensions"
            name="dimensions"
          ></input>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm">Image URL</label>
          <input
            defaultValue={art?.image}
            type="url"
            className="w-full border rounded px-3 py-2 focus:border-blue-500 outline-none"
            placeholder="https://example.com/image.jpg"
            name="image"
          />
        </div>

        {/* Visibility */}
        <div>
          <label className="block text-sm">Visibility</label>
          <select
            defaultValue={art?.Visibility}
            className="w-full border rounded px-3 py-2 outline-none bg-base-100 text-base-content "
            name="Visibility"
          >
            <option>Public</option>
            <option>Private</option>
          </select>
        </div>

        {/* Email */}

        <div>
          <label className="block text-sm">User Name</label>
          <input
            type="text"
            readOnly
            className="w-full border rounded px-3 py-2  cursor-not-allowed"
            name="userName"
            value={user?.displayName}
          />
        </div>

        <div>
          <label className="block text-sm">User Email</label>
          <input
            type="email"
            readOnly
            className="w-full border rounded px-3 py-2  cursor-not-allowed"
            name="email"
            value={user?.email}
          />
        </div>

        <button className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 hover:cursor-pointer">
          Update Art
        </button>
      </form>
    </div>
  );
};

export default UpdateArt;
