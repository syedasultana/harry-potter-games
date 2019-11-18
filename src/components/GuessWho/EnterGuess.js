import React from 'react';
import { useSelector } from "react-redux";

function EnterGuess() {
    const hiddenCharacter = useSelector(storeState => storeState.hiddenCharacter);
   
    return (
    <>
        <p>EnterGuess</p>
    </>
    ); 
   
  }

export default EnterGuess;