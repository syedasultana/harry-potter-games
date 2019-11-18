import React from 'react';


function CharacteristicCell({ feature, property }) {
    
    return (
    <div class="col-sm-"
        onClick={() => {
            console.log(feature + ' being eliminated', property);
        }}
    >
        <p>{feature}</p>
    </div>
    ); 
   
  }

export default CharacteristicCell;