import React from 'react';
import { AddToDo } from './addToDo';
import { ToDo } from './todo';
import './App.css';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodoTitle: props.newTodoTitle
        }
        this.updateNewTodoTitle = this.updateNewTodoTitle.bind(this);
        this.saveNewTodo = this.saveNewTodo.bind(this);
    }

    saveNewTodo(){
        const { newTodoTitle } = this.state;
        this.props.saveTodo(undefined,newTodoTitle);
    }

    updateNewTodoTitle(event) {
        this.setState({ newTodoTitle: event.target.value });
    }

    renderListOfTodos() {
        const todos = this.props.todos.map(todo => {
            return <ToDo changeStatus={this.props.changeStatus} key={todo.title} todo={todo} removeTodo={this.props.removeTodo} saveTodo={this.props.saveTodo} />;
        });
        return todos;
    }

    render() {
        return (
            <React.Fragment>
                {this.renderListOfTodos()}
                <AddToDo
                    saveNewTodo={this.saveNewTodo}
                    newToDoTitle={this.state.newTodoTitle}
                    updateNewTodoTitle={this.updateNewTodoTitle}
                />
            </React.Fragment>
        )
    }
}
