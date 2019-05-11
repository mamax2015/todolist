import React from 'react';

export class Edit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos : []
    }
  }
  render() {
    return (

      <form>
        <div className="form-group">
          <label htmlFor="todoTitleEdit">Todo title</label>
          <input type="email" className="form-control" id="todoTitleEdit" placeholder="Enter title" />

        </div>

        <div class="form-group">
          <label for="todoDescEdit">Todo description</label>
          <textarea class="form-control" id="todoDescEdit" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    )
  }
}