import React, { useState }from "react";
import { operators } from "../../../data"
import OperatorButton from "./OperatorButton"

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorButtons] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div className="operator-Buttons">
      {operatorButtons.map(ops => <OperatorButton 
      operators = {ops}
      key={operators}/>)}
    </div>
  );
};
export default Operators