const canGetCount = (n) => {
  let count = n;
  return function () {
    if (count-- <= 0) return "no";
    return "yes";
  };
};

const getOne = canGetCount(2);

getOne(); // yes
getOne(); // yes
getOne(); // no
