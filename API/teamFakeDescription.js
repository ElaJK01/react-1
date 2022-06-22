import { length, multiply, nth } from "ramda";

export const teamFakeDescription = () => {
  const gardenNounsList = [
    "Plant",
    "Bulb",
    "Flowers",
    "Trees",
    "Shreds",
    "Lawn",
    "Roses",
    "Stones",
    "Lakes",
    "Gardens",
  ];
  const gardenDescriptiveNounsList = [
    "Masters",
    "Tamers",
    "Specialists",
    "Lovers",
  ];
  return `${nth(
    Math.floor(multiply(Math.random(), length(gardenNounsList))),
    gardenNounsList
  )} ${nth(
    Math.floor(multiply(Math.random(), length(gardenDescriptiveNounsList))),
    gardenDescriptiveNounsList
  )}`;
};
