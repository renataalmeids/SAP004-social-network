import { createPostTemplate } from './main.js'

const db = firebase.firestore();

export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.hash = '#login';
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};

export const createPost = (text) => {
  db.collection('posts')
    .add({
      user: `${firebase.auth().currentUser.email}`,
      text: `${text}`,
      data: '18/02/2020',
      likes: 0,
    })
    .then((doc) => {
      console.log(doc.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const readPost = () => {
  db.collection('posts')
    .onSnapshot((snapshot) => {
      const postList = [];
      snapshot.forEach((doc) => postList.push(doc.data().text));

      // colocar isso dentro de uma função do main e executar aqui:
      console.log(postList);
      document.querySelector('#post-area').innerHTML = '';
      postList.forEach(post => createPostTemplate(post));
    });
};