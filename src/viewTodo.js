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
                            <Link to={`${process.env.PUBLIC_URL}/view/${id}`}> {title}
                            </Link>
                            <button className="remove-item btn btn-default btn-xs pull-right" onClick={removeTodo}><span className="glyphicon glyphicon-remove"></span></button>
                            <Link className="remove-item btn btn-default btn-xs pull-right" to={`${process.env.PUBLIC_URL}/edit/${id}`}>Full edit</Link>
                            <button className="remove-item btn btn-default btn-xs pull-right" type="button" onClick={changeMode}>Edit Title</button>
                        </div>
                    </li> 
                               
                
            </React.Fragment>
        )
    }
}
