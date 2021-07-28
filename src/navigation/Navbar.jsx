import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed w-full flex">
      <ul className="h-12 w-full text-white py-6 flex flex-row justify-end items-center align-center text-xl ">
        <Link to="/">
          <li className="flex justify-center items-center px-6  transform hover:scale-110">
            Home
          </li>
        </Link>
        <Link to="/projects">
          <li className=" flex justify-center items-center px-6 transform hover:scale-110">
            Projects
          </li>
        </Link>
        <Link to="/about">
          <li className=" flex justify-center items-center px-6 transform hover:scale-110">
            About
          </li>
        </Link>
        <Link to="/contact">
          <li className=" flex justify-center items-center px-6 transform hover:scale-110">
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
}
