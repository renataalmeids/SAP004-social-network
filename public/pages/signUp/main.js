export const signUp = () => {
  const main = document.getElementById('root');
  main.innerHTML = '';
  const containerSignUp = document.createElement('div');
  containerSignUp.innerHTML = `
  <h2>Rainbow</h2>
  <h3>Seja bem vinde!</h3>
  <form method='post'>
  <input type="text" placeholder="Insira seu nome" id="user-name" class='loginArea'>
  <input type="email" placeholder="Insira um e-mail" id="register-email" class="loginArea">
  <input type="password" placeholder="Insira uma senha" id="register-passwrd">
  <button>Cadastrar</button>
  <p>ou</p>
  <button>Cadastre-se com o Google</button>
  </form>
  `;
  return main.appendChild(containerSignUp);
};
