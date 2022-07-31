import React from "react";
import functionsUi from "../assets/js/ui";

function Player() {
  return (
    <>
      <button className="close-player" onClick={functionsUi.playerHidden}>
        X
      </button>

      <h1>Holiiiiiiis aqui esta el reproductor</h1>
    </>
  );
}
export default Player;
