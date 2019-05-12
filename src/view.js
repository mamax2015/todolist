import React from 'react';
import { Link } from "react-router-dom";


export class View extends React.Component {


    render() {
        let { todos, match: { params: { todoId } } } = this.props;
        todoId = parseInt(todoId);
        let { title, description } = todos.find(el => el.id === todoId);
        
        function formatDescription(desc) {
            const arrayOfStrings = desc.split('\n').map( str => {
                return <br />;
            });
            return arrayOfStrings;
        }
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