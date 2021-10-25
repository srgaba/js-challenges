const lcm = (n1, n2) => {
  let foundValue;
  const n1Multiples = new Set();
  const n2Multiples = new Set();
  const addAndFind = (currentValue1, currentValue2) => {
    if (foundValue) return foundValue;
    const addedValue1 = currentValue1 + n1;
    const addedValue2 = currentValue2 + n2;
    n1Multiples.add(addedValue1);
    n2Multiples.add(addedValue2);
    n1Multiples.forEach((value) => {
      if (!foundValue && n2Multiples.has(value)) {
        foundValue = value;
      }
    });
    n2Multiples.forEach((value) => {
      if (!foundValue && n1Multiples.has(value)) {
        foundValue = value;
      }
    });
    return addAndFind(addedValue1, addedValue2);
  };
  return addAndFind(0, 0);
};
lcm(8, 5);
