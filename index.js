// Write your code here!

const mainElement = document.querySelector('#main');
mainElement.remove();

const newHeader = document.createElement('h1');

newHeader.id = 'victory';
newHeader.textContent = 'Michael is the champion';

document.body.appendChild(newHeader);
