import { useState } from 'react'

import { Task as TaskView } from '../task/task'
import './task-list.css'

type Task = {
  title: string
  id: number
  isDone: boolean
}

export function TaskList() {
  const [tasks, updateTasks] = useState<Array<Task>>([
    { id: 1, title: 'Prepare for workshop', isDone: true },
    { id: 2, title: 'Implement sorting', isDone: false },
    { id: 3, title: 'Learn JS', isDone: true },
    { id: 4, title: 'Learn React', isDone: false },
  ])
  return (
    <div className="taskList">
      <h1>Task list</h1>
      <div>
        {tasks.map(({ id, isDone, title }) => (
          <TaskView key={id} isDone={isDone} id={id} title={title} />
        ))}
      </div>
    </div>
  )
}
