class MyArray {
  constructor(initialSize = 1) {
    if (
      Number(initialSize) !== initialSize ||
      Math.round(initialSize) !== initialSize
    ) {
      throw new Error("Длина массива должна быть целым числом");
    }

    if (!(initialSize > 0)) {
      throw new Error("Размер массива должен быть больше нуля");
    }

    this.size = initialSize;
    this.memory = allocate(initialSize);
    this.length = 0;
  }

  checkIndex(index) {
    if (
      (this.length !== 0 && index >= this.length) ||
      (this.length === 0 && index > this.length) ||
      index < 0
    ) {
      throw new Error("За пределами");
    }
    return true;
  }

  // Возвращает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
  get(index) {
    this.checkIndex(index);
    return this.memory[index];
  }

  // Устанавливает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
  set(index, value) {
    this.checkIndex(index);
    this.memory[index] = value;
  }

  // +Добавляет новый элемент в массив.
  // +Если index не определён — добавляет в конец массива.
  // В противном случае — добавляет по индексу со сдвигом всех последующих элементов.
  // +Если индекс за пределами - кидает ошибку.
  // +Увеличивает выделенную память вдвое, если необходимо.
  // +Возвращает новую длину массива.
  add(value, index) {
    this.checkIndex(index);
    if (index === undefined) {
      this.memory[this.length] = value;
    }
    if (this.memory[index] !== undefined) {
      const entries = Object.entries(this.memory);
      console.log(entries);
      for (const [key, val] of entries) {
        console.log(key, val);
        // if ()
      }
      //   this.memory = Object.keys(this.memory).reduce((acc, cur) => {
      //     console.log(acc, cur);

      //     const newValue = +cur === index ? value : this.memory[cur];
      //     return { ...acc, [cur]: newValue };
      //   }, {});
    }
    this.length++;
    if (this.length === this.size) {
      this.size *= 2;
      this.memory = { ...allocate(this.size), ...this.memory };
    }
    return this.length;
  }

  // Удаляет элемент по индексу со сдвигом всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
  // Возвращает новую длину массива.
  delete(index) {
    // ...
  }
}

function allocate(size) {
  const memory = {};

  for (let i = 0; i < size; i++) {
    memory[i] = undefined;
  }

  return memory;
}

const arr = new MyArray(3);
console.log(arr);
arr.add(1);
console.log(arr);
arr.add(2);
console.log(arr);
arr.add(3, 0);
console.log(arr);
// console.log(arr.get(1));
arr.set(0, 12);
console.log(arr);
