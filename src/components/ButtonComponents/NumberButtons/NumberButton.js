import React from "react";

const NumberButton = (props) => {
  return (
    <button className="numberButtons">
      {props.number}
    </button>
  );
};

export default NumberButton;