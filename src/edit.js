import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { NotFound } from './notFound';
import { Spinner } from './spinner';
import checkIsTodoExist from './checkIsTodoExist';

export class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            newTitle: '',
            newDescription: '',
            redirectToMain: false
        }
        this.updateValue = this.updateValue.bind(this);
        this.saveUpdates = this.saveUpdates.bind(this);
        this.setStatWithTodo = this.setStatWithTodo.bind(this);
    }

    updateValue(event, field) {
        const newValue = {};
        newValue[field] = event.target.value;
        this.setState(newValue);
    }

    saveUpdates(e) {
        e.preventDefault()
        const { id, newTitle, newDescription } = this.state
        this.props.saveTodo(id, newTitle, newDescription);
        this.setState({
            redirectToMain: true
        })
    }

    setStatWithTodo() {
        const { todos, match } = this.props;
        const todo = checkIsTodoExist(todos, match);
        if (todo) {
            this.setState({
                id: todo.id,
                newTitle: todo.title,
                newDescription: todo.description
            })
        }
    }

    componentDidMount() {
        this.setStatWithTodo();
    }

    componentDidUpdate(prevProps) {
        if (this.props.todos.length !== prevProps.todos.length) {
            this.setStatWithTodo();
        }
    }

    render() {
        const { dataLoaded, todos, match } = this.props;
        if (!dataLoaded) {
            return <Spinner />
        }
        if (!checkIsTodoExist(todos, match)) {
            return (
                <NotFound />
            )
        }

        const { redirectToMain } = this.state;
        if (redirectToMain === true) {
            return <Redirect to={process.env.PUBLIC_URL + '/'} from='/view/:id' />
        }
        return (
            <form>
                <h2>Edit todo:</h2>
                <div className="form-group">
                    <label htmlFor="todoTitleEdit">Todo title</label>
                    <input type="text" onChange={(e) => this.updateValue(e, 'newTitle')} value={this.state.newTitle} className="form-control" id="todoTitleEdit" placeholder="Enter title" />

                </div>

                <div className="form-group">
                    <label htmlFor="todoDescEdit">Todo description</label>
                    <textarea className="form-control" onChange={(e) => this.updateValue(e, 'newDescription')} id="todoDescEdit" rows="3" value={this.state.newDescription}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.saveUpdates}>Save</button>
                <Link className="btn btn-primary" to={process.env.PUBLIC_URL + '/'}>Back to The list</Link>
            </form>
        )
    }
}