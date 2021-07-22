import React from "react";
import { useQuery } from "react-query";
import { project } from "../API/request";
import Spinner from "../spinner/Spinner";

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
