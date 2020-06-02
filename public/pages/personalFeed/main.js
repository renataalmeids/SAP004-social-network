import { example } from './data.js';

export const personalFeed = () => {
    document.querySelector('#root').textContent = example('Feed Pessoal');
};