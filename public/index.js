import { home } from './pages/home/main.js';
import { configurations } from './pages/configurations/main.js';
import { personalFeed } from './pages/personalFeed/main.js';
import { generalFeed } from './pages/generalFeed/main.js';


// Mudanças de rotas e carregamento dos templates de cada rota:
const init = () => {
  window.addEventListener('hashchange', () => {
    switch (window.location.hash) {
      case '#login':
        home();
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
  });
};

// Carregamento da página:
window.addEventListener('load', () => {
  home();
  init();
});