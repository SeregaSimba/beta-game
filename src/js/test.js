Array.prototype.myFlat = function (dep) {
  if (!Array.isArray(this)) {
    throw new TypeError("error is non Array");
  }

  if (isNaN(dep) || dep <= 0) {
    throw new TypeError("error is non Array");
  }

  function flatten(arr, dep) {
    const result = [];

    for (let i = 0; i < arr.length; i += 1) {
      const carEll = arr[i];

      if (Array.isArray(carEll) && dep > 0) {
        result.push(...flatten(carEll, dep - 1));
      } else {
        result.push(carEll);
      }
    }
    return result;
  }
  return flatten(this, dep);
};

Array.prototype.myReduce = function (callback, value) {
  if (!(this instanceof Array || this instanceof String)) {
    throw new TypeError("is non Reduce");
  }

  if (typeof callback !== "function") {
    throw new TypeError("is non Reduce");
  }

  let acc = arguments.length >= 2 ? value : this[0];
  let isStart = arguments.length >= 2 ? 0 : 1;
  for (let i = isStart; i < this.length; i += 1) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};
