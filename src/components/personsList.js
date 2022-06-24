import React, { useState } from "react";
import { indexOf, map, prop } from "ramda";
import Modal from "./modal";

const PersonsList = ({ list }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card-list-container">
      {map(
        (el) => (
          <div key={indexOf(el, list)} className="card-list-container__card">
            <div className="card-content">
              <h4 className="card-content__title">
                {prop("name", el)} {prop("surname", el)}
              </h4>
              <div
                style={{
                  width: 200,
                  height: 200,
                  backgroundColor: "lightgreen",
                }}
              />

              <p>
                Score:
                {prop("score", el)}
              </p>
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
              {showModal && (
                <Modal
                  message={
                    <div>
                      <h5>Personal Details</h5>
                      <div>
                        <h5>
                          {prop("name", el)} {prop("surname", el)}
                        </h5>
                        <p>{prop("description", el)}</p>
                        <p className="section__text">
                          ed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam eaque ipsa, quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt,
                          explicabo. Nemo enim ipsam voluptatem, quia voluptas
                          sit, aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos, qui ratione voluptatem
                          sequi nesciunt, neque porro quisquam est, qui dolorem
                          ipsum, quia dolor sit, amet, consectetur
                        </p>
                      </div>
                    </div>
                  }
                  handleCloseModal={() => setShowModal(false)}
                />
              )}
            </div>
          </div>
        ),
        list
      )}
    </div>
  );
};

export default PersonsList;
