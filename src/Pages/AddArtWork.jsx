import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AddArtWork = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = () => {};
  return (
    <div>
      <form
        className="max-w-lg mx-auto shadow p-6 rounded space-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold">Add Artwork</h2>

        {/* Name */}
        <div>
          <label className="block text-sm">Title</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:border-blue-500 outline-none"
            placeholder="Enter name"
            name="name"
            required
          />
        </div>
        {/* Name */}
        <div>
          <label className="block text-sm">Artist Name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:border-blue-500 outline-none"
            placeholder="Enter Artist Name"
            name="artistName"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm">Category</label>
          <select
            className="w-full border rounded px-3 py-2 outline-none bg-base-100 text-base-content "
            name="category"
            required
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
            type="text"
            className="w-full border rounded px-3 py-2 focus:border-blue-500 outline-none"
            placeholder="Enter Tools Name"
            name="tools"
            required
          />
        </div>
        {/* Price */}
        <div>
          <label className="block text-sm">Price</label>
          <input
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
            rows="3"
            className="w-full border rounded px-3 py-2 focus:border-blue-500 outline-none"
            placeholder="Short description"
            name="description"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm">Image URL</label>
          <input
            type="url"
            className="w-full border rounded px-3 py-2 focus:border-blue-500 outline-none"
            placeholder="https://example.com/image.jpg"
            name="image"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm">Visibility</label>
          <select
            className="w-full border rounded px-3 py-2 outline-none bg-base-100 text-base-content "
            name="category"
            required
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddArtWork;
