
let audio = null
let reproducir = 'false';

function start(url){
  pauseAudio()
    audio = new Audio(url)
    reproducir = true;
    audio.play()
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
 