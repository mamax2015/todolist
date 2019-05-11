import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class ViewTodo extends React.Component {
    render() {    
        const todo = this.props.todo;    
        return (
            <React.Fragment>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" checked={todo.isDone} id={"checkFor" + todo.id} onChange={this.props.changeStatus} />
                    
                    <div className={"title" + (todo.isDone ? ' done' : '')}>
                        <label className="form-check-label" htmlFor={"checkFor" + todo.id}>{todo.title}</label>
                    </div>        
                    
                </div>
                
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.props.changeMode}>Edit Title</button>
                    <Link className="btn btn-outline-secondary" to={`/edit`}>Full edit</Link>
                    <button className="btn btn-outline-secondary" type="button" onClick={this.props.removeTodo}>Delete</button>
                </div>
            </React.Fragment>
        )
    }
}
