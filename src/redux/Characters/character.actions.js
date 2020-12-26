export const GET_CHARACTERS = "characters/GET_CHARACTER";
export const GET_CHARACTERS_SUCCESS = "characters/GET_CHARACTERS_SUCCESS";
export const GET_CHARACTERS_ERROR = "characters/GET_CHARACTERS_ERROR";

export const getCharacters = () => {
  return {
    type: GET_CHARACTERS,
  };
};

export const getCharactersSuccess = (payload) => {
  return {
    type: GET_CHARACTERS_SUCCESS,
    payload,
  };
};

export const getCharactersError = (error) => {
  return {
    type: GET_CHARACTERS_ERROR,
    error,
  };
};
