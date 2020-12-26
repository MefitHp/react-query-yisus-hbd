import { combineReducers } from "redux";
import charactersReducer from "./Characters/character.reducer";

const rootReducer = combineReducers({
  characters: charactersReducer,
});

export default rootReducer;
