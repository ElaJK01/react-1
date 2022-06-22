import React from "react";
import CardButton from "./cardButton";

const Card = ({ img, link }) => (
  <div className="card-list-container__card">
    <img src={img} alt="alt-foto" />
    <div className="card-content">
      <h4 className="card-content__title">Consectetur adipiscing elit</h4>
      <p className="card-content__text">Dignissim diam quis enim lobortis</p>
      <CardButton link={link} />
    </div>
  </div>
);

export default Card;
