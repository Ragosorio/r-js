const r = (arg) => {
  //DOMContentLoaded
  if (typeof arg === "function") {
    document.addEventListener("DOMContentLoaded", arg);
  }

  let elements = {};

  if (typeof arg === "string") {
    elements = document.querySelector(arg);
  }

  //Funciones automatizadas
  if (typeof arg === "undefined") {
    elements.delay = (callback, delay) => {
      setTimeout(callback, delay);
    };

    elements.random = (x) => {
      let numeroAleatorio = Math.floor(Math.random() * x) + 1;
      return numeroAleatorio;
    }

    elements.shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };

    elements.capitalizeString = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    elements.calculateFactorial = (num) => {
      if (num === 0 || num === 1) {
        return 1;
      } else {
        return num * elements.calculateFactorial(num - 1);
      }
    };

    elements.log = (frase) => console.log(frase);
    elements.err = (err) => console.error(err);

    return elements
  }

  //elemento HTML suelto
  if (arg instanceof HTMLElement) {
    elements = [arg];
  }

  elements.css = (...args) => {
    const [property, value] = args;
    const isString = typeof property === "string";
    const isObject = typeof property === "object";

    elements.forEach((el) => {
      if (isString) el.style[property] = value;
      else if (isObject) {
        const entriesCss = Object.entries(property);
        entriesCss.forEach(([property, value]) => {
          el.style[property] = value;
        });
      }
    });

    return elements;
  };

  elements.on = (event, callback) => {
    elements.forEach((el) => {
      el.addEventListener(event, callback);
    });
    return elements;
  };

  elements.each = (fn) => {
    elements.forEach((el, index) => fn(index, el));
    return elements;
  };

  elements.fadeIn = (duration = 1000) => {
    elements.forEach((el, index) => {
      const animation = el.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration,
      });
      animation.onfinish = () => (el.style.opacity = 1);
    });
    return elements;
  };

  elements.fadeOut = (duration = 1000) => {
    elements.forEach((el, index) => {
      const animation = el.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration,
      });
      animation.onfinish = () => (el.style.opacity = 0);
    });
    return elements;
  };

  elements.addClass = (className) => {
    elements.forEach((el) => {
      el.classList.add(className);
    });
    return elements;
  };

  elements.removeClass = (className) => {
    elements.forEach((el) => {
      el.classList.remove(className);
    });
    return elements;
  };

  elements.html = (content) => {
    if (content === undefined) {
      return elements[0].innerHTML;
    }
    elements.forEach((el) => {
      el.innerHTML = content;
    });
    return elements;
  };

  elements.text = (content) => {
    if (content === undefined) {
      return elements[0].textContent;
    }
    elements.forEach((el) => {
      el.textContent = content;
    });
    return elements;
  };

  elements.toggleClass = (className) => {
    elements.forEach((el) => {
      el.classList.toggle(className);
    });
    return elements;
  };

  elements.setId = (id) => {
    elements.forEach((el) => {
      el.id = id;
    });
    return elements;
  };

  elements.removeId = () => {
    elements.forEach((el) => {
      el.removeAttribute("id");
    });
    return elements;
  };

  elements.attr = (name, value) => {
    if (value === undefined) {
      return elements[0].getAttribute(name);
    }
    elements.forEach((el) => {
      el.setAttribute(name, value);
    });
    return elements;
  };

  elements.removeAttr = (name) => {
    elements.forEach((el) => {
      el.removeAttribute(name);
    });
    return elements;
  };

  elements.prop = (name, value) => {
    if (value === undefined) {
      return elements[0][name];
    }
    elements.forEach((el) => {
      el[name] = value;
    });
    return elements;
  };

  elements.getStyle = (property) => {
    return getComputedStyle(elements[0])[property];
  };

  elements.hide = () => {
    elements.forEach((el) => {
      el.style.display = "none";
    });
    return elements;
  };

  elements.show = () => {
    elements.forEach((el) => {
      el.style.display = "";
    });
    return elements;
  };

  elements.toggle = () => {
    elements.forEach((el) => {
      if (getComputedStyle(el).display === "none") {
        el.style.display = "";
      } else {
        el.style.display = "none";
      }
    });
    return elements;
  };

  elements.width = () => {
    return elements[0].clientWidth;
  };

  elements.height = () => {
    return elements[0].clientHeight;
  };

  elements.offset = () => {
    const rect = elements[0].getBoundingClientRect();
    return {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset,
    };
  };

  elements.position = () => {
    return {
      top: elements[0].offsetTop,
      left: elements[0].offsetLeft,
    };
  };

  elements.off = (event, callback) => {
    elements.forEach((el) => {
      el.removeEventListener(event, callback);
    });
    return elements;
  };

  elements.trigger = (event) => {
    elements.forEach((el) => {
      const customEvent = new Event(event);
      el.dispatchEvent(customEvent);
    });
    return elements;
  };

  elements.delegate = (selector, event, callback) => {
    elements.forEach((el) => {
      el.addEventListener(event, (e) => {
        if (e.target.matches(selector)) {
          callback(e);
        }
      });
    });
    return elements;
  };

  return elements;
};