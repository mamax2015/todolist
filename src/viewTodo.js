import React from 'react';

export class ViewTodo extends React.Component {
    render() {    
        const todo = this.props.todo;    
        return (
            <React.Fragment>
                <div className="title">{todo.title}</div>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.props.changeMode}>Edit</button>
                    <button className="btn btn-outline-secondary" type="button" onClick={this.props.removeTodo}>Delete</button>
                </div>
            </React.Fragment>
        )
    }
}
