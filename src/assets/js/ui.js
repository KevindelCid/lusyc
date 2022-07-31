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
  if (playerH) {
    const player = document.getElementById("player");
    player.style.display = "block";
    playerH = false;
  } else {
    const player = document.getElementById("player");
    player.style.display = "none";
    playerH = true;
  }
}
const functionsUi = { hamMenu, playerHidden };

export default functionsUi;
