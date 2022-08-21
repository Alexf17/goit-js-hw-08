import throttle from "lodash.throttle"

const formEl = document.querySelector("form")
const mailEl = document.querySelector("input" )
const textAreaEl = document.querySelector(".feedback-form textarea")

const STORAGE_KEY = 'feedback-form-state'

checkedTextArea() 

textAreaEl.addEventListener('input', throttle(onTextareaInput, 500))
mailEl.addEventListener('input', throttle(onEmailInput, 500));
formEl.addEventListener('submit', onFormSubmit);

const formLocalData = {
  setEmail(mail) {
    this.email = mail;
  },
  setMessage(message) {
    this.message = message;
  },
};


function onTextareaInput(event) {
    const message = event.target.value
  localStorage.setItem(STORAGE_KEY, message)
  
  formLocalData.setMessage(userMessage);
  toJsonStringify(formLocalData);
}

function onEmailInput(event) {
  event.preventDefault();
  const userEmail = event.target.value;
  formLocalData.setEmail(userEmail);
  toJsonStringify(formLocalData);
}

// function checkedTextArea() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY)

//     if (savedMessage) {
//         textareaEl.value = savedMessage
//     }
// }

function checkedTextArea() {
  let parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (parsedData) {
    mailEl.value = parsedData.email;
    textAreaEl.value = parsedData.message;
    console.log(parsedData.email);
  }
}


// const inputEl = document.querySelector('input');
// const textAreaEl = document.querySelector('textarea');
// const formEl = document.querySelector('form');
// const STORAGE_KEY = 'feedback-form-state';
// const formLocalData = {
//   setEmail(mail) {
//     this.email = mail;
//   },
//   setMessage(message) {
//     this.message = message;
//   },
// };
// setCurrentData();
// inputEl.addEventListener('input', throttle(onEmailInput, 500));
// textAreaEl.addEventListener('input', throttle(onTextAreaInput, 500));
// formEl.addEventListener('submit', onFormSubmit);
// let currentInputData = localStorage.getItem(STORAGE_KEY);

function toJsonStringify(objectToJSON) {
  let stringifiedFormLocalData = JSON.stringify(objectToJSON);
  localStorage.setItem(STORAGE_KEY, stringifiedFormLocalData);
}

// function onEmailInput(event) {
//   event.preventDefault();
//   const userEmail = event.target.value;
//   formLocalData.setEmail(userEmail);
//   toJSONStingify(formLocalData);
// }
// function onTextAreaInput(event) {
//   //   event.preventDefault();
//   const userMessage = event.target.value;
//   console.log(userMessage);

//   formLocalData.setMessage(userMessage);
//   toJSONStingify(formLocalData);
// }

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formLocalData);
}

// function setCurrentData() {
//   let parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

//   if (parsedData) {
//     inputEl.value = parsedData.email;
//     textAreaEl.value = parsedData.message;
//     console.log(parsedData.email);
//   }
// }

// const formData = new FormData(event.currentTarget);
// // console.log(formData);
// // for (let [name, value] of formData) {
// //   alert(`${name} = ${value}`); // key1=value1, потом key2=value2
// // }

// formData.forEach((value, name) => {
//   const filledFormData = { name: value };
//   console.log(filledFormData);
// });