export const example = page => `Eu estou na página ${page}`;
export const registro = (email, senha) => {
firebase.auth().createUserWithEmailAndPassword(email, senha).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    });
}