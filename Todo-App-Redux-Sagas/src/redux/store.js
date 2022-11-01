import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import taskReducer from './reducers';
import appSagas from './sagas';


// const rootReducer = combineReducers({taskReducer});

// export const store = createStore(taskReducer, applyMiddleware(thunk));

console.log('store');


const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(taskReducer, applyMiddleware(sagaMiddleWare));


sagaMiddleWare.run(appSagas);

export default store;
