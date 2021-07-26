import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  const images = [
    "src/pictures/im1.jpg",
    "src/pictures/im2.jpg",
    "src/pictures/im3.jpg",
    "src/pictures/im4.jpg",
    "src/pictures/im5.jpg",
    "src/pictures/im6.jpg",
    "src/pictures/im7.jpg",
    "src/pictures/LOGOLPB.png",
  ];

  const [showImages, setShowImages] = useState("src/pictures/LOGOLPB.png");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomImages = images[Math.floor(Math.random() * images.length)];
      setShowImages(randomImages);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex mx-10 my-10 py-10">
      <div className="mx-10 w-2/3 ">
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
      <div className="w-1/3 flex items-center self-center">
        <img src={showImages} alt="imgslpb" className="" />
      </div>
    </div>
  );
}
