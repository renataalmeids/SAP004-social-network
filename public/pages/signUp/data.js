export const register = (email, password, onError) => firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    window.location.hash = ('#login');
  })
  .catch(error => onError(error));