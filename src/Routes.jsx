import React from "react";
import { Route } from "react-router";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/Home";
import OneProject from "./pages/projects/OneProject";
import Projects from "./pages/projects/Projects";

export default function Routes() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/project/:id" component={OneProject} />
    </div>
  );
}
