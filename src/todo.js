import React from 'react';
import {ViewTodo} from './viewTodo';
import {EditTodo} from './editTodo';

export class ToDo extends React.Component {
    constructor(props){
        super(props);
        const todo = this.props.todo;
        this.state = {
            id : todo.id,
            title : todo.title,
            edit: todo.edit,
            newTitle : todo.title
        }
        this.changeMode = this.changeMode.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }
    changeMode() {
        this.setState({
            edit: !this.state.edit
        });
    }
    cancelEdit(){
        this.setState({
            edit: false,
            newTitle: this.state.title
        });
    }
    changeValue(event){
        this.setState({newTitle : event.target.value})
    }
    saveTodo(){
        this.props.saveTodo(this.state.id,this.state.newTitle);
    }
    render() {
        const todo = this.props.todo;
        const removeTodo = () => {
            this.props.removeTodo(todo.id);
        }
        
        const renderTodo = () => {
            if(this.state.edit){
                return <EditTodo todo={this.state} changeValue={this.changeValue} changeMode={this.changeMode} saveTodo={this.saveTodo} cancelEdit={this.cancelEdit} />
            }else{
                return <ViewTodo todo={this.state} removeTodo={removeTodo} changeMode={this.changeMode} />
            }
        }
        return (
            <div className="input-group mb-3">                
                {renderTodo()}
            </div>
        )
    }
}
