// аналог lodash.invert
// { a: 1 } => { 1: 'a' }

function invert(obj) {
  return Object.keys(obj).reduce(
    (acc, key) => ({ ...acc, [obj[key]]: key }),
    {}
  );
}
