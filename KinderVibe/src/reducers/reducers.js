import {COUNTER_CHANGE, SET_COUNT, SAVE_POST} from '../constants/constants';

const initialState = {
  count: 0,
  post: []
};

function countReducer(state = initialState, action) {
  console.log(
    state.count + 1,
    action.type,
  );

  switch (action.type) {
    case COUNTER_CHANGE:
      console.log('state', state);

      return {
        ...state,
        count: state.count + 1
      };
      
    case SAVE_POST:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
}

export default countReducer;
