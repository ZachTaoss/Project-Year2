import React, { useState, useEffect } from "react";
import { Links } from "../util/consts";
import { Link } from "react-router-dom";
import logo from "../util/CLogo.jpg";
const Navbar = () => {

  return (
    <nav  className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Log" className="logo"/>
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
