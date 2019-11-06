import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";
//import any components needed
//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [buttonSpecials] = useState(specials);
  return (
    
    <div className="topRow">
      {buttonSpecials.map(spec => <SpecialButton
        special={spec} key={spec} />)}
    </div>
  );
};
export default Specials;
