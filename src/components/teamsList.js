import React, { useState} from 'react';
import {indexOf, map, prop} from "ramda";
import Modal from "./modal";


const TeamsList = ({list}) => {

    console.log("teamsList", list)
    const [showModal, setShowModal] = useState(false)

    console.log('showModal', showModal)


    return <div className={"card-list-container"}>
        {map((el) =><div key={indexOf(el, list)} className="card-list-container__card">
            <div className="card-content">
                <h4 className={"card-content__title"}> {el.teamName}</h4>
                <div style={{display: "flex", justifyContent: "center", width: 200, height:"fit-content", backgroundColor: 'yellow', fontSize: 10}}>
                    <h5>Team players</h5>
                    <ul style={{listStyleType: "none"}}>{map((i) => {const name = prop('name', i)
                        const surname = prop('surname', i)
                        return <li>{name} {surname}</li>}, el.teamPlayers)}</ul></div>
                <p className={"card-content__text"}>Description: {el.description}</p>
                <button className={"card-content__btn"} onClick={() => setShowModal(true)}>Details</button>
            </div>
            <Modal show={showModal} message={<div><h5>Players</h5>
            <div> <ul style={{listStyleType: "none"}}>{map((i) => {const name = prop('name', i)
                const surname = prop('surname', i)
                return <li>{name} {surname}</li>}, el.teamPlayers)}</ul></div></div>} handleCloseModal={() => setShowModal(false)}/>
        </div>  ,list)}

    </div>

}


export default TeamsList;