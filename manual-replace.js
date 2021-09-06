const replace = (str, c1, c2) => {
  str = str.split("");
  const c1i = [];
  str.forEach((value, i) => value === c1 && c1i.push(i));
  const c2i = [];
  str.forEach((value, i) => value === c2 && c2i.push(i));
  c1i.forEach((i) => (str[i] = c2));
  c2i.forEach((i) => (str[i] = c1));
  return str.join("");
};

replace("aabbccc", "a", "b");
