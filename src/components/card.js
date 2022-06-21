import React, { useMemo } from "react";

import CardButton from "./cardButton";

function Card({ img, link }) {
  const cardImg = useMemo(() => img, [img]);
  const linkBtn = useMemo(() => link, [link]);

  return (
    <div className="card-list-container__card">
      <img src={cardImg} alt="alt-foto" />
      <div className="card-content">
        <h4 className="card-content__title">Consectetur adipiscing elit</h4>
        <p className="card-content__text">Dignissim diam quis enim lobortis</p>
        <CardButton link={linkBtn} />
      </div>
    </div>
  );
}

export default Card;
