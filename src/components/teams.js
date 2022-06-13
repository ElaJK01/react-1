import React, {useEffect, useState} from "react";
import {delay, getPlayers, getTeams} from "../../fakeData";
import {indexOf, map, prop, sortBy} from "ramda";
import Error from "./error";

const Teams = () => {
    const [teamsList, setTeamsList] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    console.log('teamlist', teamsList)

    const sortByTeamName = sortBy(prop('teamName'))

    useEffect(() => {
        const getTeamsList = async () => {
            setLoading(true)
            setError(false)
            try {
                await delay();
                const teamsList = await getTeams(5, 10);
                setTeamsList(sortByTeamName(teamsList))
            } catch(error) {
                setError(true)
            }
            setLoading(false)
        };

        getTeamsList();
    }, [])

    return (<div><h2>Gardening Teams</h2>
        {error && <p>Error!</p>}
        {loading ? <p>Loading...</p> : (<div>{map((el) => <div key={indexOf(el, teamsList)}><h5>{el.teamName} - {el.description}</h5>
        <h6>Team players:</h6>
            <ul>
                {map((i) => <li key={indexOf(i, prop('teamPlayers', el))}>{i.name} {i.surname} - {i.description}</li> ,prop('teamPlayers', el))}
            </ul>

        </div> ,teamsList)}</div>)}
    </div>);
};

export default Teams;