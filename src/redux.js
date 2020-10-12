import harry from './images/guessWhoImages/harry-potter.jpg';
import ron from './images/guessWhoImages/ron-weasley.webp';
import luna from './images/guessWhoImages/luna-lovegood.jpg';
import ginny from './images/guessWhoImages/ginny-weasley.bmp';
import lilly from './images/guessWhoImages/lilly-potter.jpg';
import severus from './images/guessWhoImages/severus-snape.jpg';
import albus from './images/guessWhoImages/albus-dumbledore.jpg';
import draco from './images/guessWhoImages/draco-malfoy.jpg';
import rubeus from './images/guessWhoImages/rubeus-hagrid.png';
import bellatrix from './images/guessWhoImages/bellatrix-lestrange.jpg';
import fred from './images/guessWhoImages/fred-weasley.jpg';
import lucius from './images/guessWhoImages/lucius-malfoy.jpg';
import hermione from './images/guessWhoImages/hermione.jpg';
import rita from './images/guessWhoImages/rita.jpg';
import cho from './images/guessWhoImages/cho.jpg';
import dolores from './images/guessWhoImages/umbridge.png';

export const initialState = {
    hiddenCharacter: '',
    characters: [
        {
            name: 'Harry Potter',
            hairColour: 'brown',
            eyeColour: 'green',
            gender: 'male',
            bloodStatus: 'half-blood',
            imgLink: harry
        },
        {
            name: 'Ron Weasley',
            hairColour: 'red',
            eyeColour: 'unknown',
            gender: 'male',
            bloodStatus: 'pure-blood',
            imgLink: ron
        },
        {
            name: 'Luna Lovegood',
            hairColour: 'blonde',
            eyeColour: 'blue',
            gender: 'female',
            bloodStatus: 'pure-blood',
            imgLink: luna
        },
        {
            name: 'Ginny Weasley',
            hairColour: 'red',
            eyeColour: 'brown',
            gender: 'female',
            bloodStatus: 'pure-blood',
            imgLink: ginny
        },
        {
            name: 'Lilly Potter',
            hairColour: 'red',
            eyeColour: 'green',
            gender: 'female',
            bloodStatus: 'muggle-born',
            imgLink: lilly
        },
        {
            name: 'Severus Snape',
            hairColour: 'black',
            eyeColour: 'unknown',
            gender: 'male',
            bloodStatus: 'half-blood',
            imgLink: severus
        },
        {
            name: 'Albus Dumbledore',
            eyeColour: 'blue',
            gender: 'male',
            bloodStatus: 'half-blood',
            imgLink: albus
        },
        {
            name: 'Draco Malfoy',
            hairColour: 'blonde',
            eyeColour: 'unknown',
            gender: 'male',
            bloodStatus: 'pure-blood',
            imgLink: draco
        },
        {
            name: 'Rubeus Hagrid',
            hairColour: 'brown',
            eyeColour: 'unknown',
            gender: 'male',
            bloodStatus: 'unknown',
            imgLink: rubeus
        },
        {
            name: 'Bellatrix Lestrange',
            hairColour: 'black',
            eyeColour: 'unknown',
            gender: 'female',
            bloodStatus: 'pure-blood',
            imgLink: bellatrix
        },
        {
            name: 'Fred Weasley',
            hairColour: 'red',
            eyeColour: 'unknown',
            gender: 'male',
            bloodStatus: 'pure-blood',
            imgLink: fred
        },
        {
            name: 'Lucius Malfoy',
            hairColour: 'blonde',
            eyeColour: 'unknown',
            gender: 'male',
            bloodStatus: 'pure-blood',
            imgLink: lucius
        },
        {
            name: 'Hermonie Granger',
            hairColour: 'brown',
            eyeColour: 'brown',
            gender: 'female',
            bloodStatus: 'muggle-born',
            imgLink: hermione
        },
        {
            name: 'Cho Chang',
            hairColour: 'black',
            eyeColour: 'brown',
            gender: 'female',
            bloodStatus: 'pure-blood',
            imgLink: cho
        },
        {
            name: 'Rita Skeeter',
            hairColour: 'blonde',
            eyeColour: 'green',
            gender: 'female',
            bloodStatus: 'half-blood',
            imgLink: rita
        },
        {
            name: 'Dolores Umbridge',
            hairColour: 'brown',
            eyeColour: 'brown',
            gender: 'female',
            bloodStatus: 'half-blood',
            imgLink: dolores
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
            if (state.hiddenCharacter[ action.payload.property ]) {
                if (state.hiddenCharacter[ action.payload.property ] === action.payload.feature) {
                    charactersLeft = state.characters.filter(character => character[ action.payload.property ] === action.payload.feature);
                } else {
                    charactersLeft = state.characters.filter(character => character[ action.payload.property ] !== action.payload.feature);
                }
            } else {
                console.log(`${state.hiddenCharacter.name} does not have a ${action.payload.property}`)
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

