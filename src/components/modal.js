import React from 'react';
import ReactDOM from 'react-dom';


const Modal = ({message, show, handleCloseModal}) => {

    return (
        show && ReactDOM.createPortal(<div className="modal"><div>{message}</div><button className={"card-content__btn"} onClick={handleCloseModal}>x</button></div>, document.body)
    )
}

export default Modal;