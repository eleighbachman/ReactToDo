import React from 'react';

const Task = (props) => {

  return (
    <li onClick={() => props.toggleCompletion(props.task.name, props.task.complete)} className={props.task.complete ? "true" : "false"}>
      <div className="taskItem">
      {props.task.name}
      </div>
      <div onClick={() => props.deleteTask(props.task.name)} className="delete">Delete</div>
    </li>
  )
}

export default Task;
