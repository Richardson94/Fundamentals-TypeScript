function modify (array, callback) {
  array.push('prueba');
  setTimeout(function () {
    callback(array);
    setTimeout(function () {
      callback(array);
    }, 3000);
  }, 3000);
}

const nombres = ['Nelson', 'Richard', 'Cori', 'Sirpa'];

modify(nombres, function (array) {
  console.log(`He modificado el Array ahora tiene ${array.length}`);
});
