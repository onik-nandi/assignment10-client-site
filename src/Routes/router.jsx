import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomelAyout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
]);
export default router;
