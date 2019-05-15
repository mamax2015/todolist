import React from 'react';
import { Link } from "react-router-dom";
import { NotFound } from "./notFound";
import { Spinner } from './spinner';
import checkIsTodoExist from './checkIsTodoExist';

export class View extends React.Component {
    render() {
        const { dataLoaded, todos, match } = this.props;
        if (!dataLoaded) {
            return <Spinner />
        }
        const todo = checkIsTodoExist(todos, match);        
        if (!todo) {
            return (
                <NotFound />
            )
        }
        const { title, description } = todo;

        return (
            <React.Fragment>
                <article>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </article>
                <Link className="btn btn-default btn-xs" to={'/'}>Back to The list</Link>
            </React.Fragment>
        )
    }
}