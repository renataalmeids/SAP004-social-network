// Data da publicação:
const getData = () => {
  const data = new Date();
  return data.toLocaleString();
};

export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.hash = '#login';
    })
    .catch(error => error);
};

// Função que cria os documentos (posts) no banco de dados
export const createPost = (postText) => {
  firebase
    .firestore()
    .collection('posts')
    .add({
      user: `${firebase.auth().currentUser.email}`,
      text: postText,
      data: getData(),
    })
    .then((doc) => {
      console.log('Document written with ID: ', doc.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};


export const readPost = (showInfosOnTemplate) => {
  firebase
    .firestore()
    .collection('posts')
    .orderBy('data', 'desc')
    .onSnapshot((snapshot) => {
      const post = [];
      snapshot.forEach((doc) => {
        const { user, data, text } = doc.data();
        post.push({
          user,
          data,
          text,
          code: doc.id,
        });
      });
      showInfosOnTemplate(post);
    });
};

export const editPost = (newText, postID) => {
  console.log(postID);
  firebase
    .firestore()
    .collection('posts')
    .doc(postID).update({ text: newText })
    .then(() => console.log('Postagem editada com sucesso'))
    .catch(() => console.log('Ops!Postagem não editada'));
};

export const deletePost = (id) => {
  firebase.firestore().collection('posts').doc(id).delete().then(function () {
    console.log("Document successfully deleted!");
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });
};

export const sendImageToDatabase = (file) => {
  const ref = firebase.storage().ref('publishedImages-repository');
  ref.child(file.name).put(file)
    .then((snapshot) => {
      // atrbuir id unico ao file
      // associar file ao usuario
      // passar a função que coloca o file no feed de publicação como callback

      console.log('enviei esse snapshot para o bd:', snapshot.metadata.name);
    })
    .catch();
}