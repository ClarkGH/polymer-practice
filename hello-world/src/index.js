import _ from 'lodash';

function component() {
  let element = document.createElement('h1');

  element.innerHTML = _.join(['Hello', 'World!'], ' ');

  return element;
}

document.body.appendChild(component());