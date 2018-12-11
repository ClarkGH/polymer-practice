import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
// import _ from 'lodash';

// function component() {
//   let element = document.createElement('h1');

//   element.innerHTML = _.join(['Hello', 'World!'], ' ');

//   return element;
// }

// document.body.appendChild(component());

class HelloWorld extends PolymerElement {
  constructor() {    
    super();
    this.greeting = 'Hello World!';
  }

  static get template() {
    return html`
      <style>
        div{
          background-color: pink;
        }
      </style>

      <h1>[[greeting]]</h1>
    `
  }

  static get properties() {
    return {
      greeting: {
        type: String
      }
    }
  }

}

customElements.define('hello-world', HelloWorld)