import { logOut } from './data.js';

export const generalFeed = () => {
  document.querySelector('#root').innerHTML = "";

  const containerFeed = document.createElement('div');
  containerFeed.innerHTML = `
  <p>Bem-vinde ao feed geral da nossa rede social!</p>
  <br><br>
  <button class='btn signOut'>Sair</button>
  `;

  containerFeed.querySelector('.signOut').addEventListener('click', (event) => {
    event.preventDefault();
    logOut();
  });

  return document.querySelector('#root').appendChild(containerFeed);
}