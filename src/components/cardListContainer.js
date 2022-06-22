import React, { useMemo } from "react";
import { map, nth, zip } from "ramda";
import Card from "./card";

function CardListContainer({ imgList, cardButtonLinks }) {
  const zippedPhotosAndLinks = useMemo(
    () => zip(imgList, cardButtonLinks),
    [imgList, cardButtonLinks]
  );
  return (
    <div className="card-list-container">
      {map(
        (i) => (
          <Card key={i} img={nth(0, i)} link={nth(-1, i)} />
        ),
        zippedPhotosAndLinks
      )}
    </div>
  );
}

export default CardListContainer;
