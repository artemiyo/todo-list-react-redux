import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './TodoModal.scss';

import { isInputValid } from '../../validators/validators'
// Actions
import { createTodo, fetchTodoList } from '../../redux/actions'
// Components
import Input from "../Input/Input";
import Button from "../Button/Button";
import ErrorMessages from '../ErrorMessages/ErrorMessages';


const TodoModal = ({ createTodo, isOpen, setIsOpen, fetchTodoList }) => {

    const [title, setTitle] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isInputValid(title, setErrors)) {  
            createTodo({ title });
            setIsOpen(false);
        }
    }

    return (
        <div className={`todo-modal ${!isOpen ? 'visually-hidden' : ''}`}>
            <form className="todo-modal__form" onSubmit={handleSubmit}>
                <Input
                    name="title"
                    value={title}
                    label="Краткое описание"
                    onChange={e => setTitle(e.target.value)}/>
                <div className="todo-modal__error">
                    <ErrorMessages errors={errors} />
                </div>
                <div onClick={() => setIsOpen(false)} className="todo-modal__close">&#10006;</div>
                <Button className="btn btn--add" type="submit">Создать</Button>
            </form>
        </div>
    )
}

export default connect(null, { createTodo, fetchTodoList })(TodoModal);
