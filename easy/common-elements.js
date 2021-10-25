const commonElements = (arrA, arrB) => {
  const setA = new Set(arrA);
  const setB = new Set(arrB);
  let like = [];
  setA.forEach((value) => setB.has(value) && like.push(value));
  return like;
};

commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]);
