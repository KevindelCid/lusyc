import React from "react";
import CancionesDestacadas from "./CancionesDestacadas";


function ArtistaDestacado(props) {
 


  const canciones = props.data.map(item =>{
 
    return (
      <CancionesDestacadas
        name={item.name}
        nombrecancion={item.nombrecancion}
        url={item.url}
        img={item.img}
      />
    );
  })




  return (
    <>
      <div className="container-artista-del-dia dib">
        <div className="dib art-dest-container">
          <div className="dib imgcontainer">
        
            <img
              className="img "
              src={props.data[0][0].img}
              alt={props.data[0][0].name}
            ></img>
          </div>

          <div className=" dib texto">
            <h2 className="dib">{props.data[0][0].name}</h2>
            <p className="dib">{props.data[0][0].datos}</p>
            <button className="btn-dark dib" href={props.data[0][0].perfil}>
              ¡Escucha su musica ahora!
            </button>
          </div>
          <div className="dib canciones-destacadas">
            <h2 className="dib t">Canciones destacadas</h2>

            <ul className="dib">
              {canciones}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtistaDestacado;
