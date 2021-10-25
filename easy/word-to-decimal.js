// https://edabit.com/challenge/fxMe9pKFgfHgujahQ

function wordToDecimal(word) {
  bigger = 0;
  for (const letter of word) {
    const code = letter.toUpperCase().charCodeAt(0);
    const value = code - 64;
    value > bigger && (bigger = value);
  }
  bigger += 10;
  return parseInt(word, bigger);
}

const wordToDecimalRefactor = (word) => {
  const biggerValue =
    word.split("").reduce((bigger, letter) => {
      value = letter.toUpperCase().charCodeAt(0) - 64;
      return value > bigger ? value : bigger;
    }, 0) + 10;
  return parseInt(word, biggerValue);
};

wordToDecimalRefactor("Edabit");
