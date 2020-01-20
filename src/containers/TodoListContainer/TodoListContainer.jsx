import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import './TodoListContainer.scss';
import TodoList from "../../components/TodoList/TodoList";
import Button from "../../components/Button/Button";
import TodoModal from "../../components/TodoModal/TodoModal";

import { fetchTodoList } from '../../redux/actions'

const TodoListContainer = ({ todos, isLoading, fetchTodoList }) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(todos.length === 0) {
            fetchTodoList()
        }
    }, [])

    return (
            <div className="todos">
                <div className="todos__wrapper">
                    <h1 className="todos__title">Список задач</h1>
                    <Button className="btn btn--add" onClick={() => setIsOpen(true)}>
                        Добавить
                    </Button>
                </div>
                <TodoList todos={todos} isLoading={isLoading}/>
                <TodoModal isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
    );
};

const mapStateToProps = ({ todoList }) => ({
    todos: todoList.todos,
    isLoading: todoList.isLoading
});

export default connect(mapStateToProps, { fetchTodoList })(TodoListContainer);
