export const SET_TASK = 'SET_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const MARK_TASK = 'MARK_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';


// export const setTask = (payload) => ({
//     type: SET_TASK,
//     payload
// });

export const setTask= (payload) => {
    console.log('tasks addded', payload);
    return {
       type: SET_TASK,
       payload
     };
 };
 

export const removeTask = (payload) => {
    console.log('tasks removed', payload);
    return {
       type: REMOVE_TASK,
       payload
     };
 };
 

export const markTask = (payload) => {
    console.log('tasks marked/Unmarked', payload);
    return {
       type: MARK_TASK,
       payload
     };
 };
 

export const updateTask = (payload) => {
    console.log('tasks updated', payload);
    return {
       type: UPDATE_TASK,
       payload
     };
 };
 

