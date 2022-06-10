import React, {useMemo} from "react";
import {map, nth, zip} from 'ramda';
import Card from "./card";


const CardListContainer = ({imgList, cardButtonLinks}) => {
    const photoList = useMemo(() => imgList, [imgList])
    const buttonLinksList = useMemo(() => cardButtonLinks, [cardButtonLinks])
    const zippedPhotosAndLinks = useMemo(() => zip(photoList, buttonLinksList), [photoList, buttonLinksList])
    return <div className="card-list-container">{map((i) => <Card key={i} img={nth(0, i)} link={nth(-1, i)}/> ,zippedPhotosAndLinks)}</div>
}

export default CardListContainer