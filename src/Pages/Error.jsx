import React from "react";
import { Link, Navigate } from "react-router";

const Error = () => {
  return (
    <div>
      <div className=" min-h-screen pt-20">
        <div className="w-fit mx-auto">
          <img
            className="mb-20 pt-10"
            src="https://i.ibb.co.com/dwKs9L0G/error-404.png"
            alt=""
          />
          <h1 className="text-center font-semibold text-4xl mb-5">
            Oops, page not found!
          </h1>
          <p className="text-center mb-5 text-md text-gray-400">
            The page you are looking for is not available.
          </p>

          <div className="flex">
            <div className="w-fit mx-auto">
              <Link
                to="/"
                className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white w-[150px]"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
