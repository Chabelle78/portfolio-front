import React from "react";
import Navbar from "./navigation/Navbar";
import Sidebar from "./navigation/Sidebar";
import { Switch } from "react-router-dom";
import Routes from "./Routes";

export default function Layout() {
  return (
    <div className="min-h-screen grid grid-rows-2 grid-cols-4 gap-2 bg-gray-800 text-white bg-local font-noto">
      <div className="w-20 row-start-1 row-span-full col-start-1 col-end-2">
        <Sidebar />
      </div>
      <div className="h-12 row-start-1 col-start-1 col-end-5 bg-red-400">
        <Navbar />
      </div>
      <div className="h-full pl-40 py-24 row-start-1 row-end-4 col-start-1 col-end-5 ">
        <Switch>
          <Routes />
        </Switch>
      </div>
    </div>
  );
}
