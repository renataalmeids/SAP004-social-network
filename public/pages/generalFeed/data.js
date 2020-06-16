import { loadPostTemplate, clearPostArea } from './main.js'

// Data da publicação:
const getData = () => {
  const data = new Date();
  return data.toLocaleDateString();
};

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

export const createPost = (postText) => {
  firebase
    .firestore()
    .collection('posts')
    .add({
      user: `${firebase.auth().currentUser.email}`,
      text: postText,
      data: getData(),
    })
    .then((doc) => {
      console.log('Document written with ID: ', doc.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const readPost = () => {
  firebase
    .firestore()
    .collection('posts')
    .onSnapshot((snapshot) => {
      clearPostArea();
      snapshot.forEach((doc) => {
        loadPostTemplate(doc.id, doc.data().user, doc.data().data, doc.data().text);
      });
    });
};

export const editPost = (newText, postID) => {
  console.log(postID);
  firebase
    .firestore()
    .collection('posts')
    .doc(postID).update({ text: newText })
    .then(() => console.log('Postagem editada com sucesso'))
    .catch(() => console.log('Ops!Postagem não editada'));
};

// recuperar o id do doc dentro do próprio template-OK
//uOScu6n7I1rV6LFnn0PA
// add eventListener no botao editar

// para reconhecer o elemento clicado e recuperar o id, usar o event.target

// o texto do post aparece dentro do input

// sobrescrever postagem com

// método update do db