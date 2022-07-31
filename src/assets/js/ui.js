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
  if (playerH) {
    window.scrollTo(0, 0);
    player.style.display = "block";
    body.style.overflow = "hidden";
    playerH = false;
  } else {
    player.style.display = "none";
    body.style.overflow = "overlay";

    playerH = true;
  }
}
const functionsUi = { hamMenu, playerHidden };

export default functionsUi;
