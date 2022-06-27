// [1, 2, 3, 4] => 1

function first(list) {
  return Array.isArray(list) && list.length > 0 ? list[0] : undefined;
}
