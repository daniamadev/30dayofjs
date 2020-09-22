

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing')
}

function playSound(e) {
  //selecionando a tag audio para que cada tecla reproduza um som
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  //se não houver audio, não retorna nada
  if (!audio) return;

  //adicionando uma classe playing em combinação com a classe key
  key.classList.add('playing')
  //indica a duração de execução do áudio
  audio.currentTime = 0
  //executa o arquivo audio
  audio.play()
}

const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitionEnd', removeTransition))
window.addEventListener('keydown', playSound);





