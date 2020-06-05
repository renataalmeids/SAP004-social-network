// Aqui serão criados os eventos de Manipulação de DOM e templates
// import funçãoLoginFirebase from './data.js';

export const home = () => {
  const main = document.getElementById('root');
  main.innerHTML = '';
  const containerLogin = document.createElement('div');
  containerLogin.innerHTML = `
  <h2>Rainbow</h2>
  <h3>Seja bem vinde!</h3>
  <form method='post'>
  <input type='email' placeholder='e-mail' id='emailArea' class='loginArea'>
  <input type='password' placeholder='senha' id='passwordArea' class='loginArea'>
  <button>Entrar</button>
  <p>ou</p>
  <button>Acesse com o Google</button>
  <p>Se não tem um conta, <a href="/#signup">registre-se</a></p>
  </form>
  `;
  return main.appendChild(containerLogin);
};
