import harry from './images/guessWhoImages/harry-potter.jpg';
import ron from './images/guessWhoImages/ron-weasley.webp';
import luna from './images/guessWhoImages/luna-lovegood.jpg';
import ginny from './images/guessWhoImages/ginny-weasley.bmp';
import lilly from './images/guessWhoImages/lilly-potter.jpg'
import severus from './images/guessWhoImages/severus-snape.jpg'
import albus from './images/guessWhoImages/albus-dumbledore.jpg'
import draco from './images/guessWhoImages/draco-malfoy.jpg'
import rubeus from './images/guessWhoImages/rubeus-hagrid.png'
import bellatrix from './images/guessWhoImages/bellatrix-lestrange.jpg'
import fred from './images/guessWhoImages/fred-weasley.jpg'
import lucius from './images/guessWhoImages/lucius-malfoy.jpg'

export const initialState = {
    hiddenCharacter: '',
    characters: [
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
            eyeColour: 'unknown',
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
            eyeColour: 'unknown',
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
            eyeColour: 'unknown',
            gender: 'male',
            imgLink: draco
        },
        {
            name: 'Rubeus Hagrid',
            hairColour: 'brown',
            eyeColour: 'unknown',
            gender: 'male',
            beard: true,
            imgLink: rubeus
        },
        {
            name: 'Bellatrix Lestrange',
            hairColour: 'black',
            eyeColour: 'unknown',
            gender: 'female',
            imgLink: bellatrix
        },
        {
            name: 'Fred Weasley',
            hairColour: 'red',
            eyeColour: 'unknown',
            gender: 'male',
            imgLink: fred
        },
        {
            name: 'Lucius Malfoy',
            hairColour: 'blonde',
            eyeColour: 'unknown',
            gender: 'male',
            imgLink: lucius
        }
    ],
    numberOfAsksLeft: 3,
    guessedCharacter: false
};
const handleNonExistentProperty = (character, property, feature) => {
    if (!character[ property] || character[ property] === null) {
        return character;
    } else {
        if (character[ property] !== feature) {
            return character;
        }
    }
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_HIDDEN_CHARACTER":
            return {
                ...state,
                hiddenCharacter: action.payload 
            };
        case "ELIMINATE_CHARACTERS":
            let charactersLeft = [];
            //first check if the hiddenCharacter has this characterstic 
            if (state.hiddenCharacter[ action.payload.property ]) {
                //if so return only characters that have it else opposite
                if (state.hiddenCharacter[ action.payload.property ] === action.payload.feature) {
                    charactersLeft = state.characters.filter(character => character[ action.payload.property ] === action.payload.feature);
                } else {
                    charactersLeft = state.characters.filter(character => character[ action.payload.property ] !== action.payload.feature);
                }
            } else {
                console.log(`${state.hiddenCharacter.name} does not have a ${action.payload.property}`)
                //charactersLeft will be equal to only the characters that do no have this property or have this property but not equal to the same feature
                // charactersLeft = state.characters.filter(character => !(character[ action.payload.property ]) || character[ action.payload.property ] !== action.payload.feature);
                charactersLeft = state.characters.filter(character => handleNonExistentProperty(character, action.payload.property, action.payload.feature));
            }
            return {
                ...state,
                characters: charactersLeft
            }
        case "DECREMENT_ASKS":
            return {
                ...state,
                numberOfAsksLeft: state.numberOfAsksLeft - 1
            }
        case "SET_GUESSED_CHARACTER":
            return {
                ...state,
                guessedCharacter: action.payload
            }
        default:
            return state;
    }
  };


export const setHiddenCharacter = hiddenCharacter => {
    return {
        type: "SET_HIDDEN_CHARACTER",
        payload: hiddenCharacter
    };
};

export const eliminateCharacters = characteristic => {
    return {
        type: "ELIMINATE_CHARACTERS",
        payload: characteristic //this is an object
    };
};

export const decrementNumberOfAsks = () => {
    return {
        type: "DECREMENT_ASKS"
    };
};

export const setGuessedCharacter = () => {
    return {
        type: "SET_GUESSED_CHARACTER"
    };
};

