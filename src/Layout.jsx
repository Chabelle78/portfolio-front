import React from "react";
import Navbar from "./navigation/Navbar";
import Sidebar from "./navigation/Sidebar";
import { Switch } from "react-router-dom";
import Routes from "./Routes";

export default function Layout() {
  return (
    <div className="min-h-screen grid grid-rows-4 grid-cols-4 gap-2">
      <div className="w-20 row-start-1 row-span-full col-start-1 col-end-2 bg-red-600">
        <Sidebar />
      </div>
      <div className="h-10 row-start-1 col-start-2 col-end-5 bg-yellow-600">
        <Navbar />
      </div>
      <div className="h-full px-20 py-16 row-start-1 row-end-4 col-start-1 col-end-5 ">
        <Switch>
          <Routes />
        </Switch>
      </div>
    </div>
  );
}
