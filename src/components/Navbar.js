import React from "react";
import functionsUi from "../assets/js/ui";
import { Link, Outlet, BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Playlists from "./Playlists";
import Localities from "./Localities";
function Navbar(props) {
  return (
    <>
      <BrowserRouter>
        <nav>
          <div className="navigator-flex">
            <h1 className="">LUSYC</h1>
            <div className="  navburger options" onClick={functionsUi.hamMenu}>
              <span id="navburger">☰</span>
            </div>

            <ul id="options" className="options-navigation">
              <Link to="/" onClick={functionsUi.hamMenu} className="link">
                Home
              </Link>
              <Link
                to="/playlists"
                onClick={functionsUi.hamMenu}
                className="link"
              >
                Playlists
              </Link>
              <Link
                to="/localities"
                onClick={functionsUi.hamMenu}
                className="link"
              >
                Localities
              </Link>
              <Link to="/login" onClick={functionsUi.hamMenu} className="link">
                Login
              </Link>
              <Outlet />
            </ul>
          </div>
        </nav>{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/localities" element={<Localities />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default Navbar;
