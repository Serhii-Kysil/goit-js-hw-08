const throttle = require('lodash.throttle');

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  //Зберігаємо дані кожні 500мс
  const saveStateToLocalStorage = throttle(() => {
    const state = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(state));
  }, 500);
  //Якзо у сховищу були дані, відновлюємо їх після перезавантаження сторінки
  const loadStateFromLocalStorage = () => {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
      const state = JSON.parse(savedState);
      emailInput.value = state.email;
      messageInput.value = state.message;
    }
  };
  //Очистка форми
  const clearLocalStorageAndForm = () => {
    localStorage.removeItem('feedback-form-state');
    form.reset();
  };

  form.addEventListener('input', () => {
    saveStateToLocalStorage();
  });

  //Відправляємо дані з форми по сабміту
  form.addEventListener('submit', event => {
    event.preventDefault();
    console.log('Form submitted with values:', {
      email: emailInput.value,
      message: messageInput.value,
    });
    clearLocalStorageAndForm();
  });

  loadStateFromLocalStorage();
});
