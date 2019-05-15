import React from 'react';

export class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
        this.onChange = this.onChange.bind(this);
        this.saveNewTodo = this.saveNewTodo.bind(this);
        // this.holdNewTitle = this.holdNewTitle.bind(this);
    }
    onChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    saveNewTodo(){
        this.props.saveNewTodo(this.state.title);

        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <div className="input-group mb-3">
                <input type="text"
                    className="form-control"
                    placeholder="Add a ToDo..."
                    aria-label="Add a ToDo..."
                    aria-describedby="basic-addon2"
                    value={this.state.title}
                    onChange={this.onChange} 
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary" type="button" onClick={this.saveNewTodo}>Add</button>
                </div>
            </div>
        )
    }
}
