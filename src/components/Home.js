import ArtistaDestacado from "./ArtistaDestacado";
import Card from "./Card";
import Reproductor from "./Reproductor";
import "../App.css";

function Home() {
  const datosDestacado = [
    [
      {
        name: "Daniel del Cid",
        datos:
          "Cantautor Originario de Coatepeque, Quetzaltenango, Guatemala. *Todas las canciones se encuentran en etapa de demo*",
        perfil: "#",
        img: "https://luzmaya.com/storage/lusyc/imagenes/artistas/daniel_del_cid.jpg",
      },
    ],
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
      <ArtistaDestacado data={datosDestacado} />
      <h2 className="canciones--recomendadas-txt">Canciones Recomendadas</h2>
      <div class="container container-cards"> {componentsCards}</div>
    </>
  );
}

export default Home;
