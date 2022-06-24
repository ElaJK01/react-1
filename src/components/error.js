import React from "react";
import error from "../assets/error.png";

const Error = ({ onClick }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: 5,
    }}
  >
    <p style={{ color: "red", width: "fit-content" }}>
      Sorry, couldn't get what you want!
    </p>
    <img src={error} alt="error" width={50} height={50} />
    <button type="button" className="error__btn" onClick={onClick}>
      Try again!
    </button>
  </div>
);

export default Error;
