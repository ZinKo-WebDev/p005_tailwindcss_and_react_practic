import React from "react";
import { Link, Outlet } from "react-router-dom";
import favicon from "../img/shuttle.png";
const Layout = () => {
  return (
    <div className="navDiv">
      <div className="navArea flex justify-around bg-teal-500 items-center py-3">
        <div className="flex justify-start items-center">
          <Link className=" hover:opacity-90" to="/">
            <img className="logo " src={favicon} alt="favicon" />
          </Link>

          <span className="logoInfo font-bold text-2xl p-2">Acme Rocket</span>
        </div>
        <div
          className="text-3xl sm:hidden focus:outline-none cursor-pointer"
          id="mobile-open-button"
        >
          &#9776;
        </div>
        <nav className="hidden sm:block">
          <Link className="px-3 py-2 hover:opacity-90 text-xl" to="/rockets">
            Our Rockets
          </Link>
          <Link
            className="px-3 py-2 hover:opacity-90 text-xl"
            to="/testimonial"
          >
            Testimonial
          </Link>
          <Link className="px-3 py-2 hover:opacity-90 text-xl" to="/contant">
            Contant
          </Link>
        </nav>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
