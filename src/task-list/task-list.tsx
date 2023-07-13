import { useState } from 'react'

import { Task as TaskView } from '../task/task'
import { NewTaskForm } from '../new-task-form/new-task-form'
import { Filter, TaskFilter } from '../task-filter/task-filter'
import './task-list.css'

type Task = {
  title: string
  id: number
  isDone: boolean
  priority: string
}

export function TaskList() {
  const [tasks, updateTasks] = useState<Array<Task>>([
    { id: 1, title: 'Prepare for workshop', isDone: true, priority: "low" },
    { id: 2, title: 'Implement sorting', isDone: false, priority: "low" },
    { id: 3, title: 'Learn JS', isDone: true, priority: "low" },
    { id: 4, title: 'Learn React', isDone: false, priority: "low" },
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
      priority: "low"
    }

    updateTasks([...tasks, task])
  }

  function editTitle(id: number, title: string) {
    updateTasks(
        tasks.map((task) =>
            task.id === id ? {...task, title: title} : task,
        ),
    )
  }

  function setPriority(id: number, priority: string) {
    updateTasks(
        tasks.map((task) =>
            task.id === id ? {...task, priority: priority} : task,
        ),
    )
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
            editTitle={editTitle}
            setPriority={setPriority}
            isDone={isDone}
            id={id}
            title={title}
          />
        ))}
      </div>
    </div>
  )
}
