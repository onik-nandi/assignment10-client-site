import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomelAyout";
import Error from "../Pages/Error";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ArtWorks from "../Pages/ArtWorks";
import AddArtWork from "../Pages/AddArtWork";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/art-works",
        element: <ArtWorks></ArtWorks>,
      },
      {
        path: "/add-art-works",
        element:<AddArtWork></AddArtWork>,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);
export default router;
