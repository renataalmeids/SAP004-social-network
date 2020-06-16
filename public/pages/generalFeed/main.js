import { logOut, createPost, readPost, editPost } from './data.js';


// Funções chamadas na criação do template da página (function generalFeed())
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

export const generalFeed = () => {
  // Criar elementos gerais da página
  // Os posts individuais serão criados de forma dinâmica dentro da tag <main #post-area>
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

// Função de edição das postagens chamadas na criação de cada post individual (function loadPostTemplate)
const getValuesToNewPost = (listener, newText, postID) => listener.addEventListener('click', () => {
  editPost(newText.value, postID.value);
});

// Tag data com código único de cada post no bd. Essa tag não é renderizada na tela.
export const loadPostTemplate = (code, user, data, text) => {
  const postBox = document.createElement('div');
  postBox.innerHTML = `
  <data value=${code}></data>
  <header class='title-post-box'>
   <div>${user}</div>
  <div>${data}</div></header>
  <div>
  <input class='text' type=text value=${text} disabled><button type='button' class='save-btn display-none'>Salvar</button>
  </div>
  <footer class='footer-post-box'>
  <div>Curtidas</div>
  <div>Comentários</div>
  <div><button class='edit-btn'>Editar<buttton></div>
  <div>Excluir</div>
  </footer>
  `;
  postBox.classList.add('post-area');
  document.querySelector('#post-area').appendChild(postBox);

  // Programando manipulação dos elementos do template na edição das postagens:
  postBox.querySelector('.edit-btn').addEventListener('click', () => {
    postBox.querySelector('.text').removeAttribute('disabled');
    postBox.querySelector('.save-btn').classList.remove('display-none');
    getValuesToNewPost(postBox.querySelector('.save-btn'), postBox.querySelector('.text'), postBox.getElementsByTagName('data')[0]);
  });
};