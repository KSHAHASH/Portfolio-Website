import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const Navbar = () => {
  return (
    <div className="nav_container">
      <ul className="flex-items">
        <li className="navigation">
          <Link className="links" to="/contact">
            CONTACT
          </Link>
        </li>
        <li className="navigation">
          <Link className="links" to="/experience">
            EXPERIENCE
          </Link>
        </li>
        <li className="navigation">
          <Link className="links" to="/projects">
            PROJECTS
          </Link>
        </li>
        <li className="navigation">
          <Link className="links" to="/home">
            HOME
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
