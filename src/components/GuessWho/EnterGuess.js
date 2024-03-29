import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { InputGroup, FormControl } from 'react-bootstrap/';
import Button from 'react-bootstrap/Button';

function EnterGuess() {
  const dispatch = useDispatch();
  const hiddenCharacter = useSelector(storeState => storeState.hiddenCharacter);
  const [guess, setGuess] = React.useState();
  const guessedCharacter = useSelector(storeState => storeState.guessedCharacter);

  if (guessedCharacter) {
    return (
      <div class="container">
        <h4>You guessed: {guess}</h4>
        <h4>The hidden character is: {hiddenCharacter.name}</h4>
        <div>
          {
            //work out if user is wrong or right
            (guess === hiddenCharacter.name)
            ? <h3>⭐️🏆Correct🏆⭐️</h3>
            : <h3>Incorrect❌</h3>
          }
        </div>
      </div>
    )
  } else {
    return (
      <div class="container">
      <h4>Enter Guess (* only 1 chance to guess)</h4>

      <InputGroup
        className="mb-3"
        placeholder="e.g Ron Weasley"
        onChange={(event) => {
          setGuess(event.target.value)
        }}
      >
        <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default" >character name</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <Button variant="outline-warning" onClick={() => {
        console.log(guess, 'guessedChar');
        dispatch({ type: "SET_GUESSED_CHARACTER", payload: true });
      }}>GUESS</Button>
      </div>
    )
  }
   
    
   
  }

export default EnterGuess;