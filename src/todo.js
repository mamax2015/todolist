import React from 'react';

export class ToDo extends React.Component {
    render() {
        const todo = this.props.todo;
        const deleteTodo = () => {
            this.props.delete(todo);
        }
        const edit = () => {
            console.log('edit');
        }        
        return (
            <div className="input-group mb-3">
            
                <div className="title">{todo.title}</div>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={edit}>Edit</button>
                    <button className="btn btn-outline-secondary" type="button" onClick={deleteTodo}>Delete</button>
                </div>
            </div>
        )
    }
}
