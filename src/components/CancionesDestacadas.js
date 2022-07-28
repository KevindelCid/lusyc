import React from "react";
import functions from "../assets/js/reproductor";

function CancionesDestacadas(props){


return <>

<li className="dib canciones"  onClick={() => {
          functions.playCard(props);
        }}>
                {" "}
                <img src={props.img} alt=""></img>{" "}
                <a href="#holi">
                   {props.nombrecancion}
                </a>
              </li>

</>

}

export default CancionesDestacadas