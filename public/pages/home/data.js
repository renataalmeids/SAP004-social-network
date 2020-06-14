<<<<<<< HEAD
import { generalFeed } from '../generalFeed/main.js';


export const signIn = (email, password) => {
  return firebase
=======
export const signIn = (email, password, mexirica) => {
  firebase
>>>>>>> 441ce91e7147d42b425ad2a3dff8b837849bef3e
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      window.location.hash = '#generalFeed';
      return result;
    })
<<<<<<< HEAD
    .catch((error) => {
      const errorCode = error.code;
      console.log(error)  
      if(errorCode ==='auth/user-not-found'){
        return 'usuário não encontrado'
        }else if(errorCode === 'auth/wrong-password'){
          return 'senha inválida'
      }
    });
=======
    .catch(error => mexirica(error));
>>>>>>> 441ce91e7147d42b425ad2a3dff8b837849bef3e
};

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      window.location.hash = '#generalFeed';
      return result;
    }).catch(error => error);
};
