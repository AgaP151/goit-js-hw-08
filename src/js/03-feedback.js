import throttle from 'lodash.throttle';

const inputEL = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');
const FORM_STATE = "feedback-form-state";

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let formData = JSON.parse(localStorage.getItem(FORM_STATE)) || {};
const { email, message } = form.elements;


function onInputData(e) {
  FormData = { email: email.value, message: message.value };
  localStorage.setItem(FORM_STATE   , JSON.stringify(FormData));
}

function onFormSubmit(e) {
    e.preventDefault();
    
}

form.addEventListener("submit", handleSubmit);
function updateForm() {
    if (localStorage.getItem(FORM_STATE)) {
        formData.email = JSON.parse(localStorage.getItem(FORM_STATE)).email;
        formData.message = JSON.parse(localStorage.getItem(FORM_STATE)).message;
        inputEL.value = formData.email;
        messageEl.value = formData.message;
    }
}
function handleSubmit(event) {
    event.preventDefault();

    if (inputEL.value && messageEl.value) {
    console.log(FormData);
    localStorage.clear();
    event.currentTarget.reset();
    formData = {
        email: "",
        message: ""
    }
    }}