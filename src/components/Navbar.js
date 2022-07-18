import React from "react";

function Navbar(props) {
  return (
    <>
      <nav>
        <div className="dib nav-logo">
          <h1 className="dib">LUSYC</h1>
          <div className=" dib navburger">☰</div>
        </div>

        <ul className="dib ulnav">
          <li className="dib">cosa 1</li>
          <li className="dib">cosa 2</li>
          <li className="dib">cosa 3</li>
          <li className="dib">cosa 4</li>
          <li className="dib">cosa 5</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
