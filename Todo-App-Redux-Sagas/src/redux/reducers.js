import {SET_TASK, REMOVE_TASK, MARK_TASK, UPDATE_TASK} from './actions';

const initialState = {
  taskName: [],
};

function taskReducer(state = initialState, action) {
  console.log('action', action.type);
  switch (action.type) {
    case SET_TASK:
        console.log("state",state);
      return {...state, taskName: [...state.taskName, action.payload]};
        
    case REMOVE_TASK:
      return {
        ...state,
        taskName: state.taskName.filter(
          taskName => taskName.taskId !== action.payload.taskId,
        ),
      };
      
    case MARK_TASK:
      return {
        ...state,
        taskName: state.taskName.map(taskName =>
          taskName.taskId == action.payload.taskId
            ? {...taskName, completed: !taskName.completed}
            : taskName,
        ),
      };
      
    case UPDATE_TASK:
      return {
        ...state,
        taskName: state.taskName.map(taskName =>
          taskName.taskId == action.payload.taskId
            ? {...taskName, task: taskName.task}
            : taskName,
        ),
      };
      
    default:
      return state;
  }
}

export default taskReducer;
