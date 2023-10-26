import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const countDays = document.querySelector('span[data-days]');
const countHours = document.querySelector('span[data-hours]');
const countMinutes = document.querySelector('span[data-minutes]');
const countSeconds = document.querySelector('span[data-seconds]');
let currentDate;
let selectedDate;
startBtn.disabled = true;
startBtn.addEventListener('click', runTime);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      selectedDate = selectedDates[0];
    }
  },
};

const datetimePicker = flatpickr(input, options);

function runTime() {
  startBtn.disabled = true;

  setInterval(() => {
    currentDate = selectedDate - Date.now();
    const convertDate = convertMs(currentDate);

    countDays.textContent = convertDate.days.toString().padStart(2, '0');
    countHours.textContent = convertDate.hours.toString().padStart(2, '0');
    countMinutes.textContent = convertDate.minutes.toString().padStart(2, '0');
    countSeconds.textContent = convertDate.seconds.toString().padStart(2, '0');

    if (currentDate <= 0) {
      countDays.textContent = '00';
      countHours.textContent = '00';
      countMinutes.textContent = '00';
      countSeconds.textContent = '00';
    }
  }, 1000);
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
