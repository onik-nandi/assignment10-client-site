import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
