import React from "react";


const SpecialButton = (props) => {
  return (
    <button className="specialButtons">

      {props.special}
    </button>
  );
};

export default SpecialButton;