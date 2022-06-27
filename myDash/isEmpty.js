/*
isEmpty(null); // => true
isEmpty(true); // => true
isEmpty(1); // => true
isEmpty([1, 2, 3]); // => false
isEmpty({ 'a': 1 }); // => false
isEmpty('123'); // => false
isEmpty(123); // => true
isEmpty(''); // => true
isEmpty(0); // => true
*/

function isNull(value) {
  return value === null;
}
function isUndefined(value) {
  return value === undefined;
}
function isBoolean(value) {
  return value === true || value === false;
}
function isNumber(value) {
  return typeof value === "number";
}
function isString(value) {
  return typeof value === "string";
}
function isArray(value) {
  return Array.isArray(value);
}
function isMap(value) {
  return value && value.toString() === "[object Map]" ? true : false;
}
function isSet(value) {
  return value && value.toString() === "[object Set]" ? true : false;
}

function isEmpty(value) {
  if (
    isNull(value) ||
    isUndefined(value) ||
    isBoolean(value) ||
    isNumber(value)
  ) {
    return true;
  } else if (isString(value) && value.length === 0) {
    return true;
  } else if (isArray(value)) {
    return value.length === 0;
  } else if (isMap(value) || isSet(value)) {
    return value.size === 0;
  } else return Object.keys(value).length === 0;
}
function isEmpty(value) {
  if (
    isNull(value) ||
    isUndefined(value) ||
    isBoolean(value) ||
    isNumber(value)
  ) {
    return true;
  } else if (isString(value) && value.length === 0) {
    return true;
  } else if (isArray(value)) {
    return value.length === 0;
  } else if (isMap(value) || isSet(value)) {
    return value.size === 0;
  } else return Object.keys(value).length === 0;
}
