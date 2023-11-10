import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputReff = document.querySelector('#datetime-picker')
const startReffBtn = document.querySelector('[data-start]')
const daysReff = document.querySelector('[data-days]')
const hoursReff = document.querySelector('[data-hours]')
const minutesReff = document.querySelector('[data-minutes]')
const secondsReff = document.querySelector('[data-seconds]')

startReffBtn.disabled = true

let currentDate = new Date()
let selectedDate = null


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0].getTime() < currentDate.getTime()) {
      alert('Please choose a date in the future')
      startReffBtn.disabled = true
      return
    }
    selectedDate = selectedDates[0]
    startReffBtn.disabled = false
  },
};

flatpickr(inputReff, options)

startReffBtn.addEventListener('click', () => {
  const intervalId = setInterval(() => {
    let currentDateIn = new Date()
    if (selectedDate.getTime() >= currentDateIn.getTime()) {
      daysReff.textContent = addLeadingZero(convertMs(selectedDate.getTime() - currentDateIn.getTime()).days)
      hoursReff.textContent = addLeadingZero(convertMs(selectedDate.getTime() - currentDateIn.getTime()).hours)
      minutesReff.textContent = addLeadingZero(convertMs(selectedDate.getTime() - currentDateIn.getTime()).minutes)
      secondsReff.textContent = addLeadingZero(convertMs(selectedDate.getTime() - currentDateIn.getTime()).seconds)
    } else {
      clearInterval(intervalId)
      daysReff.textContent = '00'
      hoursReff.textContent = '00'
      minutesReff.textContent = '00'
      secondsReff.textContent = '00'
    }
  }, 1000)
})

function addLeadingZero(value) {
  return value < 9 ? `0${value}` : value
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}