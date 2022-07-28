import "./App.css";

import Navbar from "./components/Navbar";
import ArtistaDestacado from "./components/ArtistaDestacado";
import Card from "./components/Card";
import Reproductor from "./components/Reproductor";

function App() {
  const fuentes = [
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
      name: "Fredy Sopon",
      nombrecancion: "Rosa",
      url: "file:///C:/Users/CURACAO/Downloads/02%20-%20Dani%20del%20Cid%20-%20El%20Gu%C3%ADa%20Ciego%20-%20Dani%20del%20Cid%20(1).mp3",
      img: "https://luzmaya.com/storage/lusyc/imagenes/ElGuiaCiego.png",
    },
    {
      name: "El David",
      nombrecancion: "Vino tinto",
      url: "file:///C:/Users/CURACAO/Downloads/02%20-%20Dani%20del%20Cid%20-%20El%20Gu%C3%ADa%20Ciego%20-%20Dani%20del%20Cid%20(1).mp3",
      img: "https://luzmaya.com/storage/lusyc/imagenes/ElGuiaCiego.png",
    },
  ];

  const componentsCards = fuentes.map((item) => {
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
        name="Sopon Avenue"
        bio="Un canta-autor Coatepecano cuyas composiciones llegan al alma"
      />
      <div class="container container-cards"> {componentsCards}</div>
      <Reproductor name={fuentes[0].name} cancion={fuentes[0].nombrecancion} />
    </>
  );
}

export default App;
