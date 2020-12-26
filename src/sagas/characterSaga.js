import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_CHARACTERS,
  getCharactersError,
  getCharactersSuccess,
} from "../redux/Characters/character.actions";

const fetchCaracters = () => {
  return {};
};
function* fetchUser(action) {
  try {
    const characters = yield call(fetchCaracters);
    yield put(getCharactersSuccess(characters));
  } catch (err) {
    yield put(getCharactersError(err));
  }
}

function* characterSaga() {
  yield takeLatest(GET_CHARACTERS, fetchUser);
}

export default characterSaga;
