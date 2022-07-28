import "./App.css";

import Navbar from "./components/Navbar";
import ArtistaDestacado from "./components/ArtistaDestacado";
import Card from "./components/Card";
import Reproductor from "./components/Reproductor";



function App() {



  const datosDestacado = [
   [{
    name: 'Daniel del Cid',
    datos: 'Cantautor Originario de Coatepeque, Quetzaltenango, Guatemala. *Todas las canciones se encuentran en etapa de demo*',
    perfil: '#',
    img: 'https://luzmaya.com/storage/lusyc/imagenes/artistas/daniel_del_cid.jpg'
   }],
   {
    name: "Dani del Cid",
    nombrecancion: "El guía ciego",
    url: "https://luzmaya.com/storage/lusyc/musica/el_guia_ciego.mp3",
    img: "https://luzmaya.com/storage/lusyc/imagenes/ElGuiaCiego.png",
   },
   {
    name: "Dani del Cid",
    nombrecancion: "Amarte aún más",
    url: "https://luzmaya.com/storage/lusyc/musica/amarte_aun_mas.mp3",
    img: "https://luzmaya.com/storage/lusyc/imagenes/ElGuiaCiego.png",
   },
   {
    name: "Dani del Cid",
    nombrecancion: "Sin ella",
    url: "https://luzmaya.com/storage/lusyc/musica/sin_ella.mp3",
    img: "https://luzmaya.com/storage/lusyc/imagenes/ElGuiaCiego.png",
   },
  ];




  const cancionesRecomendadas = [
    {
      name: "Dani del Cid",
      nombrecancion: "El guía ciego",
      url: "https://luzmaya.com/storage/lusyc/musica/el_guia_ciego.mp3",
      img: "https://luzmaya.com/storage/lusyc/imagenes/ElGuiaCiego.png",
    },
    {
      name: "Fredy Sopon",
      nombrecancion: "Rosa",
      url: "https://luzmaya.com/storage/lusyc/musica/rosa.mp3",
      img: "https://luzmaya.com/storage/lusyc/imagenes/rename.jpg",
    },
    {
      name: "Dani del Cid",
      nombrecancion: "Sin ella",
      url: "https://luzmaya.com/storage/lusyc/musica/sin_ella.mp3",
      img: "https://luzmaya.com/storage/lusyc/imagenes/ElGuiaCiego.png",
    },
    {
      name: "Dani del Cid",
      nombrecancion: "Dime",
      url: "https://luzmaya.com/storage/lusyc/musica/dime_pista.mp3",
      img: "https://luzmaya.com/storage/lusyc/imagenes/ElGuiaCiego.png",
    },
    {
      name: "Daniel del Cid",
      nombrecancion: "Amarte aún más",
      url: "https://luzmaya.com/storage/lusyc/musica/amarte_aun_mas.mp3",
      img: "https://luzmaya.com/storage/lusyc/imagenes/ElGuiaCiego.png",
    },
    
  ];

  const componentsCards = cancionesRecomendadas.map((item) => {
    return (
      <Card
        name={item.name}
        nombrecancion={item.nombrecancion}
        url={item.url}
        img={item.img}
      />
    );
  });
 
  return (
    <>
      <Navbar name="LUSYC" />
      <ArtistaDestacado
       data={datosDestacado}
      />
      <h2 className="canciones--recomendadas-txt">Canciones Recomendadas</h2>
      <div class="container container-cards"> {componentsCards}</div>
      <Reproductor name={cancionesRecomendadas[0].name} cancion={cancionesRecomendadas[0].nombrecancion} url={cancionesRecomendadas[0].url}/>
    </>
  );
}

export default App;
