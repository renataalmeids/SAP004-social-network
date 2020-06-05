import { example } from './data.js';

export const generalFeed = () => {
    document.querySelector('#root').textContent = example('Feed Geral');
}