class Keyboard {
  constructor() {
    this.properties = {
      capsLock: false,
      textValue: '',
    };
  }

  init() {
    // Create main elements
    this.wrapper = document.createElement('main');
    this.title = document.createElement('h1');
    this.text = document.createElement('textarea');
    this.keyboard = document.createElement('div');
    // const keyboardRow = document.createElement('div');
    this.info = document.createElement('p');

    // Setup main elements
    this.wrapper.classList.add('wrapper');

    this.title.classList.add('title');
    this.title.textContent = 'Virtual keyboard';

    this.text.classList.add('text');
    this.keyboard.classList.add('keyboard');
    // keyboardRow.classList.add('keyboard__row');

    this.info.classList.add('info');
    // eslint-disable-next-line operator-linebreak
    this.info.textContent =
      'To switch ENG/РУС input methods, press "Alt"+"Shift".';

    // Add to DOM
    // keyboardRow.appendChild(this.createKeys());
    // keyboard.appendChild(keyboardRow);

    this.wrapper.appendChild(this.title);
    this.wrapper.appendChild(this.text);
    this.wrapper.appendChild(this.keyboard);
    this.wrapper.appendChild(this.info);

    document.body.appendChild(this.wrapper);
  }

  // createKeys() {
  // const fragment = document.createDocumentFragment();
  //   const keyLayout = [
  //     [
  //       '`',
  //       '1',
  //       '2',
  //       '3',
  //       '4',
  //       '5',
  //       '6',
  //       '7',
  //       '8',
  //       '9',
  //       '0',
  //       '-',
  //       '=',
  //       'Backspace',
  //     ],
  //     ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  //     [
  //       'CapsLk',
  //       'a',
  //       's',
  //       'd',
  //       'f',
  //       'g',
  //       'h',
  //       'j',
  //       'k',
  //       'l',
  //       ';',
  //       "'",
  //       'Enter',
  //     ],
  //     [
  //       'LShift',
  //       'z',
  //       'x',
  //       'c',
  //       'v',
  //       'b',
  //       'n',
  //       'm',
  //       ',',
  //       '.',
  //       '/',
  //       'Up',
  //       'RShift',
  //     ],
  //     [
  //       'LCtrl',
  //       'Win',
  //       'LAlt',
  //       'Space',
  //       'RAlt',
  //       'RCtrl',
  //       'Left',
  //       'Down',
  //       'Right',
  //     ],
  //   ];

  //   keyLayout.forEach((line) => {
  //     line.forEach((key) => {
  //       const keyElement = document.createElement('button');

  //       // Add attributes/classes
  //       keyElement.setAttribute('type', 'button');
  //       keyElement.classList.add('keyboard__key');

  //       switch (key) {
  //         case 'Backspace':
  //           keyElement.classList.add('keyboard__key--wide');

  //           keyElement.addEventListener('click', () => {
  //             this.properties.value = this.properties.value.slice(0, -1);
  //             this.triggerEvent('oninput');
  //           });

  //           break;

  //         case 'CapsLk':
  //           keyElement.classList.add(
  //             'keyboard__key--wide',
  //             'keyboard__key--activatable',
  //           );

  //           keyElement.addEventListener('click', () => {
  //             this.toggleCapsLock();
  //             keyElement.classList.toggle(
  //               'keyboard__key--active',
  //               this.properties.capsLock,
  //             );
  //           });

  //           break;

  //         case 'Enter':
  //           keyElement.classList.add('keyboard__key--wide');

  //           keyElement.addEventListener('click', () => {
  //             this.properties.value += '\n';
  //             this.triggerEvent('oninput');
  //           });

  //           break;

  //         case 'Space':
  //           keyElement.classList.add('keyboard__key--extra-wide');

  //           keyElement.addEventListener('click', () => {
  //             this.properties.value += ' ';
  //             this.triggerEvent('oninput');
  //           });

  //           break;

  //         default:
  //           keyElement.addEventListener('click', () => {
  //             this.properties.value += this.properties.capsLock
  //               ? key.toUpperCase()
  //               : key.toLowerCase();
  //             this.triggerEvent('oninput');
  //           });
  //       }

  //       keyElement.textContent = key;
  //       fragment.appendChild(keyElement);
  //     });

  //     fragment.appendChild(document.createElement('br'));
  //   });

  // return fragment;
  // }

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
