import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import countReducer from '../reducers/reducers';
import saga from 'redux-saga';
import sagaWatchers from '../saga/saga';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({countReducer});

const sagaMiddleware = saga();

// const middleWare = applyMiddleware(sagaMiddleware);

const storeMiddleWare = compose(
    applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware)
)(createStore);

//createStore(reducer, [preloadedState], [enhancer])
const configureStore = storeMiddleWare(rootReducer, {},  middleWare); 

export default configureStore;

sagaMiddleware.run(sagaWatchers);