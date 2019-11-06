import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="operators-button">
      {props.operator}
    </button>
  );
};
export default OperatorButton;