let audio = new Audio(
  "//manzdev.github.io/codevember2017/assets/eye-tiger.mp3"
);
let reproduciendo = false;

audio.loop = false;
audio.controls = true;

let continuidadAudio = "next"; // next, repeat, stop

function seTerminoLaCancion() {
  if (continuidadAudio === "repeat") {
    audio.play();
  } else {
    next();
  }
}

function secondsToString(seconds) {
  var minute = Math.floor((seconds / 60) % 60);
  minute = minute < 10 ? "0" + minute : minute;
  var second = seconds % 60;
  second = second < 10 ? "0" + second : second;
  return minute + ":" + second;
}

function play(tipoReproduccion) {
  audio.onended = () => {
    seTerminoLaCancion();
    console.log(audio.ended);
  };

  audio.onplaying = () => {
    const durationDomAudio = document.getElementById("ends");

    durationDomAudio.textContent = secondsToString(Math.trunc(audio.duration));
  };
  audio.ontimeupdate = () => {
    const barra = document.getElementById("barra");
    const durationDomAudio = document.getElementById("starts");

    durationDomAudio.textContent = secondsToString(
      Math.trunc(audio.currentTime)
    );
    let reproducido =
      Math.trunc((audio.currentTime * 100) / audio.duration) + "%";
    barra.style.width = reproducido;
  };

  if (!audio.ended) {
    console.log(audio.ended);
    let btn = document.getElementById("btn-rep");
    if (reproduciendo === false && tipoReproduccion !== "cosa") {
      audio.pause();
      audio.controls = true;

      audio.volume = 0.5;

      audio.play();

      reproduciendo = true;
      btn.textContent = "||";
    } else if (reproduciendo === true && tipoReproduccion !== "cosa") {
      audio.pause();
      reproduciendo = false;
      btn.textContent = "▶︎";
    } else if (tipoReproduccion === "cosa") {
      audio.pause();
      audio.controls = true;

      audio.volume = 0.5;

      audio.play();
      tipoReproduccion = "";
      reproduciendo = true;
      btn.textContent = "||";
    }
  }
}
function next() {
  const nextSong = [
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

  let ran = Math.floor(Math.random() * nextSong.length);

  audio.src = nextSong[ran].url;
  changeDataOfPlayer(nextSong[ran]);

  audio.play();
}

function repeat() {
  const repetir = document.getElementById("btnRepeat");
  continuidadAudio === "repeat"
    ? (continuidadAudio = "next")
    : (continuidadAudio = "repeat");

  if (continuidadAudio === "repeat") {
    repetir.classList.remove("color-disabled");
    repetir.classList += " color-enabled";
  } else {
    repetir.classList.remove("color-enabled");
    repetir.classList += " color-disabled";
  }
}

function playCard(props) {
  if (continuidadAudio === "repeat") {
    let btn = document.getElementById("btn-rep");
    changeDataOfPlayer(props);
    audio.pause();
    reproduciendo = false;
    btn.textContent = "▶︎";
    audio = new Audio(props.url);

    audio.controls = true;

    audio.volume = 0.5;

    play("cosa");
  } else if (continuidadAudio === "next") {
    let btn = document.getElementById("btn-rep");
    changeDataOfPlayer(props);
    audio.pause();
    reproduciendo = false;
    btn.textContent = "▶︎";
    audio = new Audio(props.url);

    audio.controls = true;

    audio.volume = 0.5;

    play("cosa");
  }
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
  repeat,
  next,
};

export default functions;
