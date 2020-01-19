import { actionTypes } from '../types';

const INITIAL_STATE = {
	isSending: false,
	successMessage: '',
	errorMessage: ''
}

const addTodoReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case actionTypes.CREATE_TODO_START:
			return {
				...state,
				isSending: true
			}
		case actionTypes.CREATE_TODO_SUCCESS:
			return {
				...state,
				isSending: false,
				successMessage: action.payload
			}
		case actionTypes.CREATE_TODO_FAILURE:
			return {
				...state,
				errorMessage: action.payload
			}
			default:
				return state
	}
}

export default addTodoReducer;