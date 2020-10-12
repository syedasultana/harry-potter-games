import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import CharacterCell from './CharacterCell';



function CharactersGrid() {
    const dispatch = useDispatch();
    const hiddenCharacter = useSelector(storeState => storeState.hiddenCharacter);
    const characters = useSelector(storeState => storeState.characters);
    const guessedCharacter = useSelector(storeState => storeState.guessedCharacter);
    console.log(guessedCharacter, 'guessedChar boolean') //temp


    React.useEffect(() => {
        if (hiddenCharacter === '') {
            //generate random character here and store in redux store
            let min = 0;
            let max = 11;
            let randomNumber = Math.round(Math.random() * (max - min) + min);
            let randomCharacter = characters[randomNumber];
            console.log('random character: ', randomCharacter);
            dispatch({ type: "SET_HIDDEN_CHARACTER", payload: randomCharacter });
        } 
    }, [hiddenCharacter])

    if (guessedCharacter) {
        return (
            <div class="charactersGrid">
                <div class="row">
                    <CharacterCell name={hiddenCharacter.name} imgLink={`../.${hiddenCharacter.imgLink}`} />
                </div>
            </div>
        )
    } else {
        return (
            <div class="text-center">
                <p>Characters:</p>
                <div className="wrapper">
                    <div className="row">
                        {
                            formatRow(characters, 0, 4)
                            
                        }
                    </div>
                    <div className="row">
                        {
                            formatRow(characters, 4, 8)
                            
                        }
                    </div> 
                    <div className="row">
                        {
                            formatRow(characters, 8, 12)
                            
                        }
                    </div> 
                    <div className="row">
                        {
                            formatRow(characters, 12, 16)
                            
                        }
                    </div> 
                </div> 
            </div>
        ); 
    }
   
       
   
}

function formatRow(array, start, end) {
    return array.slice(start, end).map(character => <CharacterCell name={character.name} imgLink={`../.${character.imgLink}`} />)
}



export default CharactersGrid;