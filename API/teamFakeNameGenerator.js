import { length, multiply, nth } from "ramda";

export const teamFakeNameGenerator = () => {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "R",
    "S",
    "T",
    "U",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const randomLetter = nth(
    Math.floor(multiply(Math.random(), length(letters))),
    letters
  );
  return `Team ${randomLetter}`;
};
