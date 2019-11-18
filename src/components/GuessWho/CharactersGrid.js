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


const characters = [
    {
        name: 'Harry Potter',
        hairColour: 'brown',
        eyeColour: 'green',
        gender: 'male',
        glasses: true,
        imgLink: harry
    },
    {
        name: 'Ron Weasley',
        hairColour: 'red',
        gender: 'male',
        imgLink: ron
    },
    {
        name: 'Luna Lovegood',
        hairColour: 'blonde',
        eyeColour: 'blue',
        gender: 'female',
        imgLink: luna
    },
    {
        name: 'Ginny Weasley',
        hairColour: 'red',
        eyeColour: 'brown',
        gender: 'female',
        imgLink: ginny
    },
    {
        name: 'Lilly Potter',
        hairColour: 'red',
        eyeColour: 'green',
        gender: 'female',
        imgLink: lilly
    },
    {
        name: 'Severus Snape',
        hairColour: 'black',
        gender: 'male',
        longNose: true,
        imgLink: severus
    },
    {
        name: 'Albus Dumbledore',
        eyeColour: 'blue',
        gender: 'male',
        glasses: true,
        longNose: true,
        beard: true,
        imgLink: albus
    },
    {
        name: 'Draco Malfoy',
        hairColour: 'blonde',
        gender: 'male',
        imgLink: draco
    },
    {
        name: 'Rubeus Hagrid',
        hairColour: 'brown',
        gender: 'male',
        beard: true,
        imgLink: rubeus
    },
    {
        name: 'Bellatrix Lestrange',
        hairColour: 'black',
        gender: 'female',
        imgLink: bellatrix
    },
    {
        name: 'Fred Weasley',
        hairColour: 'red',
        gender: 'male',
        imgLink: fred
    },
    {
        name: 'Lucius Malfoy',
        hairColour: 'blonde',
        gender: 'male',
        imgLink: lucius
    }
]

function CharactersGrid() {
    const dispatch = useDispatch();
    const hiddenCharacter = useSelector(storeState => storeState.hiddenCharacter);
    
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
        <div>
            <p>Characters:</p>
            {/* separate each column into character and pass prop: */}
            {/* use map to iterate through characters array: */}
            <div class="charactersGrid text-center">
                <div class="row">
                    <CharacterCell name={characters[0].name} imgLink={characters[0].imgLink} />
                    <CharacterCell name={characters[1].name} imgLink={characters[1].imgLink} />
                    <CharacterCell name={characters[2].name} imgLink={characters[2].imgLink} />
                    <CharacterCell name={characters[3].name} imgLink={characters[3].imgLink} />
                </div>
                <div class="row">
                    <CharacterCell name={characters[4].name} imgLink={characters[4].imgLink} />
                    <CharacterCell name={characters[5].name} imgLink={characters[5].imgLink} />
                    <CharacterCell name={characters[6].name} imgLink={characters[6].imgLink} />
                    <CharacterCell name={characters[7].name} imgLink={characters[7].imgLink} />
                </div>
                <div class="row">
                    <CharacterCell name={characters[8].name} imgLink={characters[8].imgLink} />
                    <CharacterCell name={characters[9].name} imgLink={characters[9].imgLink} />
                    <CharacterCell name={characters[10].name} imgLink={characters[10].imgLink} />
                    <CharacterCell name={characters[11].name} imgLink={characters[11].imgLink} />
                </div>
            </div>
        </div>
       ); 
   
  }

export default CharactersGrid;