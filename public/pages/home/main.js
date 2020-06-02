import { example } from './data.js';

const home = () => {
  document.querySelector('#root').textContent = example('Home');
};

export { home };