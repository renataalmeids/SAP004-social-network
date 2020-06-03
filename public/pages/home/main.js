import { example } from './data.js';

const createElements = () => {
  // container da página
  const main = document.querySelector('#root');

  // criar container geral do login
  const generalContainer = document.createElement('div');

  // anexar container ao root
  main.appendChild(generalContainer);
  generalContainer.style.backgroundColor = 'silver';

  // criar container do logotipo
  const logotypeContainer = document.createElement('div');

  // img da logo
  const logotypeIcon = document.createElement('img');
  logotypeIcon.src = '';
  logotypeIcon.style.width = '25px';
  logotypeIcon.style.height = '25px';
  logotypeIcon.style.display = 'block';

  // texto da logo
  const logotypeText = document.createElement('div');
  logotypeText.textContent = 'Seja bem-vinde!';

  // anexar container da logo
  logotypeContainer.appendChild(logotypeIcon);
  logotypeContainer.appendChild(logotypeText);
  generalContainer.appendChild(logotypeContainer);

  // criar form
  const form = document.createElement('form');

  // criar inputs
  const emailInput = document.createElement('input');
  const passwordInput = document.createElement('input');

  emailInput.placeholder = 'E-mail';
  passwordInput.placeholder = 'Senha';

  form.appendChild(emailInput);
  form.appendChild(passwordInput);

  generalContainer.appendChild(form);

  // área de botões
  const btnAreaContainer = document.createElement('div');
  const loginBtn = document.createElement('button');
  const googleBtn = document.createElement('button');
  const googleIcon = document.createElement('img');
  const registerText = document.createElement('p');
  registerText.innerHTML = `Se não tem uma conta, <a href="
https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp"> registre-se! </a>`;

  // Propriedade dos botões
  loginBtn.innerHTML = 'Entrar';
  googleBtn.innerHTML = 'Acesse com';
  googleIcon.src = '';
  googleIcon.style.width = '25px';
  googleIcon.style.height = '25px';
  googleIcon.style.display = 'block';

  // anexar botões
  btnAreaContainer.appendChild(loginBtn);
  btnAreaContainer.appendChild(googleBtn);
  btnAreaContainer.appendChild(googleIcon);
  btnAreaContainer.appendChild(registerText);
  generalContainer.appendChild(btnAreaContainer);
};

const home = () => {
  // Executar funções
  createElements();

  const setStylesOnElements = () => {
    // declaração;
    // colocar o ID e as classes nos elementos
  };
};

export { home };