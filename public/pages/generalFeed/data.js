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

export const createPost = (text) => {
  firebase
    .firestore()
    .collection('posts')
    .add({
      user: `${firebase.auth().currentUser.email}`,
      text: `${text}`,
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

export const deletePost = (id) => {
  firebase.firestore().collection('posts').doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
};
