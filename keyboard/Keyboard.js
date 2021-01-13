const VKeyboard = {
  elements: {
    main: null,
    keysContainer: null,
    searchInput: null,
    keys: [],
  },

  keyLayout: {
    'en': {
      'base': {
        'Digit1': "1",
        'Digit2': "2",
        'Digit3': "3",
        'Digit4': "4",
        'Digit5': "5",
        'Digit6': "6",
        'Digit7': "7",
        'Digit8': "8",
        'Digit9': "9",
        'Digit0': "0",
        'Backspace': "backspace",
        'CapsLock': "capslock",
        'KeyQ': "q",
        'KeyW': "w",
        'KeyE': "e",
        'KeyR': "r",
        'KeyT': "t",
        'KeyY': "y",
        'KeyU': "u",
        'KeyI': "i",
        'KeyO': "o",
        'KeyP': "p",
        'ShiftLeft': "shift",
        'KeyA': "a",
        'KeyS': "s",
        'KeyD': "d",
        'KeyF': "f",
        'KeyG': "g",
        'KeyH': "h",
        'KeyJ': "j",
        'KeyK': "k",
        'KeyL': "l",
        'Semicolon': ";",
        'Quote': "'",
        'Enter': "enter",
        'done': "done",
        'sound': "sound",
        'KeyZ': "z",
        'KeyX': "x",
        'KeyC': "c",
        'KeyV': "v",
        'KeyB': "b",
        'KeyN': "n",
        'KeyM': "m",
        'Comma': ",",
        'Period': ".",
        'Slash': "?",
        'en/ru': "en/ru",
        'Space': "space",
        'ArrowLeft': "arrowleft",
        'ArrowRight': "arrowright"
      },
      'shift': {
        'Digit1': "!",
        'Digit2': "@",
        'Digit3': "#",
        'Digit4': "$",
        'Digit5': "%",
        'Digit6': "^",
        'Digit7': "&",
        'Digit8': "*",
        'Digit9': "(",
        'Digit0': ")",
        'Backspace': "backspace",
        'CapsLock': "capslock",
        'KeyQ': "q",
        'KeyW': "w",
        'KeyE': "e",
        'KeyR': "r",
        'KeyT': "t",
        'KeyY': "y",
        'KeyU': "u",
        'KeyI': "i",
        'KeyO': "o",
        'KeyP': "p",
        'ShiftLeft': "shift",
        'KeyA': "a",
        'KeyS': "s",
        'KeyD': "d",
        'KeyF': "f",
        'KeyG': "g",
        'KeyH': "h",
        'KeyJ': "j",
        'KeyK': "k",
        'KeyL': "l",
        'Semicolon': ":",
        'Quote': "\"",
        'Enter': "enter",
        'done': "done",
        'sound': "sound",
        'KeyZ': "z",
        'KeyX': "x",
        'KeyC': "c",
        'KeyV': "v",
        'KeyB': "b",
        'KeyN': "n",
        'KeyM': "m",
        'Comma': "<",
        'Period': ">",
        'Slash': "?",
        'en/ru': "en/ru",
        'Space': "space",
        'ArrowLeft': "arrowleft",
        'ArrowRight': "arrowright"
      },
    },

    'ru': {
      'base': {
        'Digit1': "1",
        'Digit2': "2",
        'Digit3': "3",
        'Digit4': "4",
        'Digit5': "5",
        'Digit6': "6",
        'Digit7': "7",
        'Digit8': "8",
        'Digit9': "9",
        'Digit0': "0",
        'Backspace': "backspace",
        'CapsLock': "capslock",
        'KeyQ': "й",
        'KeyW': "ц",
        'KeyE': "у",
        'KeyR': "к",
        'KeyT': "е",
        'KeyY': "н",
        'KeyU': "г",
        'KeyI': "ш",
        'KeyO': "щ",
        'KeyP': "з",
        'ShiftLeft': "shift",
        'KeyA': "ф",
        'KeyS': "ы",
        'KeyD': "в",
        'KeyF': "а",
        'KeyG': "п",
        'KeyH': "р",
        'KeyJ': "о",
        'KeyK': "л",
        'KeyL': "д",
        'Semicolon': "ж",
        'Quote': "э",
        'Enter': "enter",
        'done': "done",
        'sound': "sound",
        'KeyZ': "я",
        'KeyX': "ч",
        'KeyC': "с",
        'KeyV': "м",
        'KeyB': "и",
        'KeyN': "т",
        'KeyM': "ь",
        'Comma': "б",
        'Period': "ю",
        'Slash': ".",
        'en/ru': "en/ru",
        'Space': "space",
        'ArrowLeft': "arrowleft",
        'ArrowRight': "arrowright"
      },
      'shift': {
        'Digit1': "!",
        'Digit2': "\"",
        'Digit3': "№",
        'Digit4': ";",
        'Digit5': "%",
        'Digit6': ":",
        'Digit7': "?",
        'Digit8': "*",
        'Digit9': "(",
        'Digit0': ")",
        'Backspace': "backspace",
        'CapsLock': "capslock",
        'KeyQ': "й",
        'KeyW': "ц",
        'KeyE': "у",
        'KeyR': "к",
        'KeyT': "е",
        'KeyY': "н",
        'KeyU': "г",
        'KeyI': "ш",
        'KeyO': "щ",
        'KeyP': "з",
        'ShiftLeft': "shift",
        'KeyA': "ф",
        'KeyS': "ы",
        'KeyD': "в",
        'KeyF': "а",
        'KeyG': "п",
        'KeyH': "р",
        'KeyJ': "о",
        'KeyK': "л",
        'KeyL': "д",
        'Semicolon': "ж",
        'Quote': "э",
        'Enter': "enter",
        'done': "done",
        'sound': "sound",
        'KeyZ': "я",
        'KeyX': "ч",
        'KeyC': "с",
        'KeyV': "м",
        'KeyB': "и",
        'KeyN': "т",
        'KeyM': "ь",
        'Comma': "б",
        'Period': "ю",
        'Slash': ",",
        'en/ru': "en/ru",
        'Space': "space",
        'ArrowLeft': "arrowleft",
        'ArrowRight': "arrowright"
      },
    }
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: "",
    capsLock: false,
    shift: false,
    sound: false,
    lang: "en",
    voice: false,
  },

  updateText(element) {
    this.setText(element.value, currentValue => {
      let selectionStart = this.elements.searchInput.selectionStart;
      let lengthNewText = currentValue.length - element.value.length;
      element.value = currentValue;
      if (lengthNewText >= 0) {
        this.elements.searchInput.selectionStart = this.elements.searchInput.selectionEnd = selectionStart + lengthNewText;
      } else {
        this.elements.searchInput.selectionStart = this.elements.searchInput.selectionEnd = (this.elements.searchInput.selectionStart > 1)
          ? selectionStart - 1 : this.elements.searchInput.selectionStart;
      }
    });
  },

  beep(key) {
    if (this.properties.sound) {
      const snd = new Audio("keyboard/beep_" + key + ".mp3");
      snd.play();
    }
  },

  init(searchInput) {
    this.elements.main = document.createElement("div");
    this.elements.searchInput = searchInput || document.getElementById("search");
    this.elements.keysContainer = document.createElement("div");
    this.elements.main.classList.add("keyboard", "keyboard--hidden");
    this.elements.keysContainer.classList.add("keyboard__keys");
    this.elements.keysContainer.appendChild(this._createKeys());
    this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

    this.elements.main.appendChild(this.elements.keysContainer);
    document.querySelector(".main-container").appendChild(this.elements.main);

    let $this = this;
    this.elements.searchInput.addEventListener("focus", function () {
      $this.updateText(this);
    });

    this.elements.searchInput.addEventListener("keydown", function (event) {
      $this.updateText(this);
      if (document.getElementById(event.code)) {
        document.getElementById(event.code).classList.add("active");
        if (event.code === "ShiftLeft" || event.code === "CapsLock") {
          document.getElementById(event.code).click();
        }
        setTimeout(function () {
          document.getElementById(event.code).classList.remove("active");
          document.getElementById(event.code).classList.add("focus");
        }, 200);
      }
    });

    this.elements.searchInput.addEventListener("keyup", function (event) {
      if (document.getElementById(event.code)) {
        document.getElementById(event.code).classList.add("focus");
        setTimeout(function () {
          document.getElementById(event.code).classList.remove("focus");
        }, 200);
      }
    });
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    };

    let lang = this.properties.lang;
    for (let prop in this.keyLayout[lang]['base']) {
      let key = this.keyLayout[lang]['base'][prop];
      const keyElement = document.createElement("button");
      const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;
      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");
      keyElement.id = prop;

      switch (key) {
        case "backspace":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("backspace");
          keyElement.addEventListener("click", () => {
            let str = this.properties.value;
            this.properties.value = str.substring(0, this.elements.searchInput.selectionStart - 1)
              + str.substring(this.elements.searchInput.selectionStart);
            this.beep(key);
            this._triggerEvent("oninput");
          });
          break;

        case "capslock":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = createIconHTML("keyboard_capslock");
          keyElement.addEventListener("click", () => {
            this.beep(key);
            this._toggleCapsLock();
            keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
          });
          break;

        case "shift":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = "shift";
          keyElement.addEventListener("click", () => {
            this.beep(key);
            this._toggleShift();
            keyElement.classList.toggle("keyboard__key--active", this.properties.shift);
          });
          break;

        case "arrowright":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("keyboard_arrow_right");
          keyElement.addEventListener("click", () => {
            this.beep(this.properties.lang);
            this._goTo("arrowright");
          });
          break;

        case "arrowleft":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("keyboard_arrow_left");
          keyElement.addEventListener("click", () => {
            this.beep(this.properties.lang);
            this._goTo("arrowleft");
          });
          break;

        case "sound":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = createIconHTML("volume_up");
          keyElement.addEventListener("click", () => {
            this._toggleSound();
            this.beep(this.properties.lang);
            keyElement.classList.toggle("keyboard__key--active", this.properties.sound);
          });
          break;

        case "voice":
          break;

        case "en/ru":
        case "ru":
        case "en":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = "en/ru";
          keyElement.addEventListener("click", () => {
            this.beep(this.properties.lang);
            this._toggleLang();
          });
          break;

        case "enter":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("keyboard_return");
          keyElement.addEventListener("click", () => {
            this.beep(key);
            this.properties.value = this.properties.value.substring(0, this.elements.searchInput.selectionStart)
              + "\n" + this.properties.value.substring(this.elements.searchInput.selectionStart);
            this._triggerEvent("oninput");
          });
          break;

        case "space":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--extra-wide");
          keyElement.innerHTML = createIconHTML("space_bar");
          keyElement.addEventListener("click", () => {
            this.beep(this.properties.lang);
            this.properties.value = this.properties.value.substring(0, this.elements.searchInput.selectionStart) + " "
              + this.properties.value.substring(this.elements.searchInput.selectionStart);
            this._triggerEvent("oninput");
          });
          break;

        case "done":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
          keyElement.innerHTML = createIconHTML("check_circle");
          keyElement.addEventListener("click", () => {
            this.beep(this.properties.lang);
            this.close();
            this._triggerEvent("onclose");
          });

          break;

        default:
          keyElement.textContent = key.toLowerCase();
          keyElement.addEventListener("click", () => {
            this.beep(this.properties.lang);
            this.properties.value = this.properties.value.substring(0, this.elements.searchInput.selectionStart)
              + keyElement.textContent + this.properties.value.substring(this.elements.searchInput.selectionStart);
            this._triggerEvent("oninput");
          });

          break;
      }

      fragment.appendChild(keyElement);
      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    }
    return fragment;
  },

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == "function") {
      this.eventHandlers[handlerName](this.properties.value);
    }
    if (handlerName !== "onclose") {
      this.elements.searchInput.focus();
    }
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    const toUpper = this.properties.shift ^ this.properties.capsLock;
    this.elements.keys.forEach((key, index) => {
      if (!~key.getAttribute("class").indexOf("keyboard__key--wide")) {
        key.textContent = (toUpper) ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    });
    document.querySelectorAll(".use-keyboard-input")[0].focus();
  },

  _toggleShift() {
    this.properties.shift = !this.properties.shift;
    const toUpper = this.properties.shift ^ this.properties.capsLock;
    const lang = this.properties.lang;
    const basis = this.properties.shift ? 'shift' : 'base';
    for (let prop in this.keyLayout[lang][basis]) {
      let key = this.keyLayout[lang][basis][prop];
      if (document.getElementById(prop) && !~document.getElementById(prop).getAttribute("class").indexOf("keyboard__key--wide")) {
        document.getElementById(prop).textContent = toUpper ? this.keyLayout[lang][basis][prop].toUpperCase() : this.keyLayout[lang][basis][prop].toLowerCase();
      }
    }
    this.elements.searchInput.focus();
  },

  _toggleSound() {
    this.properties.sound = !this.properties.sound;
    this.elements.searchInput.focus();
  },

  _toggleLang() {
    const oldLang = this.properties.lang;
    const toUpper = this.properties.shift ^ this.properties.capsLock;
    let basis = this.properties.shift ? 'shift' : 'base';
    this.properties.lang = this.properties.lang === 'ru' ? 'en' : 'ru';
    const lang = this.properties.lang;
    for (let prop in this.keyLayout[lang][basis]) {
      let key = this.keyLayout[lang][basis][prop];
      if (key.textContent === oldLang || key.textContent === 'en/ru') {
        key.textContent = lang;
      }
      if (document.getElementById(prop) && !~document.getElementById(prop).getAttribute("class").indexOf("keyboard__key--wide")) {
        document.getElementById(prop).textContent = toUpper ? this.keyLayout[lang][basis][prop].toUpperCase() : this.keyLayout[lang][basis][prop].toLowerCase();
      }
    }
    this.elements.searchInput.focus();
  },

  _goTo(direction) {
    this.elements.searchInput.focus();
    if (direction === 'arrowleft') {
      this.elements.searchInput.selectionStart = this.elements.searchInput.selectionStart > 0 ? (this.elements.searchInput.selectionStart - 1) : this.elements.searchInput.selectionStart;
      this.elements.searchInput.selectionEnd = this.elements.searchInput.selectionStart;
    } else {
      this.elements.searchInput.selectionStart = this.elements.searchInput.selectionStart < this.elements.searchInput.value.length ? (this.elements.searchInput.selectionStart + 1) : this.elements.searchInput.selectionStart;
      this.elements.searchInput.selectionEnd = this.elements.searchInput.selectionStart;
    }
  },

  setText(initialValue, oninput, onclose) {
    this.properties.value = initialValue || "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;

  },

  open() {
    this.elements.main.classList.remove("keyboard--hidden");
  },

  keyboardToggle() {
    if (this.elements.main.classList.contains("keyboard--hidden")) {
      this.open();
      this.updateText(this.elements.searchInput);
    } else {
      this.close();
    }
  },

  close() {
    this.properties.value = "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.add("keyboard--hidden");
  }
};

window.addEventListener("DOMContentLoaded", function () {
  // VKeyboard.init();
});

window.VKeyboard = VKeyboard;
