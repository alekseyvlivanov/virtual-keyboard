# RSS Виртуальная клавиатура

## Задание

#### Вам нужно создать виртуальную клавиатуру наподобие такой:

![](https://i.imgur.com/MUYRlDL.png)

### Функциональные требования:

- дизайн — на ваше усмотрение
- изначально файл index.html должен быть пустым (все необходимые элементы генерируются с использованием JS)
- нажатие на кнопкy физической клавиатуры должно подсвечивать нажатую кнопку на виртуальной:
  ![](https://i.imgur.com/yU70dGz.png)  
  **Может быть различия в нажатиях на кнопки клавиатуры для разных операционных систем: windows и Mac OS. Что бы избежать ошибок необходимо на странице с клавиатурой указать в какой OS создавалась клавиатура.**
- Если нажатие происходит на несколько кнопок, то подсвечиваются все нажатые кнопки (исключений нет и для ctrl-alt-shift):
  ![](https://i.imgur.com/5sg3wmF.png)
- виртуальная клавиатура должна уметь переключаться между русской и английской раскладками (сочетание клавиш — на ваше усмотрение), при этом на кнопках должны отображаться символы выбранного языка:
  ![](https://i.imgur.com/SRvkXxc.png)
- выбранный язык должен сохраняться после перезагрузки страницы. Кнопки для смены языка должны быть указаны на странице c клавиатурой, что бы было понятно как проверяющему поменять язык на клавиатуре
- анимация нажатия на кнопку
- клики по кнопкам мышкой на виртуальной клавиатуре или нажатие на кнопки физической клавиатуры выводят символы в инпут(textarea), расположенный на странице над клавиатурой. Нажатие стрелок вниз-вверх-влево-вправо либо выводят соответствующую стрелочку в инпут, либо реализуют навигацию по инпуту, нажатие на `enter` должно осуществлять перевод каретки, `tab` создает горизонтальный отступ, при нажатии остальных функциональных клавиш в инпут символы не выводятся, `backspace` удаляет символ стоящий перед курсором, `del` удаляет символ стоящий после курсора.

### Технические требования

- должно работать в Chrome последней версии
- использование jQuery и других библиотек не допускается
- использование Bootstrap и других CSS фреймворков не допускается
- использование Angular/React/Vue и других фреймворков не допускается
- можно использовать CSS preprocessors
- использовать [eslint (eslint-config-airbnb-base)](https://eslint.org/)
- рабочее приложение должно быть размещено на GitHub Pages (https://pages.github.com/), это произойдет автоматически при создании `gh-pages` бранча. После чего страница будет доступна по адресу вида https://your-github-account.github.io/name-repository

### Требования к коммитам, PR, репозиторию

- название PR должно содержать **the task name** и дополнительную информацию о том, что было реализовано
- PR `не должен содержать закомментированного кода, ненужных файлов, изменений из других веток и сгенерированных файлов`, например `.bundle.js`. Пожалуйста, просмотрите ваши изменения, прежде чем делать PR. Файлы `.editorconfig`, `.gitignore` и т.д. могут быть включены в PR
- Комментарии в PR являются хорошей практикой
- [Как сделать хороший PR](https://github.com/blog/1943-how-to-write-the-perfect-pull-request)

## Критерий оценки:

**Максимальный балл за задание: 110**

`минимальный набор:`

- реализована генерация DOM-элементов и `body` в index.html пустой изначально (может находится только тег `script`): `+20`
- нажатие на кнопку на физической клавиатуре подсвечивает кнопку на виртуальной(проверять следуюет нажатие цифр, букв, знаков припинания, `backspace`, `del`(если она присутствует), `enter`, `shift`, `alt`, `ctrl`, `tab`, `caps lock`, `space`, стрелки вниз-вверх-влево-вправо): `+10`

`стандартный набор:`

- есть переключение между русским и английским языком(сочетание клавиш для переключения языка должно быть указано на странице с клавиатурой), а так же сохранение выбранного языка: `+15`
- клики мышкой по кнопкам на виртуальной клавиатуре или нажатие на кнопки физической
  клавиатуры, выводят символы в инпут(textarea): `+15`

`дополнительный набор:`

- реализована анимация нажатия на кнопку: `+15`

`технические требования:`

- использование в коде фишек стандарта ES6 и выше (classes, деструктуризация и т.д.): `+15`
- использование eslint: `+10`
- требования к репозиторию, коммитам и PR выполнены: `+10`

`штрафы:`

- ошибки в консоли, связанные с исполняемым кодом(ошибки типа `favicon.ico: Failed to load resource: the server responded with a status of 404` не учитываются) или предупреждения eslint-config-airbnb-base: `-15`

## FAQ

https://www.youtube.com/watch?v=1wefQGlnPis&feature=youtu.be

## Материалы по теме:

- [Demo](https://wonderful-swartz-d8b98d.netlify.com/)
- [DOM](http://learn.javascript.ru/document)
- [Video DOM](https://www.youtube.com/watch?v=TewWd-6ZrmE)
- [Event](http://learn.javascript.ru/event-details)
- [Video DOM Events](https://www.youtube.com/watch?v=vcXehC9JgGU&feature=youtu.be)
- [Video DOM & DOM Events](https://www.youtube.com/watch?v=UaCGsLvviCA&index=11&list=PLe--kalBDwjhdXudsOpKooP6q9bAl3rPG)
- [An Introduction To DOM Events](https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/)
- [Keycode](https://keycode.info)
- [Клавиатура](https://learn.javascript.ru/keyboard-events)
- [eslint (eslint-config-airbnb-base)](https://eslint.org/)
