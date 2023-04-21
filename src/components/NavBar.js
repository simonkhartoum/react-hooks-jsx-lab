import React from "react";
import Home from "../components/Home";
import About from "../components/About";
function NavBar() {
  // update the JSX being returned!
  return (
  <nav>
   <a href="#home">{Home}</a>
   <a href="#about">{About}</a>
  </nav>
  );
}

export default NavBar;
