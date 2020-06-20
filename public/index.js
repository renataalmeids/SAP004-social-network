// ponto de entrada da aplicação
import { home } from './pages/home/main.js';
import { configurations } from './pages/configurations/main.js';
import { personalFeed } from './pages/personalFeed/main.js';
import { generalFeed } from './pages/generalFeed/main.js';
import { signUp } from './pages/signUp/main.js';

window.addEventListener('load', () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      window.location.hash = '#generalFeed';
    } else {
      console.log('nao user');
    }
  });
});


window.addEventListener('hashchange', () => {
  switch (window.location.hash) {
    case '#login':
      home();
      break;
    case '#signup':
      signUp();
      break;
    case '#personalFeed':
      personalFeed();
      break;
    case '#generalFeed':
      generalFeed();
      break;
    case '#configurations':
      configurations();
      break;
    default:
      home();
  }
})