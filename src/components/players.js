import React, {useEffect, useState} from "react";
import {getPlayers} from "../../fakeData";
import {map, prop, sortBy} from "ramda";
import Header from "./header";

const Players = () => {
    const [playersList, setPlayersList] = useState([])

    const sortBySurname = sortBy(prop('surname'))
    const sortByName = sortBy(prop('name'))


    useEffect(() => {
        const getPlayerList = async () => {
            try {
                const playersList = await getPlayers(10);
                setPlayersList(sortBySurname(sortByName(playersList)))
            } catch(error) {
                console.log('error', error)
            }
        };

        getPlayerList();
    }, []);

    return <div><Header/><h2>Players</h2>
        <div>{map((el, index) => <div key={index}><p>{el.name} {el.surname} - {el.description} - {el.score}</p></div> ,playersList)}</div>

      </div>;
};

export default Players;