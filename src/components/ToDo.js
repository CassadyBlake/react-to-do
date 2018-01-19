import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <input type="submit" value="delete" onSubmit={ this.props.deleteTodo } />
        <span>{ this.props.description }</span>
      </li>
    )
  }
}

export default ToDo;
