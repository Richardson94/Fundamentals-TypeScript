const operation = (numero1, numero2, callback) => {
  return callback(numero1, numero2);
}

console.log(operation(4, 4, (a, b) => a + b));
console.log(operation(4, 4, (a, b) => a * b));
console.log(operation(4, 4, (a, b) => a / b));
console.log(operation(4, 4, (a, b) => a - b));
