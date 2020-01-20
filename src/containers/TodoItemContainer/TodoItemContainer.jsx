import React, { Component, useState, useEffect } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import './TodoItemContainer.scss';
// Actions
import { fetchTodoList, changeTodo, deleteTodo } from '../../redux/actions';
// Components
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import ErrorMessages from "../../components/ErrorMessages/ErrorMessages";

import { getTodo } from './utils'
import { isInputValid } from '../../validators/validators'

const TodoItemContainer = ({ selectedTodo, fetchTodoList, history, changeTodo, deleteTodo, todos, match }) => {

    const [ errors, setErrors ] = useState([]);
    const [newTodo, setNewTodo] = useState({
        title: selectedTodo.title
    })

    useEffect(() => {
        if(todos.length === 0) {
            fetchTodoList()
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isInputValid(newTodo.title, setErrors)) {
            changeTodo(match.params.id, newTodo)
            history.push('/')
        }
    }

    const handleChange = e => {
       setNewTodo({
           title: e.target.value
       })
    }

    const onDelete = () => {
        deleteTodo(match.params.id);
        history.push('/');
    }

    const todo = getTodo(todos, +match.params.id);
   
    if(!todos || !todo) return <div>Loading...</div>

    return (
        <div className="todo">
            <div className="todo__box">
                <h1>Задача № { todo.id }</h1>
                <Button onClick={() => onDelete()} className="btn btn--delete">Удалить</Button>
            </div>
            <form className="todo__form" onSubmit={handleSubmit}>
                <Input
                    name="title"
                    value={ newTodo.title || todo.title }
                    label="Краткое описание"
                    onChange={ handleChange }/>
                <ErrorMessages errors={ errors } />
                <div className="todo__buttons-container">
                    {
                        selectedTodo.title !== newTodo.title && todo.title !== newTodo.title
                        ? (<Button className="btn btn--add" type="submit">Изменить</Button>)
                        : (<Link to='/'><Button className="btn btn--back">Вернуться в список</Button></Link>)
                    } 
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = ({ todoList }) => ({
    selectedTodo: todoList.selectedTodo,
    todos: todoList.todos,
    isLoading: todoList.isLoading
})


export default compose(
    withRouter, 
    connect(mapStateToProps, { fetchTodoList, changeTodo, deleteTodo })
    )(TodoItemContainer)
