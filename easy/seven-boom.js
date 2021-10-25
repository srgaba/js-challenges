const sevenBoom = (arr) =>
  arr.find((value) => value.toString().match("[7]"))
    ? "Boom!"
    : "there is no 7 in the array";

sevenBoom([1, 2, 3, 4, 5, 6, 7]);
