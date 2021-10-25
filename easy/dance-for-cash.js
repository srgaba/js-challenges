//https://edabit.com/challenge/5eCqrJ7ByYCweDbHg

const MOVES = [
  "Shimmy",
  "Shake",
  "Pirouette",
  "Slide",
  "Box Step",
  "Headspin",
  "Dosado",
  "Pop",
  "Lock",
  "Arabesque",
];

const danceConvert = (pin) => {
  if (pin.match(/[^0-9]/)) return "Invalid input.";
  return pin.split("").map((value, i) => {
    let index = Number(value) + i;
    return MOVES[index] || MOVES[index - MOVES.length];
  });
};

danceConvert("834");
