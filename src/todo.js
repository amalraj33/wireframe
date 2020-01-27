import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: ''
    }
    this.textChange = this.textChange.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  textChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  addToList() {
    this.setState(prevState => ({
      list: prevState.list.concat(this.state.text),
      text: ''
    }))
  }

  removeItem(index) {
    let newList = this.state.list.splice(index,1);
    this.setState({list:newList})
  }

  render() {
    return(
      <div>
        <h1>My Todo List</h1>
        <h3>Add item</h3>
        <input value={this.state.text} onChange={e => this.textChange(e)}/>
        <button onClick={this.addToList}>+</button>
        <ul>{this.state.list.map((x,y) => {
          return <li key={y}>{x}
          <button onClick={this.removeItem.bind(this,y)}>-</button>
          </li>})}
        </ul>
      </div>
    )
  }
}

export default Todo;