import React from 'react';
import {AddToDo} from './addToDo';
import {ToDo} from './todo';

export class ToDoList extends React.Component {
    constructor(props){
        super(props);        
        this.state = {
            todos : props.todos,
            newTodoTitle:''
        }
        this.saveNewTodo = this.saveNewTodo.bind(this);
        this.updateNewTodoTitle = this.updateNewTodoTitle.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }


    getMaxId(){
        const todos = this.state.todos;
        let maxId = -Infinity;
        todos.forEach(todo => {
            if(todo.id > maxId){
                maxId = todo.id;
            }
        });
        return maxId;
    }
    saveNewTodo(title){
        const curId = this.getMaxId();
        const newId = curId + 1;
        this.state.todos.push({
            id:newId,
            title:this.state.newTodoTitle
        });
        this.setState({ 
            todos: this.state.todos
        });
    }

    updateNewTodoTitle(event){
        this.setState({newTodoTitle: event.target.value});
    }

    removeTodo(todo){
        const toDelIndex = this.state.todos.findIndex(el => el == todo )
        this.state.todos.splice(toDelIndex,1);
        this.setState({todos : this.state.todos});
    }

    renderListOfTodos(){
        const todos = this.state.todos.map(todo => {
            return <ToDo key={todo.title} todo={todo} delete={this.removeTodo}/>;
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
