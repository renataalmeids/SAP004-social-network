// Aqui serão criados os eventos de Manipulação de DOM e templates
import { example } from './data.js';

export const home = () => {
    document.querySelector('#root').textContent = example('Home');
};