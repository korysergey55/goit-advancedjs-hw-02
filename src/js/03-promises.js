import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const btnReff = document.querySelector('button[type="submit"]')
const formReff = document.querySelector('.form')

let formItems = {}

formReff.addEventListener('submit', (evt) => {
  evt.preventDefault()

  const formData = new FormData(evt.currentTarget)
  formData.forEach((value, key) => {
    formItems[key] = Number(value)
  })
  let delay = formItems.delay

  for (let i = 1; i <= formItems.amount; i += 1) {
    if (i > 1) {
      delay += formItems.step
    }
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        iziToast.show({
          title: 'Fulfilled',
          color: 'green',
          position: 'topCenter',
          message: `✅ Fulfilled promise ${position} in ${delay}ms`
        });
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        iziToast.show({
          title: 'Rejected',
          color: 'red',
          position: 'topCenter',
          message: `❌ Rejected promise ${position} in ${delay}ms`
        });
      });
  }
  formReff.reset()
})

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay })
      } else {
        // Reject
        reject({ position, delay })
      }
    }, delay)
  })


}
