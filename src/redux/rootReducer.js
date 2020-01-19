import { combineReducers } from 'redux';
import todosReducer from "./reducers/todosReducer";
import addTodoReducer from './reducers/addTodoReducer';
import changeTodoReducer from './reducers/changeTodoReducer';
import deleteTodoReducer from './reducers/deleteTodoReducer';


const rootReducer = combineReducers({
    todoList: todosReducer,
    newTodo: addTodoReducer,
    changedTodo: changeTodoReducer,
    deletedTodo: deleteTodoReducer
})

export default rootReducer;
