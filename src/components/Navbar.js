import React from "react";
import functionsUi from "../assets/js/ui";

function Navbar(props) {
  return (
    <>
      <nav>
        <div className="navigator-flex">
          <h1 className="">LUSYC</h1>
          <div className="  navburger options" onClick={functionsUi.hamMenu}>
            <span id="navburger">☰</span>
          </div>

          <ul id="options" className="options-navigation">
            <li className="">Home</li>
            <li className="">Playlists</li>
            <li className="">Localities</li>
            <li className="">Login</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
