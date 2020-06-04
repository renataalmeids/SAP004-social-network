import { home } from './pages/home/main.js';
import { configurations } from './pages/configurations/main.js';
import { personalFeed } from './pages/personalFeed/main.js';
import { generalFeed } from './pages/generalFeed/main.js';

// Escutar mudanças de página e direcionar o fluxo para página selecionada:
const init = () => {
  window.addEventListener('hashchange', () => {
    // estrutura de decisão:
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

// Com o carregamento da página:
window.addEventListener('load', () => {
// executar a criação do template da home:
  home();
  // executar o 'escutador' de mudança de #:
  init();
});
