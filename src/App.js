import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          id: 1,
          name: 'Learn English',
          isComplete: false
        },
        {
          id: 2,
          name: 'Learn JavaScript',
          isComplete: true
        },
        {
          id: 3,
          name: 'Learn Spanish',
          isComplete: true
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text" />
          </form>
          <div className="Todo-List">
            <ul>
              {this.state.todos.map(todo => 
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isComplete}/> {todo.name}
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
