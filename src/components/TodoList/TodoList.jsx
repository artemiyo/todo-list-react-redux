import React from 'react';
import './TodoList.scss';
//Components
import TodoItem from '../TodoItem/TodoItem'

const  TodoList = ({ todos, isLoading }) =>  {

    if (isLoading) return <div>Loading...</div>;
    return (
        <div className="todo-list">
            { todos.map(todo => <TodoItem key={todo.id} todo={todo} />) }
        </div>
    )
}

export default TodoList;
