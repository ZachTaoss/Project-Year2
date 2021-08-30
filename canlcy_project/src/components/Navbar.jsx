import React, { useState, useEffect } from "react";
import { Links } from "../util/consts";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const checkSize = () => {
    if (window.innerWidth >= 760) {
      setShowLinks(true);
    }
    if (window.innerWidth < 760) {
      setShowLinks(false);
    }
  };
  useEffect(() => {
    checkSize();
  });
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Log" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className={`links-container ${showLinks && "show"} `}>
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
