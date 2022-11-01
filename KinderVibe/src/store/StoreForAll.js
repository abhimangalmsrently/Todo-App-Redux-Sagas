
//TODO: COPY THIS CODE TO "STORE.JS" FOR USING REDUX WITH CLASS COMPONENTS

/**
import {createStore, combineReducers, applyMiddleware} from 'redux';
import countReducer from '../reducers/reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({countReducer});

const configureStore = createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;*/

/**
  * !------------------------------------------------------------------------------ */

//TODO: COPY THIS CODE TO "STORE.JS" FOR USING REDUX WITH FUNCTIONAL 
//TODO: COMPONENTS, THUNKS AS MIDDLEWARE

// import {createStore, combineReducers, applyMiddleware} from 'redux';
// import countReducer from '../reducers/reducers';
// import thunk from 'redux-thunk';

// const rootReducer = combineReducers({countReducer});

// const configureStore = createStore(rootReducer, applyMiddleware(thunk));

// export default configureStore;

/**
  * !------------------------------------------------------------------------------ */

/**
 * TODO: COPY THIS CODE TO "STORE.JS" FOR USING 
 * TODO: REDUX WITH FUNCTIONAL COMPONENTS, SAGA AS MIDDLEWARE
 */


// import {createStore, combineReducers, applyMiddleware} from 'redux';
// import countReducer from '../reducers/reducers';
// import saga from 'redux-saga';
// import sagaWatchers from '../saga/saga';

// const rootReducer = combineReducers({countReducer});

// const sagaMiddleware = saga();

// const middleWare = applyMiddleware(sagaMiddleware);

// //createStore(reducer, [preloadedState], [enhancer])
// const configureStore = createStore(rootReducer, {},  middleWare); 

// export default configureStore;


// sagaMiddleware.run(sagaWatchers);

