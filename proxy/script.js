// авторское решение из практикума

const props = {
  name: "Abby",
  chat: "the last of us. Part II",
  getChat() {
    this._privateMethod();
  },
  _privateMethod() {
    console.log(this._privateProp);
  },
  __privateMethodToo() {},
  _privateProp: "Нельзя получить просто так",
};

const checkPrivateProp = (prop) => prop.startsWith("_");

const proxyProps = new Proxy(props, {
  get(target, prop) {
    if (checkPrivateProp(prop)) {
      throw new Error("Нет прав");
    } else {
      const value = target[prop];
      return typeof value === "function" ? value.bind(target) : value;
    }
  },
  set(target, prop, val) {
    if (checkPrivateProp(prop)) {
      throw new Error("Нет прав");
    } else {
      target[prop] = val;
      return true;
    }
  },
  deleteProperty(target, prop) {
    if (checkPrivateProp(prop)) {
      throw new Error("Нет прав");
    } else {
      delete target[prop];
      return true;
    }
  },
});

proxyProps.getChat();
delete proxyProps.chat;

proxyProps.newProp = 2;
console.log(proxyProps.newProp);

try {
  proxyProps._newPrivateProp = "Super game";
} catch (error) {
  console.log(error);
}

try {
  delete proxyProps._privateProp;
} catch (error) {
  console.log(error); // Error: Нет прав
}

/*
	* Вывод в консоль следующий:
Нельзя получить просто так
2
Error: Нет прав
Error: Нет прав
*/

// из практикума
// const data = {
//   test: 1,
//   _test: 1,
// };
// const proxyData = new Proxy(data, {
//   get(target, prop) {
//     const value = target[prop];
//     console.log("get data: ", value);
//     return typeof value === "function" ? value.bind(target) : value;
//   },
//   set(target, prop, value) {
//     target[prop] = value;
//     console.log(`${prop}: ${value}`);
//     return true;
//   },
// });

// proxyData.test; // 'get data: 1'
// proxyData.newProp = "string"; // 'newProp: string'
// proxyData.newProp2 = "string2"; // 'newProp: string'

// из практикума
// const proxyDataPrivateProp = new Proxy(data, {
//   get(target, prop) {
//     if (prop.indexOf("_") === 0) {
//       throw new Error("Отказано в доступе");
//     }

//     const value = target[prop];
//     return typeof value === "function" ? value.bind(target) : value;
//   },
//   deleteProperty() {
//     throw new Error("Отказано в доступе");
//   },
// });

// proxyDataPrivateProp._test; // Error: Отказано в доступе
// proxyDataPrivateProp.newProp = "string"; // Не дойдёт сюда
