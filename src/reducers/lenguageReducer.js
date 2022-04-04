import { CHANGE_TO_BR, CHANGE_TO_EN, CHANGE_TO_ESP } from "../types";

const initialState = 'es';

export default function lenguageReducer(state = initialState, action) {
    switch(action.type){
        case CHANGE_TO_ESP:
            return 'es'
        case CHANGE_TO_EN:
            return 'en'
        case CHANGE_TO_BR:
            return 'br'
        default:
            return state
    }
}

