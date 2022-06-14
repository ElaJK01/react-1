import React from 'react';
import {indexOf, map} from "ramda";
import CardButton from "./cardButton";

const PersonsList = ({list}) => {

    return <div className={"card-list-container"}>
        {map((el) =><div key={indexOf(el, list)} className="card-list-container__card">
            <div className="card-content">
                <h4 className={"card-content__title"}> {el.name} {el.surname}</h4>
                <div style={{width: 200, height:200, backgroundColor: 'lightgreen'}}></div>

                <p>Score: {el.score}</p>
            <p className={"card-content__text"}>Description: {el.description}</p>
            <CardButton link={'#'}/>
            </div>

        </div>  ,list)}

    </div>
}

export default PersonsList;