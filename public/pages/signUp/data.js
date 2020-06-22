export const register = (name, email, password, onError) => firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then((cred) => {
    window.location.hash = ('#login');
    cred.user.updateProfile({ displayName: name })
      .then(() => {
        console.log('thalita');
      });
  })
  .catch(error => onError(error));
