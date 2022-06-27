function namespace(str) {
  const arr = str.split(".");
  console.log(arr);
  const res = arr.reduceRight((o, i) => ({ [i]: o }), {});
  console.log(res);
  return arr.reduceRight((o, i) => [i], {});
} // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"

namespace("a.b.c.d.e");

export default namespace;

// type Nullable<T> = T | null;

// const text: Nullable<HTMLDivElement> = document.getElementById(
//   "text"
// ) as HTMLDivElement;
// const input: Nullable<HTMLInputElement> = document.getElementById(
//   "input"
// ) as HTMLInputElement;

// if (!text || !input) {
//   throw new Error("нет полей");
// }

// const data = {
//   title: "",
// };

// Object.defineProperty(data, "title", {
//   set: (value: string) => {
//     text.textContent = value;
//   },
// });

// input.addEventListener("keyup", (event) => {
//   data.title = event.target.value;
// });

// export default Nullable;
