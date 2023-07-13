import { useState } from 'react'

import { Task as TaskView } from '../task/task'
import { NewTaskForm } from '../new-task-form/new-task-form'
import { Filter, TaskFilter } from '../task-filter/task-filter'
import './task-list.css'
import {TaskSort} from "../task-sort/task-sort";

type Task = {
  title: string
  id: number
  isDone: boolean
  priority: number
}

export function TaskList() {
  const [tasks, updateTasks] = useState<Array<Task>>([
    { id: 1, title: 'Prepare for workshop', isDone: true, priority: 1 },
    { id: 2, title: 'Implement sorting', isDone: false, priority: 1 },
    { id: 3, title: 'Learn JS', isDone: true, priority: 1 },
    { id: 4, title: 'Learn React', isDone: false, priority: 1 },
  ])
  const [filter, setFilter] = useState(Filter.all)
  const [sort, setSort] = useState("asc")

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
  }).sort((a,b) => {
    return sort === 'asc' ? a.priority - b.priority : b.priority - a.priority
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
      priority: 1
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

  function setPriority(id: number, priority: number) {
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
      <TaskSort selectedSort={sort} onSortChange={setSort} />
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
