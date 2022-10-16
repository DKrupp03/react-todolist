import './App.css'

import { useState, useEffect } from 'react'

import Header from './components/Header'
import Form from './components/Form'
import Tasks from './components/Tasks'

const API = 'http://localhost:5000'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)

  // Load all tasks on page load
  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
  
      const res = await fetch(`${API}/todos`)
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => console.log(error))

      setLoading(false)
      setTasks(res)
    }

    loadData()
  }, [])

  const handleSubmit = async (task) => {
    await fetch(`${API}/todos`, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setTasks((prevState) => [...prevState, task])
  }

  const handleCheck = async (task) => {
    task.done = !task.done
    await fetch(`${API}/todos/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setTasks((prevState) =>
      prevState.map((t) => t.id === task.id ? t = task : t)
    )
  }

  const handleDelete = async (taskId) => {
    await fetch(`${API}/todos/${taskId}`, {
      method: 'DELETE'
    })
    setTasks((prevState) =>
      prevState.filter((t) => t.id !== taskId)
    )
  }

  return (
    <div className='AppContainer'>
      <Header />
      <Form handleSubmit={handleSubmit} />
      <Tasks
        tasks={tasks}
        loading={loading}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App
