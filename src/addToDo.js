import React from 'react';

export class AddToDo extends React.Component {
    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Add a ToDo..." aria-label="Add a ToDo..." aria-describedby="basic-addon2" value={this.props.newToDoTitle} onChange={this.props.updateNewTodoTitle} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.props.saveTodo}>Add</button>
                </div>
            </div>
        )
    }
}
