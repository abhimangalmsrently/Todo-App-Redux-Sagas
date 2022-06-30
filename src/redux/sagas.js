import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import {SET_TASK, REMOVE_TASK, MARK_TASK, UPDATE_TASK} from './actions';
import {setTask, markTask, removeTask, updateTask} from './actions';

function* setTaskFuntion() {
    console.log("in sagas")
  yield put(setTask());
}

function* markTaskFuntion() {
  yield put(markTask());
}

function* removeTaskFuntion() {
  yield put(removeTask());
}

function* updateTaskFuntion() {
  yield put(updateTask());
}

function* appSagas() {
    console.log("app sagas");
//   yield takeLatest(SET_TASK, setTaskFuntion);
//   yield takeLatest(MARK_TASK, markTaskFuntion);
//   yield takeLatest(REMOVE_TASK, removeTaskFuntion);
//   yield takeLatest(UPDATE_TASK, updateTaskFuntion);
}

export default appSagas;
