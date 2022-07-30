import React from "react";
import functions from "../assets/js/reproductor";

function Reproductor(props) {
  // let audio = new Audio(props.url)

  return (
    <>
      {/* <div className="reproductor">
        <div className="datos dib">
          <div className="ima dib">
            <img className="dib" src="https://picsum.photos/80/80" alt=""></img>
          </div>

          <div className="text dib">
            <h4 className="">{props.name}</h4>
            <br></br>
            <h5 className="">{props.cancion}</h5>
          </div>
        </div>

        <div className="duration ">
          <div className="start dib">00:00</div>
          <div className="now dib">2:16</div>
          <div className="end dib">3:42</div>
        </div>
        
      </div> */}

      <div className="player-fix">
        <img
          id="imgPlayer"
          className=""
          src={props.image}
          alt=""
          width="80px"
          height="80px"
        ></img>
        <div className="datos-reproduccion">
          <h4 id="playerName" className="">
            {props.name}
          </h4>
          <h5 id="songName" className="">
            {props.cancion}
          </h5>
        </div>

<div className="contenedor-botones-reproductor">

<button id="btnRepeat" className="btn-repeat color-disable"  onClick={functions.repeat}>↺</button>

  
   <button
          id="btn-rep"
          className="btn-reproducir "
          onClick={functions.play}
        >
          ▶︎
        </button>

        <button id="btnNext" className="btn-next color-enabled"  onClick={functions.next}>»</button>
  
</div>
       
      </div>

      <div className="progress-bar dib"></div>
    </>
  );
}
export default Reproductor;
