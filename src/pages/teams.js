import React, { useEffect, useState } from "react";
import { length, multiply, prop, slice, sortBy, subtract } from "ramda";
import { delay, getTeams } from "../../API/getFakePlayersAndTeams";
import Pagination from "../components/pagination";
import TeamsList from "../components/teamsList";
import Error from "../components/error";

const Teams = () => {
  const [teamsList, setTeamsList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const sortByTeamName = sortBy(prop("teamName"));
  console.log("teamslist", teamsList);
  useEffect(() => {
    const getTeamsList = async () => {
      setLoading(true);
      setError(false);
      try {
        await delay();
        const teamsList = await getTeams(11, 50);
        setTeamsList(sortByTeamName(teamsList));
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    getTeamsList();
  }, []);

  const lastItemIndex = multiply(currentPage, itemsPerPage);
  const firstItemIndex = subtract(lastItemIndex, itemsPerPage);
  const currentItems = slice(firstItemIndex, lastItemIndex, teamsList);
  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <section className="section">
        <h3 className="section__title">Teams list</h3>
        <div className="section__content">
          {!loading && !error && (
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={length(teamsList)}
              paginate={handlePaginate}
            />
          )}
          {error && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <Error onClick={() => {}} />
            </div>
          )}
          {loading ? (
            <p>Loading...</p>
          ) : (
            !error && <TeamsList list={currentItems} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Teams;
