import React from 'react';
import { Link } from "react-router-dom";

export class ViewTodo extends React.Component {
    render() {    
        const todo = this.props.todo;    
        return (
            <React.Fragment>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" checked={todo.isDone} id={"checkFor" + todo.id}  onChange={this.props.changeStatus} />
                    
                    <div className={"title" + (todo.isDone ? ' done' : '')}>
                        <Link to={`/view/${todo.id}`}>{todo.title}</Link>
                    </div>        
                    
                </div>
                
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.props.changeMode}>Edit Title</button>
                    <Link className="btn btn-outline-secondary" to={`/edit/${todo.id}`}>Full edit</Link>
                    <button className="btn btn-outline-secondary" type="button" onClick={this.props.removeTodo}>Delete</button>
                </div>
            </React.Fragment>
        )
    }
}
