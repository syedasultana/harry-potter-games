import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import CharacterCell from './CharacterCell';

import harry from '..//..//images/guessWhoImages/harry-potter.jpg';
import ron from '..//..//images/guessWhoImages/ron-weasley.webp';
import luna from '..//..//images/guessWhoImages/luna-lovegood.jpg';
import ginny from '..//..//images/guessWhoImages/ginny-weasley.bmp';
import lilly from '..//..//images/guessWhoImages/lilly-potter.jpg'
import severus from '..//..//images/guessWhoImages/severus-snape.jpg'
import albus from '..//..//images/guessWhoImages/albus-dumbledore.jpg'
import draco from '..//..//images/guessWhoImages/draco-malfoy.jpg'
import rubeus from '..//..//images/guessWhoImages/rubeus-hagrid.png'
import bellatrix from '..//..//images/guessWhoImages/bellatrix-lestrange.jpg'
import fred from '..//..//images/guessWhoImages/fred-weasley.jpg'
import lucius from '..//..//images/guessWhoImages/lucius-malfoy.jpg'


const imgLinks = [
        harry,
        ron,
        luna,
        ginny,
        lilly,
        severus,
        albus,
        draco,
        rubeus,
        bellatrix,
        fred,
        lucius
]

function CharactersGrid() {
    const dispatch = useDispatch();
    const hiddenCharacter = useSelector(storeState => storeState.hiddenCharacter);
    const characters = useSelector(storeState => storeState.characters);
    console.log(characters, 'chars') 
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
                        characters.slice(0, 4).map(character => <CharacterCell name={character.name} imgLink={imgLinks[characters.indexOf(character)]} />)
                        
                    }
                </div>
                <div class="row">
                    {
                        characters.slice(4, 8).map(character => <CharacterCell name={character.name} imgLink={imgLinks[characters.indexOf(character)]} />)
                        
                    }
                </div> 
                <div class="row">
                        {
                            characters.slice(8, 12).map(character => <CharacterCell name={character.name} imgLink={imgLinks[characters.indexOf(character)]} />)
                            
                        }
                </div> 
               
            </div> 
        </div>
       ); 
   
  }

export default CharactersGrid;