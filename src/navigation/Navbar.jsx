import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className="h-10 flex flex-row justify-evenly items-center align-center pr-9">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}
