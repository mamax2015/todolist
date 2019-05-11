import React from 'react';
import { AddToDo } from './addToDo';
import { ToDo } from './todo';
import './App.css';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: props.todos,
            newTodoTitle: '',
            newTodoDescription: ''
        }
        
        this.updateNewTodoTitle = this.updateNewTodoTitle.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }






    updateNewTodoTitle(event) {
        this.setState({ newTodoTitle: event.target.value });
    }


    removeTodo(todoId) {
        const toDelIndex = this.state.todos.findIndex(el => {
            return el.id == todoId;
        })
        this.state.todos.splice(toDelIndex, 1);
        this.setState({ todos: this.state.todos });
    }

    renderListOfTodos() {
        const todos = this.state.todos.map(todo => {
            return <ToDo changeStatus={this.changeStatus} key={todo.title} todo={todo} removeTodo={this.removeTodo} saveTodo={this.saveTodo} />;
        });
        return todos;
    }
    changeStatus(todoId,value) {
        const todo = this.state.todos.find(el => el.id == todoId);
        todo.isDone = value;
        this.setState({
            todos: this.state.todos
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.renderListOfTodos()}
                <AddToDo
                    saveTodo={this.saveTodo}
                    newToDoTitle={this.state.newTodoTitle}
                    updateNewTodoTitle={this.updateNewTodoTitle}
                />
            </React.Fragment>
        )
    }
}
