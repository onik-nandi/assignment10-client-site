import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomelAyout";
import Error from "../Pages/Error";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ArtWorks from "../Pages/ArtWorks";
import AddArtWork from "../Pages/AddArtWork";
import PrivateRoute from "../Provider/PrivateRoute";
import MyGallery from "../Pages/MyGallery";
import MyFavourites from "../Pages/MyFavourites";
import Home from "../Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: "/art-works",
        element: <ArtWorks></ArtWorks>,
      },
      {
        path: "/add-art-works",
        element: (
          <PrivateRoute>
            <AddArtWork></AddArtWork>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-gallery",
        element: (
          <PrivateRoute>
            <MyGallery></MyGallery>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-favourites",
        element: (
          <PrivateRoute>
            <MyFavourites></MyFavourites>
          </PrivateRoute>
        ),
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
