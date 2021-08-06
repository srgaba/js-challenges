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

/* @The prototype of the code@ 

get the length of string

calculate the square root

if the square root is not a integer number then
	verify wich is the interval integers 
	calculate the floor x ceil, if this is bigger or equal then
		length of string then
		build a matrix follow the floor x ceil
	otherwise 
		use the number as floor and ceil 
otherwise
	use the number as floor and ceil 


go through the string setting each one 
in the matrix

finally go through each column/row concating a main string

*/
