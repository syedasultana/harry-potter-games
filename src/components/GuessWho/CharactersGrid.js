import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import CharacterCell from './CharacterCell';



function CharactersGrid() {
    const dispatch = useDispatch();
    const hiddenCharacter = useSelector(storeState => storeState.hiddenCharacter);
    const characters = useSelector(storeState => storeState.characters);
    const guessedCharacter = useSelector(storeState => storeState.guessedCharacter);
    console.log(characters, 'chars') //temp

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

      
   
       return (
        <div class="text-center">
            <p>Characters:</p>
            <div class="charactersGrid">
                <div class="row">
                    {
                        characters.slice(0, 4).map(character => <CharacterCell name={character.name} imgLink={`../.${character.imgLink}`} />)
                        
                    }
                </div>
                <div class="row">
                    {
                        characters.slice(4, 8).map(character => <CharacterCell name={character.name} imgLink={`../.${character.imgLink}`} />)
                        
                    }
                </div> 
                <div class="row">
                        {
                            characters.slice(8, 12).map(character => <CharacterCell name={character.name} imgLink={`../.${character.imgLink}`} />)
                            
                        }
                </div> 
               
            </div> 
        </div>
       ); 
   
  }

export default CharactersGrid;