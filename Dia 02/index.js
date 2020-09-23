const ponteiroSegundos = document.querySelector('.seconds')
const ponteiroMinutos = document.querySelector('.minute')
const ponteiroHoras = document.querySelector('.hour')

function setDate() {
  const agora = new Date()

  const segundos = agora.getSeconds()
  const segundosGraus = ((segundos / 60) * 360) + 90
  console.log(segundosGraus);
  ponteiroSegundos.style.transform = `rotate(${segundosGraus}deg)`

  const minutos = agora.getMinutes()
  const minutosGraus = ((minutos / 60) * 360) + 90
  ponteiroMinutos.style.transform = `rotate(${minutosGraus}deg)`

  const horas = agora.getHours()
  const horasGraus = ((horas / 60) * 360) + 90
  console.log("Olha aqui: ", horasGraus);
  ponteiroHoras.style.transform = `rotate(${horasGraus}deg)`

}

setInterval(setDate, 1000)
