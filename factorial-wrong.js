const extraLongFactorials = (n) => {
  debugger;
  n = BigInt(n);
  if (n === 1n) return n;
  return n * extraLongFactorials(n - BigInt(1));
};

extraLongFactorials(5);
