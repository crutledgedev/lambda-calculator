import React, { useState } from "react";
import { numbers } from "../../../data"
import NumberButton from "./NumberButton"
//console.log(numbers);
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [buttonNumbers, setButtonNumbers] = useState(numbers);
  return (
    <div className ="numbers">      
       {buttonNumbers.map(value => <NumberButton number={value} 
       key={numbers}/>
        )}
    </div>
  );
};

export default Numbers;