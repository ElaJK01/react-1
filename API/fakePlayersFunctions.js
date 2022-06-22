import {
  assoc,
  flatten,
  length,
  map,
  multiply,
  nth,
  pipe,
  prop,
  zipObj,
} from "ramda";
import { first } from "./data";

const namesList = (element) => map(prop("name"), element);
const surnameList = (element) => map(prop("surname"), element);
const descriptionList = (element) => map(prop("description"), element);

const names = flatten(map(namesList, first));
const surnames = flatten(map(surnameList, first));
const descriptions = flatten(map(descriptionList, first));

export const oneRandomName = () =>
  nth(Math.floor(multiply(Math.random(), length(names))), names);

export const oneRandomSurname = () =>
  nth(Math.floor(multiply(Math.random(), length(surnames))), surnames);

export const oneRandomPersonDescription = () =>
  nth(Math.floor(multiply(Math.random(), length(descriptions))), descriptions);

export const zipPlayerWithScore = (el) =>
  zipObj(["name", "score"], [el, Math.floor(Math.random() * 25)]);

export const addSurnameAndDescription = (el) =>
  pipe(
    assoc("surname", oneRandomSurname()),
    assoc("description", oneRandomPersonDescription())
  )(el);
