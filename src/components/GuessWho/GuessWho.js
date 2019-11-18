import React from 'react';
import CharactersGrid from './CharactersGrid';
import CharacteristicsTable from './CharacteristicsTable';
import EnterGuess from './EnterGuess';

function GuessWho() {
    
   
       return (
        <>
            <CharactersGrid />
            <br />
            <CharacteristicsTable />
            <br />
            <EnterGuess />
        </>
       ); 
   
  }

export default GuessWho;