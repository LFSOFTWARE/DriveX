import types from "./types";
import produce from "immer";


const INITIAL_STATE = {
    user: {
        fbId: null,
        nome: null,
        email: null,
        tipo: 'm',
        acessToken: null
    }
}

function app(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.UPDATE_USER: {
            
            return produce(state, (draft) => {
              
                draft.user = {...state.user,...action.user}
            })
        }
        default: // need this for default case
        return state 

    }
}


export default app;