import React from 'react';
import { Link } from "react-router-dom";

export class ViewTodo extends React.Component {
    render() {
        const { todo, changeStatus, removeTodo, changeMode } = this.props;
        const { id , isDone, title } = todo;

        return (
            <React.Fragment>

                    <li className={"ui-state-default" + (isDone ? ' done' : '')} >
                        <div className="checkbox">
                            
                        <input type="checkbox" value="" checked={isDone} id={"checkFor" + id} onChange={changeStatus} />
                            <Link to={`/view/${id}`}> {title}
                            </Link>
                            <button class="remove-item btn btn-default btn-xs pull-right" onClick={removeTodo}><span class="glyphicon glyphicon-remove"></span></button>
                            <Link className="remove-item btn btn-default btn-xs pull-right" to={`/edit/${id}`}>Full edit</Link>
                            <button className="remove-item btn btn-default btn-xs pull-right" type="button" onClick={changeMode}>Edit Title</button>
                        </div>
                    </li> 
                               
                {/* <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" checked={isDone} id={"checkFor" + id} onChange={changeStatus} />
                    <div className={"title" + (isDone ? ' done' : '')}>
                        <Link to={`/view/${id}`}>{title}</Link>
                    </div>
                </div>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={changeMode}>Edit Title</button>
                    <Link className="btn btn-outline-secondary" to={`/edit/${id}`}>Full edit</Link>
                    <button className="btn btn-outline-secondary" type="button" onClick={removeTodo}>Delete</button>
                </div> */}
            </React.Fragment>
        )
    }
}
