// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  handleTaskChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  addTask = () => {
    const { newTask, tasks } = this.state;
    if (newTask.trim() !== '') {
      this.setState({
        tasks: [...tasks, newTask],
        newTask: '',
      });
    }
  };

  deleteTask = (index) => {
    const { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState({ tasks });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="App">
        <h1>To-Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={this.handleTaskChange}
          />
          <button onClick={this.addTask}>Add Task</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <div className="task">
                <span>{task}</span>
                <button onClick={() => this.deleteTask(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
