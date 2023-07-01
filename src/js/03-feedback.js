import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const { email, message } = form.elements;
form.addEventListener('input', throttle(getInput, 500));
form.addEventListener('submit', getEmail);

function getInput(e) {
  const formData = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function getEmail(e) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
}
