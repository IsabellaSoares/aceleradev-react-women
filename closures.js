function count() {
  var count = 1;

  return function () {
    var hi = 'Hi';
    return count++;
  };
}

function main() {
  var value = count();
  console.log(value());
  console.log(value());
  console.log(value());
}

main();
