import { generalFeed } from '../generalFeed/main.js';

export const signIn = (email, password, inError) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      window.location.hash = '#generalFeed';
      return result;
    })
    .catch(error => inError(error));
};

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      window.location.hash = '#generalFeed';
      return result;
    }).catch(error => error);
};
