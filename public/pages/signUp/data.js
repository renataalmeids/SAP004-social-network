// Página de Registro (SignUp)

export const register = (email, password) => firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    window.location.hash = ('#login');
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
  });
