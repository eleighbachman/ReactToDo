import React from 'react';

const Task = (props) => {

  return (
    <li className={props.task.complete ? "true" : "false"}>
      <div className="taskItem">
      { props.task.isEditing ? <input type="text" autoFocus maxLength="14" value={props.task.name} onChange={(e) => props.changeName(props.task.name, e.target.value)}/> :
      <span className="taskName" onClick={() => props.toggleCompletion(props.task.name, props.task.complete)}>{props.task.name}</span>
      }
      </div>
      <div onClick={()=>props.toggleEdit(props.task.name, props.task.isEditing)} className="edit">{props.task.isEditing ? "Save" : "Edit"}</div>
      <div onClick={() => props.deleteTask(props.task.name)} className="delete">Delete</div>
    </li>
  )
}

export default Task;
