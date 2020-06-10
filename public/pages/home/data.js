export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    window.location.hash = '#generalFeed';
    const token = result.credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
  });
};
