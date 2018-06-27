import React, { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskBody from './components/TaskBody';


class App extends Component {
  constructor(props) {
    super(props);
    this.addNewTask = this.addNewTask.bind(this);
    this.state = {
        tasks : [
        { name: "Wash Dishes", complete: "true" },
        { name: "Do Laundry", complete: "false" },
        { name: "Walk the Dog", complete: "false" },
        { name: "Wash the Car", complete: "false" },
        { name: "Chemistry", complete: "true" },
        { name: "German", complete: "false" },
        { name: "React App", complete: "false" }
      ]
    }
  }

  addNewTask(term) {
    this.setState({ tasks : [{name: term, complete: "false"}, ...this.state.tasks] })
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="title">What to do?</h1>
          <p className="tagline">Your typical to-do app</p>
          <p className="tagline">Powered by React</p>
        </div>
        <div className="addTaskBody">
          <AddTask addNewTask={this.addNewTask}/>
        </div>
        <TaskBody tasks={this.state.tasks}/>
      </div>
    );
  }


}

export default App;
