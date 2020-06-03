import { example } from './data.js';

export const configurations = () => {
    document.querySelector('#root').textContent = example('Configurações');
};