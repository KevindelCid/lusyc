let audio = new Audio(
  "//manzdev.github.io/codevember2017/assets/eye-tiger.mp3"
);
let reproduciendo = false;

audio.loop = false;
audio.controls = true;

audio.volume = 0.5;
let contador

let continuidadAudio = 'next' // next, repeat, stop


function seTerminoLaCancion(){
  console.log('se termino la cancionnn')
  if(continuidadAudio === 'repeat'){
    audio.play()
  }
  else{

   next()
  

}
}


function play(tipoReproduccion) {




  audio.onended = () =>{
 seTerminoLaCancion()
 console.log(audio.ended)

}

if(!audio.ended){
console.log(audio.ended)
let btn = document.getElementById("btn-rep");
if (reproduciendo === false) {
 audio.pause()
  audio.controls = true;

  audio.volume = 0.5;

 

  audio.play()


  reproduciendo = true;
  btn.textContent = "||";
} else {
  audio.pause();
  reproduciendo = false;
  btn.textContent = "▶︎";
}
}

   



 
}
function next(){

  const nextSong = [
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
    ]
     
      
    

let ran = Math.floor(Math.random() * nextSong.length)

  audio.src= nextSong[ran].url
  changeDataOfPlayer(nextSong[ran]);
  audio.play()
}


function repeat(){


  const repetir = document.getElementById('btnRepeat')
  continuidadAudio === 'repeat'? continuidadAudio = 'next': continuidadAudio = 'repeat'
  
  if(continuidadAudio === 'repeat'){
    
    repetir.classList.remove('color-disabled');
    repetir.classList += " color-enabled";

  } else{
    repetir.classList.remove('color-enabled');
    repetir.classList += " color-disabled";

  }
}



function playCard(props) {

  if(continuidadAudio === 'repeat'){

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
  else if(continuidadAudio === 'next'){
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
  next

};

export default functions;
