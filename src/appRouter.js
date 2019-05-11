import React from 'react';
import { Main } from './main';
import { Edit } from './edit';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

export class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route
                    exact path="/"
                    render={props => <Main {...props} todos={this.props.todos} />}
                />
                <Route path="/edit" component={Edit} />
            </Router>
        )
    }
}


