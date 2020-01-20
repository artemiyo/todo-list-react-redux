export const actionTypes = {
    // Получение списка дел
    FETCH_TODOS_START: 'FETCH_TODOS_START',
    FETCH_TODOS_SUCCESS: 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_FAILURE: 'FETCH_TODOS_FAILURE',
    // Создание нового todo
    CREATE_TODO_START: 'CREATE_TODO_START',
    CREATE_TODO_SUCCESS: 'CREATE_TODO_SUCCESS',
    CREATE_TODO_FAILURE: 'CREATE_TODO_FAILURE',
    // Получить выбранный todo
    GET_SELECTED_TODO: 'GET_SELECTED_TODO',
    // Изменить выбранный todo
    CHANGE_TODO_START: 'CHANGE_TODO_START',
    CHANGE_TODO_SUCCESS: 'CHANGE_TODO_SUCCESS',
    CHANGE_TODO_FAILURE: 'CHANGE_TODO_FAILURE',
    // Удалить выбранный todo
    DELETE_TODO_START: 'DELETE_TODO_START',
    DELETE_TODO_SUCCESS: 'DELETE_TODO_SUCCESS',
    DELETE_TODO_FAILURE: 'DELETE_TODO_FAILURE',
}