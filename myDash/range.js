/*
 * range(4); // => [0, 1, 2, 3]
 * range(-4); // => [0, -1, -2, -3]
 * range(1, 5); // => [1, 2, 3, 4]
 * range(0, 20, 5); // => [0, 5, 10, 15]
 * range(0, -4, -1); // => [0, -1, -2, -3]
 * range(1, 4, 0); // => [1, 1, 1]
 * range(0); // => []
 */
/*
Реализовать функцию, которая генерирует числовые последовательности с заданным шагом.
Функция должна принимать три аргумента:
start — число, с которого начнётся последовательность. Это необязательный аргумент: по умолчанию функция должна начинать с 0.
end — число, конец последовательности. Функция должна остановиться, не доходя до этого значения.
step — число, шаг между элементами в последовательности. Это необязательный аргумент: значение по умолчанию — 1.
*/

function range(...args) {
  switch (args.length) {
    case 0:
      return undefined;
    case 1:
      return Array.from({ length: Math.abs(args[0]) }).map((_, i) =>
        args[0] > 0 ? i : -i
      );
    case 2:
      return Array.from({ length: Math.abs(args[1] - args[0]) }).map((_, i) =>
        args[1] - args[0] > 0 ? args[0] + i : args[0] - i
      );
    default:
      return args[2] === 0
        ? Array.from({ length: args[1] - args[0] }).map((_, i) => args[0])
        : Array.from({ length: (args[1] - args[0]) / args[2] }).map(
            (_, i) => args[0] + args[2] * i
          );
  }
}
