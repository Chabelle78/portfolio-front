import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import PictureStacks from "./stacks/PicturesStacks";

export default function Home() {
  return (
    <div className="flex flex-row mx-10 my-10">
      <div className="mx-10">
        <h1 className="text-3xl mb-12">Welcome, I am LPB</h1>
        <div className="flex flex-col ml-12 justify-around">
          <p className="mb-5">
            I'm Estelle, a student developer 👨‍💻 working specially on JavaScript
            🚀{" "}
          </p>
          <p className="mb-5">
            🌱 I’m currently learning on React, Tailwind CSS, Node.js
          </p>
          <p className="mb-5">
            ❓ Ask me about anything related to my personality ! ⚡ Fun fact: I
            love sports !
          </p>
          <PictureStacks />
        </div>
        <div className="flex justify-evenly">
          <Link to="/stacks">
            <button className="bg-red-400 hover:bg-red-300 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
              Stacks Used
            </button>
          </Link>
          <button className="bg-red-400 hover:bg-red-300 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
            Know me better
          </button>
        </div>
      </div>
      <img
        src="src/pictures/Capture d’écran 2021-07-21 à 15.45.57.png"
        alt="LPB_img"
        width=""
      />
    </div>
  );
}
