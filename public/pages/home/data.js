export const signIn = (email, password, mexirica) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      window.location.hash = '#generalFeed';
      return result;
    })
    .catch(error => mexirica(error));
};

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      window.location.hash = '#generalFeed';
      return result;
    }).catch(error => error);
};
