import { useState } from 'react'

const Form = ({ handleSubmit }) => {
  const [title, setTitle] = useState('')
  const [duration, setDuration] = useState('')

  const submit = (e) => {
    // Não recarrega a página
    e.preventDefault()
    
    const task = {
      id: Math.random,
      title,
      duration,
      done: false
    }

    handleSubmit(task)
    setTitle('')
    setDuration('')
  }

  return (
    <>
      <form className='Form' onSubmit={submit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title || ''}
          required
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          onChange={(e) => setDuration(e.target.value)}
          value={duration || ''}
          required
        />
        <button type="submit" value="Submit">
          Submit task
        </button>
      </form>
      <hr />
    </>
  )
}

export default Form