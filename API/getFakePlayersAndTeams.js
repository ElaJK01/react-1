import { multiply, map, lt, range } from "ramda";
import {
  addSurnameAndDescription,
  oneRandomName,
  zipPlayerWithScore,
} from "./fakePlayersFunctions";
import { teamFakeNameGenerator } from "./teamFakeNameGenerator";
import { teamFakeDescription } from "./teamFakeDescription";

const shouldThrowError = () => lt(Math.floor(multiply(Math.random(), 2)), 1);

export const delay = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (shouldThrowError() ? reject("network error") : resolve()),
      Math.floor(Math.random() * 2000) + 1000
    )
  );

export const getPlayers = async (numberOfPlayers) => {
  try {
    const players = map(oneRandomName, range(0, numberOfPlayers));
    const playersList = map(zipPlayerWithScore, players);
    return map(addSurnameAndDescription, playersList);
  } catch (e) {
    console.error(e);
  }
};

const addTeamName = (el) => ({
  teamName: teamFakeNameGenerator(),
  teamPlayers: el,
  description: teamFakeDescription(),
});

export const getTeams = async (numberOfPlayers, numberOfTeams) => {
  try {
    const players = await Promise.all(
      map(
        async () => await getPlayers(numberOfPlayers),
        range(0, numberOfTeams)
      )
    );

    return map(addTeamName, players);
  } catch {
    console.error("no teams");
  }
};
