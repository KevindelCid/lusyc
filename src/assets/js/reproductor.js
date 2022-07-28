let audio = new Audio(
  "//manzdev.github.io/codevember2017/assets/eye-tiger.mp3"
);
let reproduciendo = false;

audio.loop = false;
audio.controls = true;

audio.volume = 0.5;

function play(url) {
  let btn = document.getElementById("btn-rep");
  if (reproduciendo === false) {
    audio.loop = true;
    audio.controls = true;

    audio.volume = 0.5;

    audio.play();
    reproduciendo = true;
    btn.textContent = "||";
  } else {
    audio.pause();
    reproduciendo = false;
    btn.textContent = "▶︎";
  }
}

function playCard(props) {
  let btn = document.getElementById("btn-rep");
  changeDataOfPlayer(props);
  audio.pause();
  reproduciendo = false;
  btn.textContent = "▶︎";
  audio = new Audio(props.url);
  audio.loop = true;
  audio.controls = true;

  audio.volume = 0.5;

  audio.play();
  reproduciendo = true;
  btn.textContent = "||";
}
function changeDataOfPlayer(props) {
  let img = document.getElementById("imgPlayer");
  let name = document.getElementById("playerName");
  let song = document.getElementById("songName");

  name.textContent = props.name;
  song.textContent = props.nombrecancion;
  img.src = props.img;
}
const functions = {
  play,
  playCard,
};

export default functions;
