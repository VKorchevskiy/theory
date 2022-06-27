const object = {
  value: "42",
  print() {
    type = () => {
      return typeof this.value;
    };

    console.log(`${this.value} is ${type()}`);
  },
};

object.print(); // Поправьте замыкание
