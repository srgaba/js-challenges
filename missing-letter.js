const reference = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const missingLetter = (str) => {
  const firstLetter = str[0];
  let i = reference.findIndex((letter) => letter === firstLetter);
  for (let y = 0; y < str.length; y++) {
    debugger;
    if (str[y + 1] && reference[i + 1] && str[y + 1] !== reference[i + 1])
      return reference[i + 1];
    i++;
  }
  return "No Missing Letter";
};

missingLetter("tuvxyz");
