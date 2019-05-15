import React from 'react';

export class EditTodo extends React.Component {
    render() {
        const todo = this.props.todo;
        return (
            <React.Fragment>
                <input type="text" className="form-control" placeholder="Enter new title..." aria-label="Enter New title..." aria-describedby="basic-addon2" value={todo.newTitle} onChange={this.props.changeValue} />
                <div className="input-group-append">
                    <button className="btn btn-default" onClick={this.props.saveTodo}>Save</button>
                    <button className="btn btn-default" onClick={this.props.cancelEdit}>Cancel</button>
                </div>
            </React.Fragment>
        )
    }
}
