import React, {useEffect, useState} from "react";
import {delay, getPlayers, getTeams} from "../../fakeData";
import {indexOf, length, map, multiply, prop, slice, sortBy, subtract} from "ramda";
import Error from "./error";
import Header from "./header";
import Pagination from "./pagination";
import PersonsList from "./personsList";
import TeamsList from "./teamsList";
import Modal from "./modal";

const Teams = () => {
    const [teamsList, setTeamsList] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)


    console.log('teamlist', teamsList)

    const sortByTeamName = sortBy(prop('teamName'))

    useEffect(() => {
        const getTeamsList = async () => {
            setLoading(true)
            setError(false)
            try {
                await delay();
                const teamsList = await getTeams(11, 50);
                setTeamsList(sortByTeamName(teamsList))
            } catch(error) {
                setError(true)
            }
            setLoading(false)
        };

        getTeamsList();
    }, [])

    const lastItemIndex = multiply(currentPage, itemsPerPage)
    const firstItemIndex = subtract(lastItemIndex, itemsPerPage)
    const currentItems = slice(firstItemIndex, lastItemIndex, teamsList)
    const handlePaginate = (pageNumber) => setCurrentPage(pageNumber)
    console.log('currentItems', currentItems)

    return (<div><Header/>
        <section className="section">
            <h3 className="section__title">Teams list</h3>
            <div className="section__content">
                {!loading && !error && <Pagination itemsPerPage={itemsPerPage} totalItems={length(teamsList)} paginate={handlePaginate}/>}
                {error && <p>error!</p>}
                {loading ? (<p>Loading...</p>) : !error && <TeamsList list={currentItems}/>}
            </div>
        </section>

    </div>);
};

export default Teams;