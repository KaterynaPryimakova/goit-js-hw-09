const form = document.querySelector('.form');
const inputAmount = document.querySelector('[name="amount"]');
const inputFirstDelay = document.querySelector('[name="delay"]');
const inputDelayStep = document.querySelector('[name="step"]');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const amount = Number(inputAmount.value);
  const step = Number(inputDelayStep.value);
  const firstDelay = Number(inputFirstDelay.value);
  let delay = firstDelay;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const step = Number(inputDelayStep.value);
  const promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
