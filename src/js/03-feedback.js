import throttle from "lodash.throttle"
const inputEl = document.querySelector('input');
const textAreaEl = document.querySelector('textarea');
const formEl = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
//Initialisation of object for setting data to local storage
const formLocalData = {
  setEmail(mail) {
    this.email = mail;
  },
  setMessage(message) {
    this.message = message;
  },
};
setCurrentData();
//Addimg listeners
inputEl.addEventListener('input', throttle(onEmailInput, 500));
textAreaEl.addEventListener('input', throttle(onTextAreaInput, 500));
formEl.addEventListener('submit', onFormSubmit);
// let currentInputData = localStorage.getItem(STORAGE_KEY);
//Modifiying object to JSON forrmat
function toJSONStingify(objectToJSON) {
  let stingifiedFormLocalData = JSON.stringify(objectToJSON);
  localStorage.setItem(STORAGE_KEY, stingifiedFormLocalData);
}
//Adding email to object formLocalData
function onEmailInput(event) {
  event.preventDefault();
  const userEmail = event.target.value;
  formLocalData.setEmail(userEmail);
  toJSONStingify(formLocalData);
}
//Adding text to object formLocalData
function onTextAreaInput(event) {
  event.preventDefault();
  const userMessage = event.target.value;
  formLocalData.setMessage(userMessage);
  toJSONStingify(formLocalData);
}

//Getting current data from local storage and setting it to from elements
function setCurrentData() {
  let parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (parsedData) {
    inputEl.value = parsedData.email;
    textAreaEl.value = parsedData.message;
  }
}
//Cleaning from after submit event
function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formLocalData);
}


// import throttle from "lodash.throttle"

// const formEl = document.querySelector("form")
// const mailEl = document.querySelector("input" )
// const textAreaEl = document.querySelector(".feedback-form textarea")

// const STORAGE_KEY = 'feedback-form-state'

// checkedTextArea() 

// textAreaEl.addEventListener('input', throttle(onTextareaInput, 500))
// mailEl.addEventListener('input', throttle(onEmailInput, 500));
// formEl.addEventListener('submit', onFormSubmit);

// const formLocalData = {
//   setEmail(mail) {
//     this.email = mail;
//   },
//   setMessage(message) {
//     this.message = message;
//   },
// };


// function onTextareaInput(event) {
//     const message = event.target.value
//   localStorage.setItem(STORAGE_KEY, message)
  
//   formLocalData.setMessage(userMessage);
//   toJsonStringify(formLocalData);
// }

// function onEmailInput(event) {
//   event.preventDefault();
//   const userEmail = event.target.value;
//   formLocalData.setEmail(userEmail);
//   toJsonStringify(formLocalData);
// }

// // function checkedTextArea() {
// //     const savedMessage = localStorage.getItem(STORAGE_KEY)

// //     if (savedMessage) {
// //         textareaEl.value = savedMessage
// //     }
// // }

// function checkedTextArea() {
//   let parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

//   if (parsedData) {
//     mailEl.value = parsedData.email;
//     textAreaEl.value = parsedData.message;
//     console.log(parsedData.email);
//   }
// }


// // const inputEl = document.querySelector('input');
// // const textAreaEl = document.querySelector('textarea');
// // const formEl = document.querySelector('form');
// // const STORAGE_KEY = 'feedback-form-state';
// // const formLocalData = {
// //   setEmail(mail) {
// //     this.email = mail;
// //   },
// //   setMessage(message) {
// //     this.message = message;
// //   },
// // };
// // setCurrentData();
// // inputEl.addEventListener('input', throttle(onEmailInput, 500));
// // textAreaEl.addEventListener('input', throttle(onTextAreaInput, 500));
// // formEl.addEventListener('submit', onFormSubmit);
// // let currentInputData = localStorage.getItem(STORAGE_KEY);

// function toJsonStringify(objectToJSON) {
//   let stringifiedFormLocalData = JSON.stringify(objectToJSON);
//   localStorage.setItem(STORAGE_KEY, stringifiedFormLocalData);
// }

// // function onEmailInput(event) {
// //   event.preventDefault();
// //   const userEmail = event.target.value;
// //   formLocalData.setEmail(userEmail);
// //   toJSONStingify(formLocalData);
// // }
// // function onTextAreaInput(event) {
// //   //   event.preventDefault();
// //   const userMessage = event.target.value;
// //   console.log(userMessage);

// //   formLocalData.setMessage(userMessage);
// //   toJSONStingify(formLocalData);
// // }

// function onFormSubmit(event) {
//   event.preventDefault();
//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   console.log(formLocalData);
// }

// // function setCurrentData() {
// //   let parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

// //   if (parsedData) {
// //     inputEl.value = parsedData.email;
// //     textAreaEl.value = parsedData.message;
// //     console.log(parsedData.email);
// //   }
// // }

// // const formData = new FormData(event.currentTarget);
// // // console.log(formData);
// // // for (let [name, value] of formData) {
// // //   alert(`${name} = ${value}`); // key1=value1, потом key2=value2
// // // }

// // formData.forEach((value, name) => {
// //   const filledFormData = { name: value };
// //   console.log(filledFormData);
// // });



// import throttle from 'lodash.throttle';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
//   input: document.querySelector('input'),
// };

// const STORAGE_KEY = 'feedback-form-state';

// const formData = {};

// populateTextareaInput();

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// refs.form.addEventListener('input', throttle(onInput, 500));

// function onFormSubmit(event) {
//   event.preventDefault();
//   event.target.reset();
  
//   localStorage.getItem(STORAGE_KEY);
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(event) {
//   const message = event.target.value;
//   formData[event.target.name] = message;

//   toStringifyFormData(formData);
// }

// function onInput(event) {
//   const email = event.target.value;
//   formData[event.target.name] = email;

//   toStringifyFormData(formData);
// }

// function populateTextareaInput() {
//   let savedMassage = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   if (savedMassage) {
//     refs.input.value = savedMassage.email;
//     refs.textarea.value = savedMassage.message;
//   }
// }

// function toStringifyFormData() {
//   const formDataStr = JSON.stringify(formData);
//   localStorage.setItem(STORAGE_KEY, formDataStr);
// }