
let audio = null
let reproducir = 'false';
let continuidadAudio = 'repeat' // next, repeat, stop





function playList(props){
  //asumamos por ahora que este array lo obtuve del backend


  if(continuidadAudio === 'next'){
    const playList1 = [
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
    start(playList1)
  
}
}


function start(tipoReproduccion){

pauseAudio()

if(continuidadAudio === 'repeat'){
  
  audio = new Audio(tipoReproduccion)
  reproducir = true;
  audio.play()
}
else if(continuidadAudio === 'next'){
  //aqui voy a poner a reproducir todas las canciones de la playlist
  alert('entramos a la playlist')
}

  
  }
  const pauseAudio = () => {
    if (reproducir) {
      reproducir = false;
      audio.pause();
    }
  }


const functions = {
  start, pauseAudio, reproducir
}



  export default functions
 