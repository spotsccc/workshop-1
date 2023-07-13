import { useState } from 'react'

import './new-task-form.css'

type NewTaskFormProps = {
  onCreateNewTask: (title: string) => void
}

export function NewTaskForm({ onCreateNewTask }: NewTaskFormProps) {
  const [newTaskTitle, changeNewTaskTitle] = useState('')
  function createNewTask() {
    onCreateNewTask(newTaskTitle)
    changeNewTaskTitle('')
  }

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault()
        createNewTask()
      }}
    >
      <input
        onChange={(e) => changeNewTaskTitle(e.target.value)}
        value={newTaskTitle}
        placeholder="title"
        name="title"
      />
      <button type="submit">create</button>
    </form>
  )
}
