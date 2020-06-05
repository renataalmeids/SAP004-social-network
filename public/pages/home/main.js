// Aqui serão criados os eventos de Manipulação de DOM e templates
import { registro } from './data.js';


export const home = () => {
  const container = document.createElement('div');

  container.innerHTML = `
    <form>
      <input id='email' type='text'>
      <input id='senha' type='text'>
      <button id='registro'>registre-se</button>
    </form>
    <div id='greeting-message'></div>
  `;

  const email = container.querySelector('#email');
  const senha = container.querySelector('#senha');
  const registroBtn = container.querySelector('#registro');

  registroBtn.addEventListener('click', (event) => {
    event.preventDefault();
    registro (email.value, senha.value)
  });

  return container;
};
