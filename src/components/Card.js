import React from "react";

function Card(props) {
  return (
    <>
      <div class="card dib">
        <div class="ima dib">
          <img class="dib" src="https://picsum.photos/100/100" alt=""></img>
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
