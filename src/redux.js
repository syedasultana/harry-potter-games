export const initialState = {
    hiddenCharacter: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_HIDDEN_CHARACTER":
            return {
                hiddenCharacter: state.payload 
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

