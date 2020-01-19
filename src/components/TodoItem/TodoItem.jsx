import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './TodoItem.scss';
// Actions
import { getSelectedTodo, deleteTodo } from '../../redux/actions'
// Components
import Button from "../Button/Button";

const TodoItem = ({ todo, getSelectedTodo, deleteTodo }) => {
    return (
        <div className="todo-item">
            <div className="todo-item__wrapper">
                <div className="todo-item__number">
                    Задача №{ todo.id }
                </div>
                <div className="todo-item__task">
                    { todo.title }
                </div>
                <div className="todo-item__buttons">
                    <Link 
                        style={{ marginRight: '1rem' }} 
                        to={`item/${todo.id}`}
                        onClick={() => getSelectedTodo(todo)}>
                        <Button className="todo-item__buttons todo-item__buttons--change"></Button>
                    </Link>
                    <Button className="todo-item__buttons todo-item__buttons--delete" onClick={() => deleteTodo(todo.id)}></Button>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { getSelectedTodo, deleteTodo })(TodoItem);
