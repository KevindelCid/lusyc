import React from "react";
import functions from "../assets/js/reproductor";

function Card(props) {




  return (
    <>
      <div
        class="card dib"
        onClick={() => {
          functions.playCard(props);
        }}
      >
        <div class="ima dib">
          <img
            class="dib"
            src={props.img}
            width="80px"
            height="80px"
            alt=""
          ></img>
        </div>

        <div class="text dib">
          <h4 class="">{props.name}</h4>
          <br></br>
          <h5 class="">{props.nombrecancion}</h5>
        </div>
      </div>
    </>
  );
}
export default Card;
