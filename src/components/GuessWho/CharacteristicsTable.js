import React from 'react';
import CharacteristicCell from './CharacteristicCell';
import { useSelector } from "react-redux";

function CharacteristicsTable() {
    const numberOfAsksLeft = useSelector(storeState => storeState.numberOfAsksLeft);
    const guessedCharacter = useSelector(storeState => storeState.guessedCharacter);

    if (guessedCharacter) {
      return (
        <></>
      )
    } else {
      return (
        <div class="container">
          <p>*Click on characteristic to eliminate ({numberOfAsksLeft})</p>
          <p>Characteristics:</p>
          <div class="characteristicsTable">
            <div class="row">
              <h4>Hair Colours:</h4>
              <CharacteristicCell feature={'blonde'} property={'hairColour'}/>
              <CharacteristicCell feature={'brown'} property={'hairColour'} />
              <CharacteristicCell feature={'red'} property={'hairColour'} />
              <CharacteristicCell feature={'black'} property={'hairColour'} />
            </div>
            <div class="row">
              <h4>Eye Colours:</h4>
              <CharacteristicCell feature={'green'} property={'eyeColour'}/>
              <CharacteristicCell feature={'blue'} property={'eyeColour'}/>
              <CharacteristicCell feature={'brown'} property={'eyeColour'}/>
            </div>
            <div class="row">
              <h4>Genders:</h4>
              <CharacteristicCell feature={'female'} property={'gender'}/>
              <CharacteristicCell feature={'male'} property={'gender'}/>
            </div>
            <div class="row">
              <h4>Blood Status:</h4>
              <CharacteristicCell feature={'pure-blood'} property={'bloodStatus'}/>
              <CharacteristicCell feature={'half-blood'} property={'bloodStatus'}/>
              <CharacteristicCell feature={'muggle-born'} property={'bloodStatus'}/>
            </div>
          </div>
        </div>
      ); 
    }

  }

export default CharacteristicsTable;