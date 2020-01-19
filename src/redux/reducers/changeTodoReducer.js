import { actionTypes } from '../types';

const INITIAL_STATE = {
	isSending: false,
	successMessage: '',
	errorMessage: ''
}

const changeTodoReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case actionTypes.CHANGE_TODO_START:
			return {
				...state,
				isSending: true
			}
		case actionTypes.CHANGE_TODO_SUCCESS:
			return {
				...state,
				isSending: false,
				successMessage: action.payload
			}
		case actionTypes.CHANGE_TODO_FAILURE:
			return {
				...state,
				errorMessage: action.payload
			}
			default:
				return state
	}
}

export default changeTodoReducer;