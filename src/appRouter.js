import React from 'react';
import { Main } from './main';
import { Edit } from './edit';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

export class AppRouter extends React.Component {
    constructor({ todos }) {
        super();
        this.state = {
            todos,
            newTodoTitle: '',
            newTodoDescription: ''
        }
        this.updateNewValue = this.updateNewValue.bind(this);
    }

    getMaxId() {
        const todos = this.state.todos;
        let maxId = -Infinity;
        todos.forEach(todo => {
            if (todo.id > maxId) {
                maxId = todo.id;
            }
        });
        return maxId;
    }

    saveTodo = (todoId, title, description) => {
        if (!title) {
            const curId = this.getMaxId();
            const newId = curId + 1;
            this.state.todos.push({
                id: newId,
                title: this.state.newTodoTitle,
                description: this.state.newTodoDescription
            });
        } else {
            const todo = this.state.todos.find(el => el.id == todoId);
            todo.title = title;
            todo.description = description;
        }
        this.setState({
            todos: this.state.todos,
            newTodoTitle: '',
            newTodoDescription: ''
        });
    }

    updateNewValue(event, field) {
        const newValue = {};
        newValue[field] = event.target.value;
        this.setState(newValue);
    }


    render() {
        return (
            <Router>
                <Route
                    exact path="/"
                    render={props => <Main {...props} todos={this.props.todos} />}
                />
                <Route
                    path="/edit/:todoId"
                    render={ props => <Edit {...props} todos={this.props.todos} saveTodo={this.saveTodo} updateNewValue={this.updateNewValue} />}
                />
            </Router>
        )
    }
}


