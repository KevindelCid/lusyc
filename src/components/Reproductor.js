import React from "react";

function Reproductor(props) {
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

      <div className="reproductor">
        <div className="rows">
          <div className="celdaInfo">
            <img className="" src="https://picsum.photos/80/80" alt=""></img>

            <div className="enReproduccion">
              <div className="rows">
                <div>
                  <h4 className="">{props.name}</h4>
                  <h5 className="">{props.cancion}</h5>
                </div>
                <div>▶︎</div>
                <div className="progress-bar dib"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Reproductor;
