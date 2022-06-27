(function () {
  class Tooltip {
    constructor() {
      this.el = document.createElement("div");
      this.el.style.position = "absolute";

      this.el.classList.add(this.name);
      document.body.appendChild(this.el);

      this.onHide = this.onHide.bind(this);
    }

    get name() {
      return "tooltip";
    }

    get indent() {
      return 5;
    }

    delegate(eventName, element, cssSelector, callback) {
      console.log(eventName, element, cssSelector, callback);
      const fn = (event) => {
        if (!event.target.matches(cssSelector)) {
          return;
        }

        callback(event);
      };
      console.log(this.listeners);
      console.log(eventName, fn);

      element.addEventListener(eventName, fn);
      //   this.listeners.push({ fn, element, eventName });

      return this;
    }

    onShow = (event) => {
      console.log(event);
      this.el.classList.add("tooltip_active");
      this.el.textContent = event.target.attributes[1].nodeValue;
      this.el.style.top =
        event.clientY - this.el.clientHeight < 0
          ? "34px"
          : event.clientY - document.documentElement.clientHeight < 0
          ? `${
              document.documentElement.clientHeight - 34 - this.el.clientHeight
            }px`
          : `${event.clientY}px`;
      // Реализуйте этот метод
    };

    onHide(event) {
      console.log(event);
      this.el.classList.remove("tooltip_active");
      //   this.listeners = [];
      // Реализуйте этот метод
    }

    attach(root) {
      console.log(this);
      this.delegate("mouseover", root, "[data-tooltip]", this.onShow).delegate(
        "mouseout",
        root,
        "[data-tooltip]",
        this.onHide
      );
    }

    detach() {
      // Реализуйте этот метод
    }
  }

  window.Tooltip = Tooltip;
})();

const tooltip = new Tooltip();
tooltip.attach(document.body);

// (function () {
//   class Tooltip {
//     constructor() {
//       this.el = document.createElement("div");
//       this.el.style.position = "absolute";

//       this.el.classList.add(this.name);
//       this.el.classList.toggle(`${this.name}_active`, false);

//       this.listeners = [];

//       document.body.appendChild(this.el);

//       this.onHide = this.onHide.bind(this);
//     }

//     get name() {
//       return "tooltip";
//     }

//     get indent() {
//       return 5;
//     }

//     delegate(eventName, element, cssSelector, callback) {
//       const fn = (event) => {
//         if (!event.target.matches(cssSelector)) {
//           return;
//         }

//         callback(event);
//       };

//       element.addEventListener(eventName, fn);
//       this.listeners.push({ fn, element, eventName });

//       return this;
//     }

//     onShow = (event) => {
//       this.el.innerHTML = event.target.getAttribute("data-tooltip");
//       this.el.classList.toggle(`${this.name}_active`, true);

//       const spanRect = event.target.getBoundingClientRect();
//       const elRect = this.el.getBoundingClientRect();

//       let top = spanRect.bottom + this.indent;

//       if (top + elRect.height > document.documentElement.clientHeight) {
//         // если тултип не влезает по высоте, то поднимаем его над элементом
//         top = spanRect.top - elRect.height - this.indent;
//       }

//       this.el.style.top = `${top}px`;
//     };

//     onHide() {
//       this.el.classList.toggle(`${this.name}_active`, false);
//     }

//     attach(root) {
//       this.delegate("mouseover", root, "[data-tooltip]", this.onShow).delegate(
//         "mouseout",
//         root,
//         "[data-tooltip]",
//         this.onHide
//       );
//     }

//     detach() {
//       for (let { fn, element, eventName } of this.listeners) {
//         element.removeEventListener(eventName, fn);
//       }
//     }
//   }

//   window.Tooltip = Tooltip;
// })();

// const tooltip = new Tooltip();
// tooltip.attach(document.body);
