import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default HomeLayout;
