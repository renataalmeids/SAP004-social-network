import { generalFeed } from '../generalFeed/main.js';


export const signIn = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      window.location.hash = '#generalFeed';
      console.log(result);
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(error)  
      if(errorCode ==='auth/user-not-found'){
        return 'usuário não encontrado'
        }else if(errorCode === 'auth/wrong-password'){
          return 'senha inválida'
      }
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