import { useState } from 'react'
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs'

const Task = ({ task, handleCheck, handleDelete }) => {
  const TaskDone = () => {
    return (
      <BsBookmarkCheckFill
        style={{marginLeft: '10px'}}
        className="Icon"
        onClick={() => handleCheck(task)}
      />
    )
  }

  const TaskNotDone = () => {
    return (
      <BsBookmarkCheck
        style={{marginLeft: '10px'}}
        className="Icon"
        onClick={() => handleCheck(task)}
      />
    )
  }

  return (
    <div className="Task">
      <h3>
        {task.title}
      </h3>
      Duration: {task.duration}
      <div>
        <BsTrash className="Icon" onClick={() => handleDelete(task.id)} />
        {task.done ? <TaskDone /> : <TaskNotDone />}
      </div>
    </div>
  )
}

export default Task