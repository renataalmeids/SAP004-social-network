export const register = (email, password) => firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    window.location.hash = ('#login');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
