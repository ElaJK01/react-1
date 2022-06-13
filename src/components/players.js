import React, {useEffect, useState} from "react";
import {delay, getPlayers} from "../../fakeData";
import {indexOf, map, prop, sortBy} from "ramda";
import Header from "./header";
import Error from "./error";

const Players = () => {
    const [playersList, setPlayersList] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)


    const sortBySurname = sortBy(prop('surname'))
    const sortByName = sortBy(prop('name'))


    useEffect(() => {
        const getPlayerList = async () => {
            setLoading(true)
            setError(false)
            try {
                await delay();
                const playersList = await getPlayers(10);
                setPlayersList(sortBySurname(sortByName(playersList)))
            } catch(error) {
                setError(true)
            }
            setLoading(false)
        };

        getPlayerList();
    }, [setPlayersList]);


    return (<div><Header/>{error && <p>error!</p>}{loading ? (<p>Loading...</p>) :
        (<div>{map((el) => <div key={indexOf(el, playersList)}><p>{el.name} {el.surname} - {el.description} - {el.score}</p></div> ,playersList)}</div>)}
      </div>);
};

export default Players;