import { useState } from 'react'

import { Task as TaskView } from '../task/task'
import './task-list.css'
import { NewTaskForm } from '../new-task-form/new-task-form'
import { Filter } from "../filter/filter";

type Task = {
  title: string
  id: number
  isDone: boolean
  isVisible: boolean
}

export function TaskList() {
  const [tasks, updateTasks] = useState<Array<Task>>([
    { id: 1, title: 'Prepare for workshop', isDone: true, isVisible: true },
    { id: 2, title: 'Implement sorting', isDone: false, isVisible: true },
    { id: 3, title: 'Learn JS', isDone: true, isVisible: true },
    { id: 4, title: 'Learn React', isDone: false, isVisible: true },
  ])

  function toggleTask(id: number) {
    updateTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    )
  }

  function deleteTask(id: number) {
    updateTasks(
        tasks.filter((task) =>
            task.id !== id
        ),
    )
  }

  function filterTasks(type: string) {

    switch (type) {
      case "all":
        updateTasks(
            tasks.map((task) => !task.isVisible ? { ...task, isVisible: true } : task),
        )
        break

      case "done":
        updateTasks(
            tasks.map((task) => task.isDone ? { ...task, isVisible: true } : { ...task, isVisible: false }),
        )
        break

      case "not_done":
        updateTasks(
            tasks.map((task) => !task.isDone ? { ...task, isVisible: true } : { ...task, isVisible: false }),
        )
        break

    }

  }

  function createNewTask(title: string) {
    const task: Task = {
      title,
      id: tasks[tasks.length - 1].id + 1,
      isDone: false,
      isVisible: true,
    }

    updateTasks([...tasks, task])
  }

  return (
    <div className="taskList">
      <h1>&#128421;Task list</h1>
      <NewTaskForm onCreateNewTask={createNewTask} />
      <Filter filter={filterTasks} />
      <div>
        {tasks.map(({ id, isDone, title, isVisible }) => (
            isVisible ? <TaskView key={id} toggleTask={toggleTask} isDone={isDone} id={id} title={title} deleteTask={deleteTask}/> : null
        ))}
      </div>
    </div>
  )
}
