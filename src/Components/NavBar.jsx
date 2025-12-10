import React, {  useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyLink from "./MyLink";
import { NavLink, Link } from "react-router";
import { toast } from "react-toastify";


const NavBar = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getInitialTheme = () => {
    
    const storedTheme = localStorage.getItem("user-theme-preference");
    return storedTheme === "dark";
  };
  const [isChecked, setIsChecked] = useState(getInitialTheme());

  const handelThemeChange = () => {
    setIsChecked((prev) => !prev);
  };
  useEffect(() => {
    const theme = isChecked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("user-theme-preference", theme);
  }, [isChecked]);

  const handelLogout = () => {
    logOut()
      .then(() => {
        toast.success("You Logged Out Successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setUser(null);
        setIsMenuOpen(false);
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-100 mt-3 w-52 p-2 shadow"
            >
              <MyLink to="/">Home</MyLink>
              <MyLink to="/art-works">Explore Artworks</MyLink>

              {user && (
                <>
                  <MyLink to="/add-art-works">Add Artwork</MyLink>
                  <MyLink to="/my-gallery"> My Gallery</MyLink>
                  <MyLink to="/my-favourites">My Favorites</MyLink>
                </>
              )}
            </ul>
          </div>
          <NavLink className="text-xl font-bold " to="/">
            {" "}
            <span className="text-secondary">Art</span>Nest
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2">
            <MyLink to="/">Home</MyLink>
            <MyLink to="/art-works">Explore Artworks</MyLink>
            {user && (
              <>
                <MyLink to="/add-art-works">Add Artwork</MyLink>
                <MyLink to="/my-gallery"> My Gallery</MyLink>
                <MyLink to="/my-favourites">My Favorites</MyLink>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              onChange={handelThemeChange}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>

          {user ? (
            <div className="dropdown dropdown-end mx-4">
              <div
                tabIndex={0}
                role="button"
                className="w-[40px] h-[40px] rounded-full"
              >
                <img
                  src={user.photoURL}
                  className="w-full h-full rounded-full object-cover cursor-pointer"
                  alt="user"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow"
              >
                <li className="text-center py-2 font-semibold">
                  {user.displayName}
                </li>
                <li>
                  <button
                    onClick={handelLogout}
                    className="text-red-500 font-medium  w-full pl-17"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex md:flex-row flex-col gap-3">
              <Link
                to="/auth/login"
                className="btn text-secondary border-secondary px-10 ml-2"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn text-white bg-secondary px-10"
              >
                SignUp
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
