import Navbar from "./components/Navbar";
import Reproductor from "./components/Reproductor";

function App() {
  const cancionesRecomendadas = [
    {
      name: "Survivor",
      nombrecancion: "Eye of the tiger",
      url: "//manzdev.github.io/codevember2017/assets/eye-tiger.mp3",
      img: "https://i1.sndcdn.com/artworks-qhIHG2qG9ELR6oB0-1IFvTQ-t500x500.jpg",
    },
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
  return (
    <>
      <Navbar name="LUSYC" />
      <Reproductor
        name={cancionesRecomendadas[0].name}
        cancion={cancionesRecomendadas[0].nombrecancion}
        url={cancionesRecomendadas[0].url}
        image={cancionesRecomendadas[0].img}
      />
    </>
  );
}

export default App;
