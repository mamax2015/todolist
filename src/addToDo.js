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
            <div className="">
                <input type="text"
                    className="form-control add-todo"
                    placeholder="Add a ToDo..."
                    aria-label="Add a ToDo..."
                    aria-describedby="basic-addon2"
                    value={this.state.title}
                    onChange={this.onChange} 
                />
                <button className="btn btn-success" onClick={this.saveNewTodo}>Add</button>
               
            </div>
        )
    }
}
