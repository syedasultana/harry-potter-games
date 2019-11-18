import React from 'react';


function CharacterCell({ name, imgLink }) {
    
    return (
    <div class="col-sm-">
        <img src={imgLink} height="150" width="100"></img>
        <p>{name}</p>
    </div>
    ); 
   
  }

export default CharacterCell;