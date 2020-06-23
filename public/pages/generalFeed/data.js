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


export const createPost = (postText) => {
  firebase
    .firestore()
    .collection('posts')
    .add({
      user: `${firebase.auth().currentUser.email}`,
      text: postText,
      data: getData(),
      url: '',
    });
};


export const readPost = (callbackToManipulatePostList) => {
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
      // a callback é substituída pela função resetPost na chamada da função
      callbackToManipulatePostList(post);
    });
};

export const editPost = (newText, postID) => {
  firebase
    .firestore()
    .collection('posts')
    .doc(postID).update({ text: newText });
};

export const deletePost = (id) => {
  firebase.firestore().collection('posts').doc(id).delete().then(function () {
    console.log("Document successfully deleted!");
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });
};

export const sendImageToDatabase = (file, showUrlOfImagesToPubish) => {
  const ref = firebase.storage().ref('publishedImages-repository');
  ref.child(file.name).put(file)
    .then(() => {
      ref.child(file.name).getDownloadURL()
        .then(url => showUrlOfImagesToPubish(url));
    });
};

export const changeProfileImage = (file, callbackToSetNewImage) => {
  const ref = firebase.storage().ref('profileImages-repository');
  ref.child(file.name).put(file)
    .then((image) => {
      console.log('enviei esse snapshot para o bd:', image.metadata.name);
      ref.child(file.name).getDownloadURL()
        .then((url) => {
          callbackToSetNewImage(url);
          firebase.auth().currentUser
            .updateProfile({
              photoURL: url,
            });
        });
    });
};