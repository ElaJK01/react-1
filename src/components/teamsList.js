import React, { useState } from "react";
import { indexOf, map, prop } from "ramda";
import Modal from "./modal";

const TeamsList = ({ list }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card-list-container">
      {map(
        (el) => (
          <div key={indexOf(el, list)} className="card-list-container__card">
            <div className="card-content">
              <h4 className="card-content__title"> {prop("teamName", el)}</h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: 200,
                  height: "fit-content",
                  backgroundColor: "yellow",
                  fontSize: 10,
                }}
              >
                <h5>Team players</h5>
                <ul style={{ listStyleType: "none" }}>
                  {map((i) => {
                    const name = prop("name", i);
                    const surname = prop("surname", i);
                    return (
                      <li key={indexOf(i, prop("teamPlayers", el))}>
                        {name} {surname}
                      </li>
                    );
                  }, prop("teamPlayers", el))}
                </ul>
              </div>
              <p className="card-content__text">
                Description:
                {prop("description", el)}
              </p>
              <button
                type="button"
                className="card-content__btn"
                onClick={() => setShowModal(true)}
              >
                Details
              </button>
            </div>
            {showModal && (
              <Modal
                message={
                  <div>
                    <h5>Players</h5>
                    <div>
                      <ul style={{ listStyleType: "none" }}>
                        {map((i) => {
                          const name = prop("name", i);
                          const surname = prop("surname", i);
                          return (
                            <li>
                              {name} {surname}
                            </li>
                          );
                        }, prop("teamPlayers", el))}
                      </ul>
                    </div>
                  </div>
                }
                handleCloseModal={() => setShowModal(false)}
              />
            )}
          </div>
        ),
        list
      )}
    </div>
  );
};

export default TeamsList;
