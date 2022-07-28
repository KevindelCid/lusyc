import "./App.css";
import Navbar from "./components/Navbar";
import ArtistaDestacado from "./components/ArtistaDestacado";
import Card from "./components/Card";
import Reproductor from "./components/Reproductor";



function App() {





  const fuentes = [
    { name: "Dani del Cid", nombrecancion: "Sin ella", url:"https://dkihjuum4jcjr.cloudfront.net/ES_ITUNES/Avinam/ES_Avinam.mp3" },
    { name: "Fredy Sopon", nombrecancion: "Rosa", url:"https://dkihjuum4jcjr.cloudfront.net/ES_ITUNES/Fairy%20Lights/ES_Fairy%20Lights.mp3"},
    { name: "El David", nombrecancion: "Vino tinto", url:""},
    { name: "Dani del Cid", nombrecancion: "Sin ella", url:""},
    { name: "Fredy Sopon", nombrecancion: "Rosa", url:""},
    { name: "El David", nombrecancion: "Vino tinto", url:""},
  ];

  const componentsCards = fuentes.map((item) => {
    return <Card name={item.name} url={item.url}
     nombrecancion={item.nombrecancion} />;
  });
 
  return (
    <>
      <Navbar name="LUSYC" />
      <ArtistaDestacado
        name="Daniel del Cid"
        bio="Un canta-autor Coatepecano cuyas composiciones llegan al alma"
      />
      <div class="container container-cards"> {componentsCards}</div>
      <Reproductor name={fuentes[0].name} cancion={fuentes[0].nombrecancion} url={fuentes[0].url}/>
    </>
  );
}

export default App;
