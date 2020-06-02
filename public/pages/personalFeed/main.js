import { example } from './data.js';

const personalFeed = () => {
  document.querySelector('#root').textContent = example('Feed Pessoal');
};

export { personalFeed }