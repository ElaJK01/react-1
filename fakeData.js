import {multiply, nth, length, map, prop, flatten, lt, zipObj, assoc, pipe, range} from "ramda";

export const first = [
    [
        { score: 1, name: "Alfie", surname: "Smith", description: "lawn master" },
        { score: 14, name: "Matilda", surname: "Jones", description: "perrenial flower specialis" },
    ],
    [
        { score: 7, name: "Roger", surname: "Kowalski", description: "Pest killer"  },
        { score: -5, name: "Patrick", surname: "Fabiański", description: "vegetable specialist"  },
        { score: 3, name: "Agnes", surname: "McQueen", description: "herbs specialist."  },
        { score: 1, name: "Faustus", surname: "Silverstone", description: "a specialist in trimming shrubs and trees"  },
    ],
    [
        { score: 12, name: "Olin", surname: "Goldman", description: 'loves moving the lawn'  },
        { score: 21, name: "Javier", surname: "Kamiński", description: "annual flowers and plants specialist"  },
    ],
    [{ score: 3, name: "Tony", surname: "Hogg", description: "bulb plants specialist"  }],
    [
        { score: 3, name: "Dave", surname: "Filliozat", description: "specilizes in coniferce desises"  },
        { score: 8, name: "Sam", surname: "Klein", description: "deciduous trees and shrubs specialist"  },
        { score: 9, name: "Anne", surname: "Drockermann", description: "bulb plants sector"  },
        { score: 4, name: "Julie", surname: "Cohen", description: "fruit and vegetables section"  },
    ],
    [
        { score: 7, name: "Caroline", surname: "Dickens", description: "annual flowers section"  },
        { score: -5, name: "Pat", surname: "Carolle", description: "prefers english style gardening"  },
        { score: 3, name: "Cruella", surname: "Wiejak", description: "historical gardens specialist"  },
        { score: 1, name: "Fabian", surname: "Darcy", description: "japanise gardens specialist"  },
    ]
];


export const teamFakeNameGenerator = () => {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "W", "X", "Y", "Z" ]
    const randomLetter = nth(Math.floor(multiply(Math.random(), length(letters))), letters);
    return `Team ${randomLetter}`
}

export const teamFakeDescription = () => {
    const gardenNounsList = ['Plant', 'Bulb', 'Flowers', 'Trees', 'Shreds', 'Lawn', "Roses", "Stones", "Lakes", "Gardens" ]
    const gardenDescriptiveNounsList = ['Masters', 'Tamers', 'Specialists', 'Lovers']
    return `${nth(Math.floor(multiply(Math.random(), length(gardenNounsList))), gardenNounsList)} ${nth(Math.floor(multiply(Math.random(), length(gardenDescriptiveNounsList))), gardenDescriptiveNounsList)}`
}

const namesList = (element) => map(prop("name"), element);
const surnameList = (element) => map(prop('surname'), element)
const descriptionList = (element) => map(prop('description'), element)

const names = flatten(map(namesList, first));
const surnames = flatten(map(surnameList, first));
const descriptions = flatten(map(descriptionList, first));

const shouldThrowError = () => lt(Math.floor(multiply(Math.random(), 2)), 1);

const oneRandomName = () =>
    nth(Math.floor(multiply(Math.random(), length(names))), names);

const oneRandomSurname = () =>
    nth(Math.floor(multiply(Math.random(), length(surnames))), surnames);

const oneRandomPersonDescription = () =>
    nth(Math.floor(multiply(Math.random(), length(descriptions))), descriptions);

const zipPlayerWithScore = (el) =>
    zipObj(["name", "score"], [el, Math.floor(Math.random() * 25)]);

const addSurnameAndDescription = (el) => pipe(assoc('surname', oneRandomSurname()), assoc('description', oneRandomPersonDescription()))(el)

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
        const playersList = map(zipPlayerWithScore, players)
        return map(addSurnameAndDescription, playersList);
    } catch (e) {
        console.error(e);
    }
};

const addTeamName = (el) => ({teamName: teamFakeNameGenerator(), teamPlayers: el, description: teamFakeDescription()})

export const getTeams = async (numberOfPlayers, numberOfTeams) => {
    try {
        const players =  await Promise.all(
            map(
                async () => await getPlayers(numberOfPlayers),
                range(0, numberOfTeams)
            )
        );

        return map(addTeamName, players)
    } catch {
        console.error("no teams");
    }
};

const reduceElement = (element) =>
    zipObj(
        ["averageScore", "names"],
        [
            divide(reducedScore(element), length(element)),
            `Team: ${join(", ", namesList(element))}`,
        ]
    );

export const getTeamSummaries = async (teamList) => {
    try {
        await delay();
        return map(reduceElement, teamList);
    } catch {
        console.error("no summary");
    }
};
