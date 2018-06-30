import React, { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskBody from './components/TaskBody';


class App extends Component {
  constructor(props) {
    super(props);
    this.addNewTask = this.addNewTask.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.changeName = this.changeName.bind(this);

    this.state = {
        tasks : [
        { name: "Wash Dishes", complete: true, isEditing: false },
        { name: "Do Laundry", complete: false, isEditing: false },
        { name: "Walk the Dog", complete: false, isEditing: false },
        { name: "Wash the Car", complete: false, isEditing: false },
        { name: "Chemistry", complete: true, isEditing: false },
        { name: "German", complete: false, isEditing: false },
        { name: "React App", complete: false, isEditing: false }
      ]
    }
  }

  changeName(task, value) {
    this.setState({
      tasks: this.state.tasks.map((item) => {
      if (item.name === task) {
        return {
          name: value,
          complete: false,
          isEditing: true
        }
      }
      return item;
    })
  })
}

  addNewTask(term) {
    this.setState({ tasks : [{name: term, complete: false}, ...this.state.tasks] })
  };

  deleteTask(task) {
    this.setState({
      task: this.state.tasks.map((item) => {
        if (item.name === task) {
          let indexItem = this.state.tasks.indexOf(item);
          this.state.tasks.splice(indexItem, 1);
        }
        return item;
      })
    })
  }

  toggleEdit(name, property) {
    this.setState({
      tasks: this.state.tasks.map((task, id) => {
        if (task.name === name) {
          return {
            name: task.name,
            isEditing: !property
          };
        }
        return task;
      })
    })
  }

  toggleCompletion(name, property) {
    this.setState({
      tasks: this.state.tasks.map((task, id) => {
        if (task.name === name) {
          return {
            name: task.name,
            complete: !property
          };
        }
        return task;
      })
    })
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
        <TaskBody deleteTask={this.deleteTask} changeName={this.changeName} toggleEdit={this.toggleEdit} toggleCompletion={this.toggleCompletion} tasks={this.state.tasks}/>
      </div>
    );
  }


}

export default App;
