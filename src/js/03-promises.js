const form = document.querySelector('.form');
const inputAmount = document.querySelector('[name="amount"]');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const amount = inputAmount.value;
  console.log(amount);
  setInterval(createPromise(), amount);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
