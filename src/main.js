import React from 'react';
import { AddToDo } from './addToDo';
import { ToDo } from './todo';
import { Spinner } from './spinner';
import './App.css';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodoTitle: props.newTodoTitle
        }
        this.saveNewTodo = this.saveNewTodo.bind(this);
    }

    saveNewTodo(newTodoTitle) {
        this.props.saveTodo(undefined, newTodoTitle);
    }

    renderListOfTodos() {
        const { changeStatus, removeTodo, saveTodo } = this.props;
        const todos = this.props.todos.map(todo => {
            const { title, id } = todo
            return (
                <ToDo
                    changeStatus={changeStatus}
                    key={title + id}
                    todo={todo}
                    removeTodo={removeTodo}
                    saveTodo={saveTodo} />
            );
        });
        return todos;
    }

    render() {
        if (!this.props.dataLoaded) {
            return <Spinner />
        }
        return (
            <React.Fragment>
                {this.renderListOfTodos()}
                <AddToDo
                    saveNewTodo={this.saveNewTodo}
                />
            </React.Fragment>
        )
    }
}
