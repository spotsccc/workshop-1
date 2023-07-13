import { useState } from 'react'

import { Task as TaskView } from '../task/task'
import { NewTaskForm } from '../new-task-form/new-task-form'
import { Filter, TaskFilter } from '../task-filter/task-filter'
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
  const [filter, setFilter] = useState(Filter.all)

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case Filter.done:
        return task.isDone
      case Filter.notDone:
        return !task.isDone
      case Filter.all:
      default:
        return true
    }
  })

  function toggleTask(id: number) {
    updateTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    )
  }

  function deleteTask(id: number) {
    updateTasks(tasks.filter((task) => task.id !== id))
  }

  function createNewTask(title: string) {
    const task: Task = {
      title,
      id: tasks[tasks.length - 1].id + 1,
      isDone: false,
    }

    updateTasks([...tasks, task])
  }

  return (
    <div className="taskList">
      <h1>Task list</h1>
      <NewTaskForm onCreateNewTask={createNewTask} />
      <TaskFilter selectedFilter={filter} onFilterChange={setFilter} />
      <div>
        {filteredTasks.map(({ id, isDone, title }) => (
          <TaskView
            key={id}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            isDone={isDone}
            id={id}
            title={title}
          />
        ))}
      </div>
    </div>
  )
}
