import "./App.css";
import Navbar from "./components/Navbar";
import ArtistaDestacado from "./components/ArtistaDestacado";
import Card from "./components/Card";
import Reproductor from "./components/Reproductor";

function App() {
  const fuentes = [
    { name: "Dani del Cid", nombrecancion: "Sin ella" },
    { name: "Fredy Sopon", nombrecancion: "Rosa" },
    { name: "El David", nombrecancion: "Vino tinto" },
    { name: "Dani del Cid", nombrecancion: "Sin ella" },
    { name: "Fredy Sopon", nombrecancion: "Rosa" },
    { name: "El David", nombrecancion: "Vino tinto" },
  ];

  const componentsCards = fuentes.map((item) => {
    return <Card name={item.name} nombrecancion={item.nombrecancion} />;
  });

  return (
    <>
      <Navbar name="LUSYC" />
      <ArtistaDestacado
        name="Daniel del Cid"
        bio="Un canta-autor Coatepecano cuyas composiciones llegan al alma"
      />
      <div class="container container-cards"> {componentsCards}</div>
      <Reproductor name={fuentes[0].name} cancion={fuentes[0].nombrecancion} />
    </>
  );
}

export default App;
