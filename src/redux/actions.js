import { actionTypes } from "./types";
import axios from 'axios';

// Получаем список todos

export const fetchTodosListStart = () => ({
    type: actionTypes.FETCH_TODOS_START
});

export const fetchTodosListSuccess = todos => ({
    type: actionTypes.FETCH_TODOS_SUCCESS,
    payload: todos
});

export const fetchTodosListFailure = errorMessage => ({
    type: actionTypes.FETCH_TODOS_FAILURE,
    payload: errorMessage
});

export const fetchTodoList = () => dispatch => {
    dispatch(fetchTodosListStart());

    return axios.get('https://test.megapolis-it.ru/api/list')
        .then(response => dispatch(fetchTodosListSuccess(response.data.data)))
        .catch(error => dispatch(fetchTodosListFailure(error)))
}

// Создаем новый todos

export const createTodoStart = () => ({
    type: actionTypes.CREATE_TODO_START
})

export const createTodoSuccess = successMessage => ({
    type: actionTypes.CREATE_TODO_SUCCESS,
    payload: successMessage
})

export const createTodoFailure = errorMessage => ({
    type: actionTypes.CREATE_TODO_FAILURE,
    payload: errorMessage
})

export const createTodo = (newTodo) => dispatch => {
    dispatch(createTodoStart());

    return axios.post('https://test.megapolis-it.ru/api/list', newTodo)
        .then(response => {
            dispatch(createTodoSuccess(response))
            dispatch(fetchTodoList())
        })
        .catch(error => dispatch(createTodoFailure(error)))
}

// Получить выбранный todo 

export const getSelectedTodo = selectedTodo => ({
    type: actionTypes.GET_SELECTED_TODO,
    payload: selectedTodo
})

// Изменить выбранный todo

export const changeTodoStart = () => ({
    type: actionTypes.CHANGE_TODO_START
})

export const changeTodoSuccess = () => ({
    type: actionTypes.CHANGE_TODO_SUCCESS,
    payload: 'Успешно изменено'
})

export const changeTodoFailure = errorMessage => ({
    type: actionTypes.CHANGE_TODO_FAILURE,
    payload: errorMessage
})

export const changeTodo = (id, currentTodo) => dispatch => {
    dispatch(changeTodoStart);

    return axios.post(`https://test.megapolis-it.ru/api/list/${id}`, currentTodo)
        .then(() => {
            dispatch(changeTodoSuccess())
            dispatch(fetchTodoList())
        })
        .catch(error => dispatch(changeTodoFailure(error)))
} 

// Удалить выбранный todo

export const deleteTodoStart = () => ({
    type: actionTypes.DELETE_TODO_START
})

export const deleteTodoSuccess = () => ({
    type: actionTypes.DELETE_TODO_SUCCESS,
    payload: 'Успешно удалено'
})

export const deleteTodoFailure = errorMessage => ({
    type: actionTypes.DELETE_TODO_FAILURE,
    payload: errorMessage
})

export const deleteTodo = id => dispatch => {
    dispatch(deleteTodoStart);

    return axios.delete(`https://test.megapolis-it.ru/api/list/${id}`)
        .then(response => {
            dispatch(deleteTodoSuccess(response))
            dispatch(fetchTodoList())
        })
        .catch(error => dispatch(deleteTodoFailure(error)))
} 