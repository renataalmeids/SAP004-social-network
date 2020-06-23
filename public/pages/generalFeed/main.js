import {
  logOut,
  createPost,
  readPost,
  editPost,
  deletePost,
  sendImageToDatabase,
  likePosts,
} from './data.js';

// Funções auxiliares chamadas na criação do template da página (function generalFeed())
const setLogOutOnButton = () => {
  document.querySelector('.signOut').addEventListener('click', (event) => {
    event.preventDefault();
    logOut();
  });
};

const getTextToPublish = () => {
  document.querySelector('#publish-btn').addEventListener('click', () => createPost(document.querySelector('#postText').value));
};

const clearPostArea = () => {
  document.querySelector('#post-area').innerHTML = '';
};

const resetPost = (postList) => {
  clearPostArea();
  postList.forEach(loadPostTemplate);
};

const deleteEvent = (postBox, code) => {
  const deleteBtn = postBox.querySelector(`button[data-id="${code}"]`);
  deleteBtn.addEventListener('click', () => deletePost(code));
};

// Manipulação da publicação de imagens:
const showUrlOnPublishArea = (urlFile) => {
  // quando a pessoa clicar na foto abrir a url e ver foto real
  document.querySelector('#postText').value = `Imagem: ${urlFile}`;
};

const uploadImage = () => {
  document.querySelector('.publish-img-form-box').style.opacity = 1;
  document.querySelector('#image_uploads').onchange = event => sendImageToDatabase(event.target.files[0], showUrlOnPublishArea);
};

const listenUpLoadImgClick = () => document.querySelector('#publish-img-btn').addEventListener('click', uploadImage);


//--------------------------------------------

// Função executada com o carregamento da página:
export const generalFeed = () => {
  // Criar elementos gerais da página
  // Os posts individuais serão criados de forma dinâmica dentro da tag <main #post-area>
  document.querySelector('#root').innerHTML = '';
  const containerFeed = document.createElement('div');
  containerFeed.innerHTML = `
  <header>
    <nav class='navbar-page-feed'>
      <div>
        <button class='circle orange'>
        <img class='icon-circle' src='../../assets/settings.png'>
        </button>
      </div>
      <figure class='navbar-page-item-logo'>
        <img class='icon-logo' src="../../assets/logo_small.jpg" alt="Logotipo">
        <span>Rainbow!</span>
      </figure>
      <div>
        <button class='circle signOut yellow'>
        <img class='icon-circle' src='../../assets/logout.png'>
        </button>
      </div>
    </nav>
  </header>
  <div class='box-feed'>
    <section class='profile-area'>
      <div class='profile-area-theme'></div>
        <figure><img class='photo'></figure>
        <div class='name-profile-area'>
          <h3 id='name-user'></h3>
          <h4>[Descrição]</h4>
        </div>
    </section>
      <div class='share-and-post'>
        <section class='share-area'>
          <textarea id='postText' placeholder='O que você quer compartilhar?'></textarea>
          <div class='share-area-buttons'>
            <button id='publish-img-btn' class='circle violet'><img class='icon-circle' src='../../assets/camera.png'></button>
            <div class='publish-img-form-box transparency'>
              <form method="post">
                <input type="file" id="image_uploads" accept=".jpg, .jpeg, .png">
               </form>
            </div>
            <button id='publish-btn' class='btn btn-small purple'>Publicar</button>
          </div>
        </section>
        <section id='post-area' class='posts-container'>
        </section>
      </div>
  </div>
  `;
  document.querySelector('#root').appendChild(containerFeed);

  listenUpLoadImgClick();

  const userName = () => {
    const name = firebase.auth().currentUser.displayName;
    const getUserName = document.querySelector('#name-user');
    getUserName.innerHTML = name;
    console.log(name);
    /* .then((name) => {
        console.log(name);

      })
      .catch(() => console.log('não deu certo')); */
  };

  // Chamada das funções
  setLogOutOnButton();
  listenUpLoadImgClick();
  getTextToPublish();
  readPost(resetPost);
  userName();
};


// -------------------------------

// Funções auxiliares para edição das postagens chamadas na criação dos posts individuais
const getValuesFromEditedPost = (listener, newText, postID) => listener.addEventListener('click', () => {
  editPost(newText.value, postID.value);
});

// Criação dos templates das postagens individuais
const loadPostTemplate = ({
  code,
  user,
  data,
  text,
  likes,
}) => {
  const postBox = document.createElement('div');
  postBox.innerHTML = `
  <data value=${code}></data>
  <header class='title-post-box'>
    <div>
      <div>${user}</div>
      <div>${data}</div>
    </div>
    <div>
      <button class='delete-btn' data-id='${code}'><img class='post-area-icon-del' src="../../assets/quit.png" alt="Edit Icon">
      </button>
    </div>
  </header>

  <textarea disabled class='text post-area-text'>${text}</textarea>
  <div class='save-btn-area display-none''>
    <button class='edit-save-btn' type='button'>Salvar</button>
  </div>
  
  <footer class='footer-post-box'>
    <div><img class='post-area-icon' src="../../assets/comments.png" alt="Comments Icon"></div>
    <div><img class='post-area-icon' id='like-icon' src="../../assets/like.png" alt="Like Icon"></div>
    <div class='post-area-icon' id='likes-counter'>${likes.length}</div>
    <div class='edit-btn'><img class='post-area-icon' src="../../assets/pencil.png" alt="Edit Icon"></div>
  </footer>
  `;
  postBox.querySelector('#like-icon').addEventListener('click', () => likePosts(code));

  if (user !== firebase.auth().currentUser.email) {
    postBox.querySelector('.delete-btn').classList.add('visibility');
    postBox.querySelector('.edit-btn').classList.add('visibility');
  }
  deleteEvent(postBox, code);
  postBox.classList.add('post-area');
  document.querySelector('#post-area').appendChild(postBox);
  // Programando manipulação dos elementos do template na edição das postagens:
  postBox.querySelector('.edit-btn').addEventListener('click', () => {
    postBox.querySelector('.text').removeAttribute('disabled');
    postBox.querySelector('.save-btn-area').classList.remove('display-none');
    getValuesFromEditedPost(postBox.querySelector('.edit-save-btn'), postBox.querySelector('.text'), postBox.getElementsByTagName('data')[0]);
  });
};
