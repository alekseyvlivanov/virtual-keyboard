/* eslint-disable import/extensions */
import keyboardLayout from './keyboardLayout.js';

class Keyboard {
  constructor() {
    this.caps = localStorage.getItem('caps');
    this.lang = localStorage.getItem('lang') === 'ru' ? 'ru' : 'en';
  }

  init() {
    // Create main elements
    this.wrapper = document.createElement('main');
    this.title = document.createElement('h1');
    this.text = document.createElement('textarea');
    this.keyboard = document.createElement('div');
    const keyboardRow = document.createElement('div');
    this.info = document.createElement('p');

    // Setup main elements
    this.wrapper.classList.add('wrapper');

    this.title.classList.add('title');
    this.title.textContent = 'Virtual keyboard';

    this.text.classList.add('text');
    this.keyboard.classList.add('keyboard');
    keyboardRow.classList.add('keyboard__row');

    this.info.classList.add('info');
    // eslint-disable-next-line operator-linebreak
    this.info.textContent =
      "To switch ENG/РУС input methods, press 'Alt'+'Shift'.";

    // Add to DOM
    this.keyboard.appendChild(this.createKeys(keyboardLayout));

    this.wrapper.appendChild(this.title);
    this.wrapper.appendChild(this.text);
    this.wrapper.appendChild(this.keyboard);
    this.wrapper.appendChild(this.info);

    document.body.appendChild(this.wrapper);
  }

  createKeys(keys) {
    const fragment = document.createDocumentFragment();

    keys.forEach((line) => {
      const keyboardRow = document.createElement('div');
      keyboardRow.classList.add('keyboard__row');

      line.forEach((key) => {
        const keyElement = document.createElement('button');

        // Add attributes/classes
        keyElement.setAttribute('type', 'button');
        keyElement.classList.add('keyboard__key');
        keyElement.classList.add(`keyboard__key_${key.width}`);

        // switch (key) {
        //   case 'Backspace':
        //     keyElement.classList.add('keyboard__key_wide');

        // keyElement.addEventListener('click', () => {
        //   this.properties.value = this.properties.value.slice(0, -1);
        //   this.triggerEvent('oninput');
        // });

        // break;

        // case 'CapsLk':
        //   keyElement.classList.add('keyboard__key_wide');

        // keyElement.addEventListener('click', () => {
        //   this.toggleCapsLock();
        //   keyElement.classList.toggle(
        //     'keyboard__key--active',
        //     this.properties.capsLock,
        //   );
        // });

        // break;

        // case 'Enter':
        //   keyElement.classList.add('keyboard__key--wide');

        // keyElement.addEventListener('click', () => {
        //   this.properties.value += '\n';
        //   this.triggerEvent('oninput');
        // });

        // break;

        // case 'Space':
        //   keyElement.classList.add('keyboard__key--extra-wide');

        // keyElement.addEventListener('click', () => {
        //   this.properties.value += ' ';
        //   this.triggerEvent('oninput');
        // });

        // break;

        // default:
        // keyElement.addEventListener('click', () => {
        //   this.properties.value += this.properties.capsLock
        //     ? key.toUpperCase()
        //     : key.toLowerCase();
        //   this.triggerEvent('oninput');
        // });
        // }

        keyElement.textContent = key[this.lang];
        keyboardRow.appendChild(keyElement);
      });

      fragment.appendChild(keyboardRow);
    });

    return fragment;
  }

  // triggerEvent(handlerName) {
  //   if (typeof this.eventHandlers[handlerName] === 'function') {
  //     this.eventHandlers[handlerName](this.properties.value);
  //   }
  // }

  // toggleCapsLock() {
  //   this.properties.capsLock = !this.properties.capsLock;

  //   this.elements.keys.forEach((key) => {
  //     if (this.properties.capsLock && key.childElementCount === 0) {
  //       // eslint-disable-next-line no-param-reassign
  //       key.textContent = key.textContent.toUpperCase();
  //     } else if (!this.properties.capsLock && key.childElementCount === 0) {
  //       // eslint-disable-next-line no-param-reassign
  //       key.textContent = key.textContent.toLowerCase();
  //     }
  //   });
  // }
}

window.addEventListener('DOMContentLoaded', () => {
  const keyboard = new Keyboard();
  keyboard.init();
});
