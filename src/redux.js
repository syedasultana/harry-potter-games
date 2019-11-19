export const initialState = {
    hiddenCharacter: '',
    characters: [
        {
            name: 'Harry Potter',
            hairColour: 'brown',
            eyeColour: 'green',
            gender: 'male',
            glasses: true
            //imgLink: harry
        },
        {
            name: 'Ron Weasley',
            hairColour: 'red',
            gender: 'male'
            //imgLink: ron
        },
        {
            name: 'Luna Lovegood',
            hairColour: 'blonde',
            eyeColour: 'blue',
            gender: 'female'
            //imgLink: luna
        },
        {
            name: 'Ginny Weasley',
            hairColour: 'red',
            eyeColour: 'brown',
            gender: 'female'
            //imgLink: ginny
        },
        {
            name: 'Lilly Potter',
            hairColour: 'red',
            eyeColour: 'green',
            gender: 'female'
            //imgLink: lilly
        },
        {
            name: 'Severus Snape',
            hairColour: 'black',
            gender: 'male',
            longNose: true
            //imgLink: severus
        },
        {
            name: 'Albus Dumbledore',
            eyeColour: 'blue',
            gender: 'male',
            glasses: true,
            longNose: true,
            beard: true
            //imgLink: albus
        },
        {
            name: 'Draco Malfoy',
            hairColour: 'blonde',
            gender: 'male'
            //imgLink: draco
        },
        {
            name: 'Rubeus Hagrid',
            hairColour: 'brown',
            gender: 'male',
            beard: true
            //imgLink: rubeus
        },
        {
            name: 'Bellatrix Lestrange',
            hairColour: 'black',
            gender: 'female'
            //imgLink: bellatrix
        },
        {
            name: 'Fred Weasley',
            hairColour: 'red',
            gender: 'male'
            //imgLink: fred
        },
        {
            name: 'Lucius Malfoy',
            hairColour: 'blonde',
            gender: 'male',
            //imgLink: lucius
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_HIDDEN_CHARACTER":
            return {
                ...state,
                hiddenCharacter: action.payload 
            };
        
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

