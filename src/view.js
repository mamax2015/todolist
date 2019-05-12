import React from 'react';
import { Link } from "react-router-dom";
import { NotFound } from "./notFound";


export class View extends React.Component {



    render() {
        let { todos, match: { params: { todoId } } } = this.props;
        todoId = parseInt(todoId);
        
        if (!todoId || 1) {
            return (
                <NotFound />
            )
        }
        let { title, description } = todos.find(el => el.id === todoId);
        return (
            <React.Fragment>
                <article>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </article>
                <Link className="btn btn-primary" to={'/'}>Back to The list</Link>
            </React.Fragment>
        )
    }
}