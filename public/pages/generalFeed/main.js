import { logOut, createPost, readPost } from './data.js';

// Declaração das funções chamadas dentro de generalFeed()
// generalFeed() é a função chamada quando entra nesta #hash
// Please, não mudar a ordem das funções por causa da precedência de execução! =)

const setLogOutOnButton = () => {
  document.querySelector('.signOut').addEventListener('click', (event) => {
    event.preventDefault();
    logOut();
  });
};

const getTextToPublish = () => {
  document.querySelector('#publish-btn').addEventListener('click', () => createPost(document.querySelector('#postText').value));
};

export const clearPostArea = () => {
  document.querySelector('#post-area').innerHTML = '';
};

export const loadPostTemplate = (user, data, text) => {
  const postBox = document.createElement('div');
  postBox.innerHTML = `
  <header class='title-post-box'>
  <div>${user}</div>
  <div>${data}</div></header>
  <div>${text}</div>
  <footer class='footer-post-box'>
  <div>Curtidas</div><div>Comentários</div>
  <div>Editar</div><div>Excluir</div>
  </footer>
  `;
  postBox.classList.add('post-area');
  document.querySelector('#post-area').appendChild(postBox);
};

export const generalFeed = () => {
  document.querySelector('#root').innerHTML = '';
  const containerFeed = document.createElement('div');
  containerFeed.innerHTML = `
  <div class='boxFeed'>
    <header>
      <nav class='navbar'>
          <figure>
              <img class='icon-circle icon-logo' src="../../assets/logo_small.jpg" alt="Logotipo">
          </figure>
          <div>
            <button class='circle yellow'>
            <img class='icon-circle' src='../../assets/settings.png'>
            </button>
            <button class='circle signOut orange'>
            <img class='icon-circle' src='../../assets/logout.png'>
            </button>
          </div>
        </nav>
    </header>
    <section class='profile-area'>
      <figure>
        <img class='photo'>
      </figure>
      <div class='name-profile-area'>
        <h3>Fulane da Silva Sauro
        </h3>
        <h5>Descrição</h5>
      </div>
    </section>
    <section class='share-area'>
      <textarea id='postText' placeholder='O que você quer compartilhar?'></textarea>
      <div class='share-area-buttons'>
        <button class='circle violet'><img class='icon-circle' src='../../assets/camera.png'></button>
        <button id='publish-btn' class='btn btn-small purple'>Publicar</button>    
      </div> 

    </section>

    <section id='post-area'>
      </section>
  </div>
  `;
  document.querySelector('#root').appendChild(containerFeed);

  // Chamada das funções
  setLogOutOnButton();
  getTextToPublish();
  readPost();
};
