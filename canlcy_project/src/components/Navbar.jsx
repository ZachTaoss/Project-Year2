import React, { useState, useEffect } from "react";
import { Links } from "../util/consts";
import { Link } from "react-router-dom";
import logo from "../util/BetterClogo.png"; // This is where you can add your own logo on the nav Just replace the file path to yours
//I have it at a fixed height and width to change those heights and widths is found in the ../style/components/_navbar.scss and scroll all the way down
//Where it says logo and then width and hieght and change it how you please
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Log" className="logo" />
        </div>
        <div>
          <ul className="links">
            {Links.filter((link) => link.text !== "Error").map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
