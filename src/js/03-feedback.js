import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailField = form.querySelector('input[name="email"]');
const messageField = form.querySelector('textarea[name="message"]');


const saveFormState = () => {
    const formState = {
      email: emailField.value,
      message: messageField.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  }

  const fillFormState = () => {
    const formState = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (formState) {
      emailField.value = formState.email;
      messageField.value = formState.message;
    }
  }

  const clearFormState = () => {
    localStorage.removeItem('feedback-form-state');
    emailField.value = '';
    messageField.value = '';
  }

  emailField.addEventListener('input', throttle(saveFormState, 500));
  messageField.addEventListener('input', throttle(saveFormState, 500));

  fillFormState();

  form.addEventListener('submit', event => {
    event.preventDefault();
    const formState = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(formState);
    clearFormState();
    });
