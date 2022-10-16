import Task from './Task'

import CircularProgress from '@mui/material/CircularProgress';

const Tasks = ({ tasks, loading, handleCheck, handleDelete }) => {
  const Loading = () => {
    return (
      <div className='Tasks'>
        <CircularProgress />
      </div>
    )
  }

  const NoTasks = () => {
    return (
      <div className='Tasks'>
        <p>There's no task to show!</p>
      </div>
    )
  }

  const TasksList = () => {
    return (
      <div className='Tasks'>
        <h2>Task list</h2>
        {
          tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            )
          })
        }
      </div>
    )
  }

  if (loading) {
    return <Loading />
  } else if (tasks.length === 0) {
    return <NoTasks />
  } else {
    return <TasksList />
  }
}

export default Tasks