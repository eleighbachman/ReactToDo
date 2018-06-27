import React from 'react';

const Task = (props) => {

  return (
    <li onClick={() => props.toggleCompletion(props.task.name, props.task.complete)} className={props.task.complete ? "true" : "false"}>
      {props.task.name}
    </li>
  )
}

export default Task;
