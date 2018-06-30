import React from 'react';
import Task from './Task';

const TaskBody = (props) => {

  return(
    <div className="taskBody">
      <div className="bodyControls">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h2>My Tasks</h2>
              <p><input type="checkbox"/> Show only incomplete </p>
            </div>
            <div className="col-sm-4">
              <p>Total Tasks: {props.tasks.length}</p>
              <p>Complete Tasks: 0</p>
              <p>Incomplete Tasks: 0</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tasks">
        <ul className="taskCollection">
        {props.tasks.map((task) => {
          return (
            <Task
            changeName={props.changeName}
            deleteTask={props.deleteTask}
            toggleEdit={props.toggleEdit}
            toggleCompletion={props.toggleCompletion}
            task={task}
            key={task.name}/>
          )
        })}
        </ul>
      </div>
    </div>
  )
}

export default TaskBody;
