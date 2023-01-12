// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';
// const form = document.querySelector('.feedback-form');

// storedData();

// form.addEventListener('input', throttle(onTextAreaInput, 500));
// form.addEventListener('submit', onformSubmit);

// const allFormData = {};

// function onTextAreaInput() {
//   const formData = new FormData(form);
//   formData.forEach((value, name) => (allFormData[name] = value));
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(allFormData));
// }

// function onformSubmit(evt) {
//   evt.preventDefault();
//   evt.currentTarget.reset();
//   console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
//   localStorage.removeItem(STORAGE_KEY);
// }

// function storedData() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     const savedFormData = JSON.parse(savedMessage);
//     const formElem = form.elements;

//     formElem['message'].value = savedFormData.message;
//     formElem['email'].value = savedFormData.email;
//   }
// }

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(presistedData, 500));

storedData();

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, name) => console.log(value, name));
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});

function presistedData(evt) {
  let presistedData = localStorage.getItem(STORAGE_KEY);
  presistedData = presistedData ? JSON.parse(presistedData) : {};
  presistedData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(presistedData));
}

function storedData() {
  let presistedData = localStorage.getItem(STORAGE_KEY);
  if (presistedData) {
    presistedData = JSON.parse(presistedData);
    Object.entries(presistedData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
