import React from 'react';
import { useDispatch, useSelector } from "react-redux";

function CharacteristicCell({ feature, property }) {
    const dispatch = useDispatch();
    const [askedAboutThisFeature, setAskedAboutThisFeature] = React.useState(false)
    const numberOfAsksLeft = useSelector(storeState => storeState.numberOfAsksLeft);

    return (
    <div class="col-sm-"
        onClick={() => {
            if (numberOfAsksLeft !== 0) {
                console.log(feature + ' being eliminated', property);
                //remove all elements from characters array where property === feature || property exists:
                dispatch({ type: "ELIMINATE_CHARACTERS", payload: { property: property, feature: feature } });
                //decrement numberOfAsksLeft state
                dispatch({ type: "DECREMENT_ASKS" });
                //make this feature a strikethrough so the user knows theyve already asked about this feature
                setAskedAboutThisFeature(true);
            } else {
                console.log('no more asks left');
            }
            
        }}
    >
        <div>
            {
                (askedAboutThisFeature)
                ? <strike>{feature}</strike>
                : <p>{feature}</p>
            }
        </div>
        
    </div>
    ); 
   
  }

export default CharacteristicCell;