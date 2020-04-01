/* eslint-disable import/extensions */
import { keyboardFragment, keyboardKeys } from './keyboardLayout.js';

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
    this.keyboard.appendChild(keyboardFragment);
    this.showLanguage(this.lang);

    this.wrapper.appendChild(this.title);
    this.wrapper.appendChild(this.text);
    this.wrapper.appendChild(this.keyboard);
    this.wrapper.appendChild(this.info);

    document.body.appendChild(this.wrapper);

    this.createListeners();
  }

  createListeners() {
    document.addEventListener('keydown', (e) => {
      document.getElementById(e.code).classList.add('active');

      if (e.altKey && e.shiftKey) {
        this.lang = this.lang === 'ru' ? 'en' : 'ru';
        localStorage.setItem('lang', this.lang);
        this.showLanguage(this.lang);
      }

      e.stopPropagation();
      e.preventDefault();
    });

    document.addEventListener('keyup', (e) => {
      document.getElementById(e.code).classList.remove('active');

      e.stopPropagation();
      e.preventDefault();
    });
  }

  showLanguage(lang) {
    this.keyboard.querySelectorAll('.keyboard__key').forEach((e) => {
      e.textContent = keyboardKeys[e.id][lang];
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const keyboard = new Keyboard();
  keyboard.init();
});
