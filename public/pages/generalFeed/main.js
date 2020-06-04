import { example } from './data.js';

const generalFeed = () => {
  document.querySelector('#root').textContent = example('Feed Geral');
};

export { generalFeed };