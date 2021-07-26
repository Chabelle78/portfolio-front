import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import im1 from "./../pictures/";

export default function Home() {
  const images = {
    im1: require("./../pictures/im1.jpg").default,
  };
  const randomImages = images[Math.floor(Math.random() * images.length)];
  console.log(randomImages);

  return (
    <div className="flex flex-row mx-10 my-10">
      <div className="mx-10">
        <div className="typewriter">
          <h1 className="text-3xl mb-12 ">Welcome, I am Estelle a.k.a LPB</h1>
        </div>
        <div className="flex flex-col ml-12 justify-around my-12 text-lg">
          <p className="mb-5">
            🙆 I'm Estelle Chabat, web developer 👨‍💻 working specially on
            JavaScript 🚀
          </p>
          <p className="mb-5">
            🌱 I’m currently learning on ReactJS, TailwindCSS, Node.js an so on
            other many things!
          </p>
          <p className="mb-5">💻 Learning new things is my passion !</p>
          <p className="mb-5">
            ❓ Ask me about anything related to my personality !
          </p>
          <p>🏄‍♀️ Fun fact: I love sports !</p>
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
