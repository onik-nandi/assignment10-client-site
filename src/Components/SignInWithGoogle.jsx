import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation } from "react-router";
import { toast } from "react-toastify";

const SignInWithGoogle = () => {
  const { setUser, signInGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handelGoogleSignIn = (e) => {
    e.preventDefault();
    signInGoogle()
      .then((res) => {
        const user = res.user;
        console.log(user)
        // setUser(user);
        const from = location.state?.from || "/";
        navigate(from, { replace: true });
        toast.success(" Logged In Successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error("User Already Exist!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="flex justify-center">
      <Link
        onClick={handelGoogleSignIn}
        className="btn bg-white text-black border-[#e5e5e5] w-[95%] mb-5"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </Link>
    </div>
  );
};

export default SignInWithGoogle;
