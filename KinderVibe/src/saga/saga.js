import {all, put, takeLatest} from 'redux-saga/effects';
import {COUNTER_CHANGE, SAVE_POST} from '../constants/constants';
import {savePostSaga} from '../actions/actions'

function* invokeApiSaga() {
    
  const rawData = yield fetch('https://jsonplaceholder.typicode.com/posts');
  const response = yield rawData.json();

  yield put(savePostSaga(response));
}

function* sagaListener() {
  yield takeLatest('callInvokeApi', invokeApiSaga);
}

function* sagaWatchers() {
  yield all([sagaListener()]);
}

export default sagaWatchers;
