import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className="h-12 text-white py-6 flex flex-row justify-end items-center align-center pr-9 text-xl ">
        <Link to="/">
          <li className="pr-12  hover:bg-mainBg hover:bg-whiteGray hover:shadow-buttonShadow transform hover:scale-110">
            Home
          </li>
        </Link>
        <Link to="/projects">
          <li className="pr-12  hover:bg-mainBg hover:bg-whiteGray hover:shadow-buttonShadow transform hover:scale-110">
            Projects
          </li>
        </Link>
        <Link to="/about">
          <li className="pr-12  hover:bg-mainBg hover:bg-whiteGray hover:shadow-buttonShadow transform hover:scale-110">
            About
          </li>
        </Link>
        <Link to="/contact">
          <li className="pr-12  hover:bg-mainBg hover:bg-whiteGray hover:shadow-buttonShadow transform hover:scale-110">
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
}
