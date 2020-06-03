import { example } from './data.js';

// Variáveis globais:
const main = document.querySelector('#root');

const createTags = (tag) => document.createElement(tag);
const appendTags = (parentNode, childNode) => parentNode.appendChild(childNode);


// Criar elementos da página:
const createElementsPage = () => {
  // lista de tags utilizadas
  const tagsTypes = ['div', 'img', 'p', 'form', 'input', 'button'];

  const pageContainer = createTags(tagsTypes[0]);
  const logotypeContainer = createTags(tagsTypes[0]);
  const btnAreaContainer = createTags(tagsTypes[0]);
  const logotypeIcon = createTags(tagsTypes[1]);
  const googleIcon = createTags(tagsTypes[1]);
  const registerText = createTags(tagsTypes[2]);
  const logotypeText = createTags(tagsTypes[2]);
  const form = createTags(tagsTypes[3]);
  const emailInput = createTags(tagsTypes[4]);
  const passwordInput = createTags(tagsTypes[4]);
  const loginBtn = createTags(tagsTypes[5]);
  const googleBtn = createTags(tagsTypes[5]);

  appendTags(main, pageContainer);
  // Elementos da logo
  appendTags(logotypeContainer, logotypeIcon);
  appendTags(logotypeContainer, logotypeText);
  appendTags(pageContainer, logotypeContainer);
  // Elementos do form
  appendTags(form, emailInput);
  appendTags(form, passwordInput);
  appendTags(pageContainer, form);
  // Botões
  appendTags(btnAreaContainer, loginBtn);
  appendTags(btnAreaContainer, googleBtn);
  appendTags(btnAreaContainer, googleIcon);
  appendTags(btnAreaContainer, registerText);
  appendTags(pageContainer, btnAreaContainer);
};


const setStyleOnElements = () => {
  document.getElementsByTagName('p')[0].textContent = 'Seja bem-vinde!';
  document.getElementsByTagName('p')[1].innerHTML = `Se não tem uma conta, <a href="
  https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp"> registre-se! </a>`;
  document.getElementsByTagName('input')[0].placeholder = 'E-mail';
  document.getElementsByTagName('input')[1].placeholder = 'Senha';
  document.getElementsByTagName('button')[0].innerHTML = 'Entrar';
  document.getElementsByTagName('button')[1].innerHTML = 'Acesse com';


};

const home = () => {
  // Executar funções
  createElementsPage();
  setStyleOnElements();
};

export { home };