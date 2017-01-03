import React from 'react';
import { uniqueId } from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false,
      id: 1,
    };
    this.receiveTodo = props.receiveTodo;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(form) { return (event) =>
    this.setState({[form]: event.target.value});
  }

  handleSubmit(event) {
    this.setState({id: uniqueId()});
    this.receiveTodo(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h3>Title:</h3>
        <br/>
        <input onChange={this.update('title')} value={this.state.title}/>
        <br/>
        <h3>Body:</h3>
        <br/>
        <input onChange={this.update('body')} value={this.state.body}/>
        <br/>
        <button>Create Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
