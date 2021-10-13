const initState: any = {
    
};

export const registerReducer = (state = initState, action: any): any => { 
    switch (action.type) {
        case "": {
            return state
        }
        default: return state;
    }
};

