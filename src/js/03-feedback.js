import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

storedData();

form.addEventListener('input', throttle(onTextAreaInput, 500));
form.addEventListener('submit', onformSubmit);

const allFormData = {};

function onTextAreaInput() {
  const formData = new FormData(form);
  formData.forEach((value, name) => (allFormData[name] = value));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allFormData));
}

function onformSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}

function storedData() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    const savedFormData = JSON.parse(savedMessage);
    const formElem = form.elements;

    formElem['message'].value = savedFormData.message;
    formElem['email'].value = savedFormData.email;
  }
}
