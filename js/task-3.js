const textInput = document.querySelector(`#name-input`);
const outPut = document.querySelector(`#name-output`);

textInput.addEventListener('input', onInput);

function onInput(event) {
  outPut.textContent = event.currentTarget.value.trim();

  if (!event.currentTarget.value.trim()) {
    outPut.textContent = 'Anonymous';
  }
}

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".
