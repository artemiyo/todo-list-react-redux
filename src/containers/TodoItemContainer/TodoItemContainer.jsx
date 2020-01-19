import React, { Component } from "react";
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


class TodoItemContainer extends Component {

    state = {
        errors: [],
        newTodo: {
            title: this.props.selectedTodo.title
        },
    }

    componentDidMount() {
        if(this.props.todos.length === 0) {
            this.props.fetchTodoList()
        }
    }

    handleSubmit = (e) => {
        const { newTodo } = this.state;
        e.preventDefault();
        if(this.isInputValid()) {
            this.props.changeTodo(this.props.match.params.id, newTodo)
            this.props.history.push('/')
        }
    }

    handleChange = e => {
        this.setState({
            newTodo: {
                title: e.target.value
            }
        });
    }

    isInputValid = () => {
        let errors = [];
        let error;
        
        if(!this.state.newTodo.title) {
            error = { message: 'Заголовок не может быть пустым.' }
            this.setState({ errors: errors.concat(error)} ) 
            return false
        } else {
            return true
        }
    }

    onDelete = () => {
        this.props.deleteTodo(this.props.match.params.id);
        this.props.history.push('/');
    } 

    render() {
        const { newTodo, errors } = this.state;
        const todo = getTodo(this.props.todos, +this.props.match.params.id);

        if(!this.props.todos || !todo) return <div>Loading...</div>

        return (
            <div className="todo">
                <div className="todo__box">
                    <h1>Задача № { todo.id }</h1>
                    <Button onClick={() => this.onDelete()} className="btn btn--delete">Удалить</Button>
                </div>
                <form className="todo__form" onSubmit={this.handleSubmit}>
                    <Input
                        name="title"
                        value={ newTodo.title || todo.title }
                        label="Краткое описание"
                        onChange={this.handleChange}/>
                    <ErrorMessages errors={errors} />
                    <div className="todo__buttons-container">
                        {
                            this.props.selectedTodo.title !== newTodo.title && todo.title !== newTodo.title
                            ? (<Button className="btn btn--add" type="submit">Изменить</Button>)
                            : (<Link to='/'><Button className="btn btn--back">Вернуться в список</Button></Link>)
                        } 
                    </div>
                </form>
            </div>
        )
    }
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
