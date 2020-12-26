import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_CHARACTERS,
  getCharactersError,
  getCharactersSuccess,
} from "../redux/Characters/character.actions";
import { BASE_URL } from "../utils";

const fetchCharacters = async (key, params) => {
  const response = await fetch(`${BASE_URL}/characters`);
  return response.json();
};

function* fetchUser(action) {
  try {
    const characters = yield call(fetchCharacters);
    yield put(getCharactersSuccess(characters));
  } catch (err) {
    yield put(getCharactersError(err));
  }
}

function* characterSaga() {
  yield takeLatest(GET_CHARACTERS, fetchUser);
}

export default characterSaga;
