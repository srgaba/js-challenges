// https://www.hackerrank.com/challenges/encryption/problem

const encryption = (s) => {
  const text = s.split(" ").join("");
  const length = text.length;
  const squareRoot = Math.sqrt(length);
  let row, column;
  if (squareRoot % 1 !== 0) {
    const floor = Math.floor(squareRoot);
    const ceil = Math.ceil(squareRoot);
    if (ceil * floor >= length) {
      row = floor;
      column = ceil;
    }
  }
  if (!row && !column) {
    row = squareRoot;
    column = squareRoot;
  }
  const matrix = [];
  let si = 0;
  for (let r = 0; r < row; r++) {
    matrix[r] = [];
    for (let c = 0; c < column; c++) {
      if (text[si]) {
        matrix[r][c] = text[si];
        si++;
      } else break;
    }
  }
  let encryptedText = "";
  for (let c = 0; c < column; c++) {
    for (let r = 0; r < row; r++) {
      if (matrix[r][c]) encryptedText += matrix[r][c];
      else break;
    }
    encryptedText += " ";
  }
  return encryptedText;
};
