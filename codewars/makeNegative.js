function makeNegative(num) {
    if (num < 0) {
        return num;
    }
    return num * -1;
  }

console.log(makeNegative(42), '->', -42);
console.log(makeNegative(42), '->', -9);
console.log(makeNegative(42), '->', -5);
console.log(makeNegative(42), '->', -3.14);
console.log(makeNegative(42), '->', 0);
