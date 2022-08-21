import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const textArea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
let formData = {
  email: savedData ? savedData.email : '',
  message: savedData ? savedData.message : '',
};

form.addEventListener('input', throttle(getSavedDataToLs, 500));
form.addEventListener('submit', onFormSubmit);

verifyTextarea();

function getSavedDataToLs(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function verifyTextarea() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    email.value = savedData.email;
    textArea.value = savedData.message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData.email && savedData.message) {
    console.log(savedData);
  } else {
    return alert("Не все поля заполнил скотиняка!");
  }

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}