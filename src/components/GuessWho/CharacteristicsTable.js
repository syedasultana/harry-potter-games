import React from 'react';
import CharacteristicCell from './CharacteristicCell';

function CharacteristicsTable() {
    
   
  return (
    <>
      <p>Characteristics:</p>
      <p>*Click on characteristic to eliminate</p>
      <div class="row">
        <h4>Hair Colours:</h4>
        <CharacteristicCell feature={'blonde'} property={'hairColour'}/>
        <CharacteristicCell feature={'brown'} property={'hairColour'} />
        <CharacteristicCell feature={'red'} property={'hairColour'} />
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
        <h4>Others:</h4>
        <CharacteristicCell feature={'beard'} property={'beard'}/>
        <CharacteristicCell feature={'long nose'} property={'longNose'}/>
        <CharacteristicCell feature={'glasses'} property={'glasses'}/>
      </div>
    </>
  ); 

  }

export default CharacteristicsTable;