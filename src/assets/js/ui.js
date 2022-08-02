let navbarState = false;
let playerH = true;

function hamMenu() {
  let navbar = document.getElementById("options");
  let burger = document.getElementById("navburger");
  if (navbarState === false) {
    navbar.style.display = "flex";
    navbar.style.flexDirection = "column";
    navbar.style.position = "fixed";
    navbar.style.top = "5rem";
    navbar.style.backgroundColor = "rgba(2, 19, 19, 0.966)";

    burger.textContent = "X";
    navbarState = true;
  } else {
    navbar.style.display = "none";

    burger.textContent = "☰";
    navbarState = false;
  }
}

function playerHidden() {
  const player = document.getElementById("player");
  const body = document.getElementById("body");
  const reproductor = document.getElementById("reproductor");
  const contenedorBtnReproductor = document.getElementById(
    "btn-reproductor-agrandado"
  );
  const playerFix = document.getElementById("player-fix");
  const datos = document.getElementById("datosagrandado");
  const imgPlayer = document.getElementById("imgPlayer");

  const reproductorVi = document.getElementById("reproductor-vi");
  const reproductorVi2 = document.getElementById("reproductor-vi2");
  if (playerH) {
    window.scrollTo(0, 0);

    body.style.overflow = "hidden";
    reproductor.classList.add("agrandar-reproductor");
    imgPlayer.classList.add("img-rep-agrandado");
    datos.classList.add("datos-agrandado");
    playerFix.classList.add("player-fix-agrandado");
    reproductorVi.classList.remove("reproductor-novis");
    reproductorVi2.classList.remove("reproductor-novis");

    contenedorBtnReproductor.classList.add("btn-reproductor-agrandado");

    playerH = false;
  } else {
    body.style.overflow = "overlay";
    reproductor.classList.remove("agrandar-reproductor");
    imgPlayer.classList.remove("img-rep-agrandado");
    playerFix.classList.remove("player-fix-agrandado");
    datos.classList.remove("datos-agrandado");
    reproductorVi.classList.add("reproductor-novis");
    reproductorVi2.classList.add("reproductor-novis");
    contenedorBtnReproductor.classList.remove("btn-reproductor-agrandado");

    playerH = true;
  }
}
const functionsUi = { hamMenu, playerHidden };

export default functionsUi;
