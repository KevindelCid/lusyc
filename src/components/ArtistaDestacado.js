import React from "react";

function ArtistaDestacado(props) {
  return (
    <>
      <div className="container-artista-del-dia dib">
        <div className="dib art-dest-container">
          <div className="dib imgcontainer">
            <img
              className="img "
              src="https://www.thispersondoesnotexist.com/image"
              alt="nombre del artista"
            ></img>
          </div>

          <div className=" dib texto">
            <h2 className="dib">{props.name}</h2>
            <p className="dib">{props.bio}</p>
            <button className="btn-dark dib" href="#cosasdelabida">
              ¡Escucha su musica ahora!
            </button>
          </div>
          <div className="dib canciones-destacadas">
            <h2 className="dib t">Canciones destacadas</h2>

            <ul className="dib">
              <li className="dib canciones">
                {" "}
                <img src="https://picsum.photos/100/100" alt=""></img>{" "}
                <a href="#holi">
                  <span>Artista</span> cancion 1
                </a>
              </li>
              <li className="dib canciones">
                {" "}
                <img src="https://picsum.photos/100/100" alt=""></img>{" "}
                <a href="#holi">
                  <span>Artista</span> cancion 2
                </a>
              </li>
              <li className="dib canciones">
                {" "}
                <img src="https://picsum.photos/100/100" alt=""></img>{" "}
                <a href="#holi">
                  <span>Artista</span> cancion 3
                </a>
              </li>
              <li className="dib canciones">
                {" "}
                <img src="https://picsum.photos/100/100" alt=""></img>{" "}
                <a href="#holi">
                  <span>Artista</span> cancion 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtistaDestacado;
