import {actionTypes} from "../types";

const INITIAL_STATE = {
    isLoading: false,
    todos: [],
    selectedTodo: {},
    errorMessage: ''
}

const todosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TODOS_START:
            return {
                ...state,
                isLoading: true
            };
        case actionTypes.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            };
        case actionTypes.FETCH_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            };
        case actionTypes.GET_SELECTED_TODO:
            return {
                ...state,
                selectedTodo: action.payload
            }
        default:
            return state
    }
};

export default todosReducer;
