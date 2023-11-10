const startReff = document.querySelector('[data-start]')
const stoptReff = document.querySelector('[data-stop]')

stoptReff.disabled = true

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let intervalColorID = null

startReff.addEventListener('click', (evt) => {

  intervalColorID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor()
  }, 1000)

  startReff.disabled = true
  stoptReff.disabled = false
})

stoptReff.addEventListener('click', (evt) => {
  clearInterval(intervalColorID)
  startReff.disabled = false
  stoptReff.disabled = true
})