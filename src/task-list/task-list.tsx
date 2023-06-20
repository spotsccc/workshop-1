import { useState } from 'react'

import { Task as TaskView } from '../task/task'
import './task-list.css'
import { NewTaskForm } from '../new-task-form/new-task-form'
import { Filter } from '../filter/filter'

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
  const [filter, setFilter] = useState('')
  const [filteredTasks, setFilteredTasks] = useState(tasks)

  function toggleTask(id: number) {
    updateTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    )
  }

  function setTasksFilter(type: string) {
    setFilter(type)
    updateFilteredTasks(type)
  }

  function updateFilteredTasks(type: string) {
    let t = tasks

    if (type !== "") {
      t = tasks.filter((task) => type === "done" ? task.isDone : !task.isDone)
    }

    setFilteredTasks(t)
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
      <Filter onChange={setTasksFilter} filterType={filter}/>
      <div>
        {filteredTasks.map(({ id, isDone, title }) => (
          <TaskView
            key={id}
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
