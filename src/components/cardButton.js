import React, {useMemo} from "react";
import {prop} from "ramda";

const CardButton = ({link}) => {

    const buttonLink = useMemo(() => prop('link', link), [link])
    return <a className="link card-content__btn" href={buttonLink}>More Info</a>
}

export default CardButton;