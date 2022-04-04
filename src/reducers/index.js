import { combineReducers } from "redux";
import lenguageReducer from "./lenguageReducer";

const reducer= combineReducers({
    lenguage: lenguageReducer
});

export default reducer;

