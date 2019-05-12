import React from 'react';
import { Redirect , Link } from 'react-router-dom';
import { NotFound } from './notFound';

export class Edit extends React.Component {
  constructor({ todos, match: { params: { todoId } } }) {
    super();

    todoId = parseInt(todoId);
    const findTodoById = (id) => {
      return todos.find(el => el.id === id);
    }
    const todo = findTodoById(todoId);
    if (todo) {
      this.state = {
        id: todo.id,
        newTitle: todo.title,
        newDescription: todo.description,
        redirectToMain: false
      }
    }else{
      this.state = {
        404: true
      }      
    }
    this.updateValue = this.updateValue.bind(this);
    this.saveUpdates = this.saveUpdates.bind(this);
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

  render() {
    if(this.state[404]){
      return <NotFound />
    }
    const { todos, match } = this.props;
    let { todoId } = match.params;
    todoId = parseInt(todoId);
    const findTodoById = (id) => {
      return todos.find(el => el.id === id);
    }
    const todo = findTodoById(todoId);
    const { redirectToMain } = this.state;
    if (redirectToMain === true) {
      return <Redirect to="/" />
    }
    return (

      <form>
        <h1>Edit todo <strong>{todo.title}</strong> </h1>
        <div className="form-group">
          <label htmlFor="todoTitleEdit">Todo title</label>
          <input type="text" onChange={(e) => this.updateValue(e, 'newTitle')} value={this.state.newTitle} className="form-control" id="todoTitleEdit" placeholder="Enter title" />

        </div>

        <div className="form-group">
          <label htmlFor="todoDescEdit">Todo description</label>
          <textarea className="form-control" onChange={(e) => this.updateValue(e, 'newDescription')} id="todoDescEdit" rows="3" value={this.state.newDescription}></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.saveUpdates}>Save</button>
        <Link className="btn btn-primary" to={'/'}>Back to The list</Link>
      </form>

    )
  }
}