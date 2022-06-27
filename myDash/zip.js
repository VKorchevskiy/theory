function zip(...objects) {
  return objects.reduceRight((acc, cur) => ({ ...acc, ...cur }), {});
  // Ваш код
}

// Пример работы
const objects = [
  { foo: 5, bar: 6 },
  { foo: 13, baz: -1 }, // foo - повторяющийся ключ
];

console.log(zip(...objects)); // { foo: 5, bar: 6, baz: -1 }
