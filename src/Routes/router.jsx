import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomelAyout";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);
export default router;
