import React from 'react';
import { Main } from './main';
import { Edit } from './edit';
import { View } from './view';
import { NotFound } from './notFound';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class AppRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodoTitle: '',
            newTodoDescription: ''
        }
        this.updateNewValue = this.updateNewValue.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    componentDidMount() {
        fetch('/todos.js')
            .then(response => response.json())
            .then(data => {
                this.state.todos = data.todos;
                this.setState({
                    todos: this.state.todos,
                    newTodoTitle: 'sss22'
                });
            });
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
        if (!todoId) {
            const curId = this.getMaxId();
            const newId = curId + 1;
            this.state.todos.push({
                id: newId,
                title: title,
                description: ''
            });
        } else {
            const todo = this.state.todos.find(el => el.id === todoId);
            todo.title = title;
            todo.description = description;
        }
        this.setState({
            todos: this.state.todos,
            newTodoTitle: '',
            newTodoDescription: ''
        });
    }
    removeTodo(todoId) {
        const toDelIndex = this.state.todos.findIndex(el => {
            return el.id === todoId;
        })
        this.state.todos.splice(toDelIndex, 1);
        this.setState({ todos: this.state.todos });
    }
    updateNewValue(event, field) {
        const newValue = {};
        newValue[field] = event.target.value;
        this.setState(newValue);
    }

    changeStatus(todoId, value) {
        const todo = this.state.todos.find(el => el.id === todoId);
        todo.isDone = value;
        this.setState({
            todos: this.state.todos
        });
    }


    render() {
        const todos = this.state.todos;
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route
                            exact path="/"
                            render={props => <Main {...props} todos={todos} saveTodo={this.saveTodo} updateNewValue={this.updateNewValue}
                                changeStatus={this.changeStatus}
                                removeTodo={this.removeTodo}

                            />}
                        />
                        <Route
                            path="/edit/:todoId"
                            render={props => <Edit {...props} todos={todos} saveTodo={this.saveTodo} updateNewValue={this.updateNewValue} />}
                        />
                        <Route
                            path="/view/:todoId"
                            component={props => <View {...props} todos={todos} />}
                        />
                        <Route path='*' exact={false} component={NotFound} />
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
}


