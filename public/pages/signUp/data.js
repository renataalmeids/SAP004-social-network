// Página de Registro (SignUp)

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

    
  /* const errorCode = error.code;
    console.log(error)  
    if(errorCode ==='auth/email-already-in-use'){
      return 'e-mail já cadastrado'
      }else if(errorCode === 'auth/invalid-email'){
        return 'e-mail inválido'
      }else if(errorCode === 'auth/weak-password'){
        return 'usuário ou senha não informado'
    }*/
  
  
  
  