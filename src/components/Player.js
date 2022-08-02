import React from "react";
import functionsUi from "../assets/js/ui";
import functions from "../assets/js/reproductor";

function Player(props) {
  return (
    <>
      <button className="close-player" onClick={functionsUi.playerHidden}>
        X
      </button>

      {/* <h2>{props.data.name}</h2>
      <img src={props.data.image} width="200px" alt=""></img>
      <h2>{props.data.cancion}</h2>

      <div className="barra-progreso">
        <div className="datos-song">
          <span>00:00</span>
          <span>s</span>
        </div>
        <div className="barra"></div>
      </div> */}
    </>
  );
}
export default Player;
