import React, { use, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import SignInWithGoogle from "../Components/SignInWithGoogle";
import { FaRegEyeSlash } from "react-icons/fa";
import { RxEyeOpen } from "react-icons/rx";
import { signOut } from "firebase/auth";

const Register = () => {
  const { createUser, updateUser, setUser, auth } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Need Atleast 6 Charecters With UpperCase & LowerCase Letter & Special "
      );
      return;
    }
    // console.log({name,photo,email,password})
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user)
        updateUser({ displayName: name, photoURL: photo })
          .then(() => console.log(user))
          .then((error) => {
            console.log(error.message);
          });
        toast.success("Successfully Registered", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        form.reset();
        signOut(auth);
        navigate("/auth/login");
      })
      .catch((err) => {
        console.log(err.message);
        if (err.code === "auth/email-already-in-use") {
          toast.error("This email is already registered.");
          return;
        } else if (err.code === "auth/invalid-email") {
          toast.error("Please enter a valid email address.");
          return;
        } else {
          toast.error("Something went wrong. Try again.");
        }
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl text-center py-5">
          Register Your Account
        </h2>

        <form onSubmit={handelRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label font-semibold text-lg">Name</label>
            <input
              type="text"
              className="input "
              placeholder="Name"
              name="name"
              required
              className={
                "w-full text-[20px] border-secondary border-2 p-1 focus:outline-none"
              }
            />
            <label className="label font-semibold text-lg">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Photo Url"
              name="photo"
              required
              className={
                "w-full text-[20px] border-secondary border-2 p-1 focus:outline-none"
              }
            />
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
                  "w-full text-[20px] border-secondary border-2 p-1 focus:outline-none"
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

            <button type="submit" className="btn btn-secondary mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have an Account ?{" "}
              <Link to="/auth/login" className="text-secondary ">
                Log In
              </Link>{" "}
            </p>
          </fieldset>
          <div className="flex gap-2 justify-center items-center">
            <div className="w-10 h-[1px] bg-accent"></div>
            <div className="text-lg font-bold text-accent">Or</div>
            <div className="w-10 h-[1px] bg-accent"></div>
          </div>
          {/* Google */}
        </form>
        <SignInWithGoogle></SignInWithGoogle>
      </div>
    </div>
  );
};

export default Register;
