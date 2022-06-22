import React from "react";
import CardListContainer from "../components/cardListContainer";
import { cardButtonLinks, imgList } from "../constants";

const Home = () => (
  <div>
    <section className="section">
      <h3 className="section__title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h3>
      <p className="section__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus
        laoreet non curabitur gravida. Dignissim diam quis enim lobortis
        scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      <CardListContainer imgList={imgList} cardButtonLinks={cardButtonLinks} />
    </section>
  </div>
);

export default Home;
