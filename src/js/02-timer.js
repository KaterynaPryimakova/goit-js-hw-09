import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import { convertMs } from './helper.js';
import { addLeadingZero } from './helper.js';

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

  const intervalId = setInterval(() => {
    currentDate = selectedDate - Date.now();
    const convertDate = convertMs(currentDate);

    countDays.textContent = addLeadingZero(convertDate.days);
    countHours.textContent = addLeadingZero(convertDate.hours);
    countMinutes.textContent = addLeadingZero(convertDate.minutes);
    countSeconds.textContent = addLeadingZero(convertDate.seconds);

    if (convertDate.seconds <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}
