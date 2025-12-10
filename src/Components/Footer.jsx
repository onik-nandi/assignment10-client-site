import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <Link className="text-xl font-bold " to="/">
            {" "}
            <span className="text-secondary">Art</span>Nest
          </Link>
          <p>
            A modern art showcase that brings together painters,<br /> illustrators
            and digital creators. Browse collections, learn <br />about artists, and
            experience visual stories crafted with passion.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <Link to={`https://www.google.com`}>About</Link>
          <Link to={`https://www.google.com`}>Contact</Link>
          <Link to={`https://www.google.com`}>Privacy Policy</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <div className="grid grid-flow-col gap-4">
            <Link to={`https://www.instagram.com/`}>
              <AiFillInstagram size={24} />
            </Link>
            <Link to={`https://x.com/`}>
              <FaXTwitter size={24} />
            </Link>
            <Link to={`https://www.facebook.com/`}>
              <FaFacebook size={24} />
            </Link>
          </div>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - ArtNest. All rights
            reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
