import {receiveTodos, receiveTodo} from '../actions/todo_actions';

  const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
      default:
        return state;
    }
  };

export default todosReducer;
