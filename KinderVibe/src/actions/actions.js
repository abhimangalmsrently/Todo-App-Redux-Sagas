import {COUNTER_CHANGE, SAVE_POST} from '../constants/constants';


/**
 * *----calls from events
 */
export const changeCount = (count) => dispatch =>{ 
console.log('changeCount');
    dispatch({
        type: COUNTER_CHANGE,
        payload: count
    });

};

export const savePost = () => { 
    console.log('savePost');
        return{
            type: 'callInvokeApi'
        };
};



/**
 * *----calls from Saga
 */
export const savePostSaga = (response) => { 
    console.log('savePostSaga');
        return{
            type: SAVE_POST,
            payload: response,
          };
    
};
