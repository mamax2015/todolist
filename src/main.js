import React from 'react';
import { AddToDo } from './addToDo';
import { ToDo } from './todo';
import './App.css';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: props.todos,
            newTodoTitle: ''
        }
        
        this.updateNewTodoTitle = this.updateNewTodoTitle.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.saveNewTodo = this.saveNewTodo.bind(this);
    }

    saveNewTodo(){
        const { newTodoTitle } = this.state;
        this.props.saveTodo(undefined,newTodoTitle);
    }





    updateNewTodoTitle(event) {
        this.setState({ newTodoTitle: event.target.value });
    }


    removeTodo(todoId) {
        const toDelIndex = this.state.todos.findIndex(el => {
            return el.id === todoId;
        })
        this.state.todos.splice(toDelIndex, 1);
        this.setState({ todos: this.state.todos });
    }

    renderListOfTodos() {
        const todos = this.state.todos.map(todo => {
            return <ToDo changeStatus={this.props.changeStatus} key={todo.title} todo={todo} removeTodo={this.removeTodo} saveTodo={this.props.saveTodo} />;
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
