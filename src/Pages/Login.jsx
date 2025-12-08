import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import SignInWithGoogle from "../Components/SignInWithGoogle";
import { RxEyeOpen } from "react-icons/rx";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signIn, setUser, signInGoogle } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user)
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
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
      .catch((err) => {
        // console.log(err.message);
        toast.error(" Wrong Credentials!", {
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
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl text-center py-5">
          Log In Your Account
        </h2>

        <form onSubmit={handelLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label font-semibold text-lg">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
              className={
                "w-full text-[20px] border-secondary border-2 p-1 focus:outline-none"
              }
            />
            <label className="label font-semibold text-lg">Password</label>
            <div className="w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
                name="password"
                required
                className={
                  " w-full text-[20px] border-secondary border-2 p-1 focus:outline-none"
                }
              />
              <Link
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer absolute top-3.5 right-4 z-50"
              >
                {showPassword ? (
                  <RxEyeOpen size={19} />
                ) : (
                  <FaRegEyeSlash size={19} />
                )}
              </Link>
            </div>
            {/* <div>
              <Link
                to="/auth/forget-password"
                className="link link-hover text-[16px] font-bold"
              >
                Forgot password?
              </Link>
            </div> */}
            <button type="submit" className="btn btn-secondary mt-4">
              Login
            </button>
            <p className="font-semibold text-center pt-5">
              Don't Have an Account ?{" "}
              <Link to="/auth/register" className="text-secondary ">
                Register
              </Link>{" "}
            </p>
          </fieldset>
          <div className="flex gap-2 justify-center items-center">
            <div className="w-10 h-[1px] bg-accent"></div>
            <div className="text-lg font-bold text-accent">Or</div>
            <div className="w-10 h-[1px] bg-accent"></div>
          </div>
        </form>
        <div className="w-full">
          <SignInWithGoogle></SignInWithGoogle>
        </div>
      </div>
    </div>
  );
};

export default Login;
