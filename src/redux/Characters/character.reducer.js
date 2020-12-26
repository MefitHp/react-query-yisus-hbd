import {
  GET_CHARACTERS,
  GET_CHARACTERS_ERROR,
  GET_CHARACTERS_SUCCESS,
} from "./character.actions";

const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        loading: true,
      };

    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case GET_CHARACTERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
