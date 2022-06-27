const object = (function () {
  const _value = null;

  const getValue = () => {
    return this._value;
  };
  const setValue = (value) => {
    this._value = value;
  };

  return { getValue, setValue };
})();

object.setValue(42);
object._value = 73; // изменили напрямую приватное свойство, а не должны уметь обращаться к нему
object.getValue(); // 73
console.log(object.getValue());

/*
Ожидание
object.setValue(42);
object._value = 73; // изменили напрямую приватное свойство
object.getValue(); // 42
*/
