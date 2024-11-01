import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const links = {
        // <li><a href=""></a></li>
    }

  return (
    <>
      <div className="flex flex-col md:flex-row  mb-0 navbar bg-base-100 md:shadow-lg">
        <div className="flex-1">
          <Link
          to="/"
          className="w-48 btn btn-ghost text-xl">
            <img src="../../../src/assets/logo.png" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold text-xl">
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className="font-bold text-xl">
              <NavLink to='/donations'>Donation</NavLink>
            </li>
            <li className="font-bold text-xl">
              <NavLink to='/statistics'>Statistics</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
