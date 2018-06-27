import React from 'react';

const Task = (props) => {
  return (
    <li className={props.task.complete}>
      {props.task.name}
    </li>
  )
}

export default Task;
