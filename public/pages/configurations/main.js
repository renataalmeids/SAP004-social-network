import { example } from './data.js';

const configurations = () => {
  document.querySelector('#root').textContent = example('Configurações');
};
export { configurations };