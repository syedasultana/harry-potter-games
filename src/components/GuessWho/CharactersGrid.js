import React from 'react';
import { useDispatch, useSelector } from "react-redux";

const characters = [
    {
        name: 'Harry Potter',
        hairColour: 'black',
        eyeColour: 'green',
        gender: 'male',
        glasses: true
    },
    {
        name: 'Ron Weasley',
        hairColour: 'red',
        gender: 'male',
    },
    {
        name: 'Luna Lovegood',
        hairColour: 'blonde',
        eyeColour: 'blue',
        gender: 'female'
    },
    {
        name: 'Ginny Weasley',
        hairColour: 'red',
        eyeColour: 'brown',
        gender: 'female'
    },
    {
        name: 'Lilly Potter',
        hairColour: 'red',
        eyeColour: 'green',
        gender: 'female'
    },
    {
        name: 'Severus Snape',
        hairColour: 'black',
        gender: 'male',
        longNose: true
    },
    {
        name: 'Albus Dumbledore',
        eyeColour: 'blue',
        gender: 'male',
        glasses: true,
        longNose: true
    },
    {
        name: 'Draco Malfoy',
        hairColour: 'blonde',
        gender: 'male'
    },
    {
        name: 'Rubeus Hagrid',
        hairColour: 'black',
        gender: 'male'
    },
    {
        name: 'Bellatrix Lestrange',
        hairColour: 'black',
        gender: 'female'
    },
    {
        name: 'Fred Weasley',
        hairColour: 'red',
        gender: 'male'
    },
    {
        name: 'Lucius Malfoy',
        hairColour: 'blonde',
        gender: 'male'
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
        <>
            <p>CharactersGrid</p>
        </>
       ); 
   
  }

export default CharactersGrid;