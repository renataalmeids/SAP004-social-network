import { generalFeed } from '../generalFeed/main.js';


export const signIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      window.location.hash = '#generalFeed';
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};

// signIn com Google
export const signInWithGoogle = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      generalFeed();
    })
    .catch((error) => {
      console.error(error.code);
      console.error(error.message);
    });
};