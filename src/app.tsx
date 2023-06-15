import { Task } from './task/task'
import './app.css'

export function App() {
  return (
    <div className="taskList">
      <h1>Task list</h1>
      <div>
        <Task id={1} title="Prepare for workshop" isDone={true} />
        <Task id={2} title="Implement sorting" isDone={false} />
        <Task id={3} title="Learn JS" isDone={true} />
        <Task id={4} title="Learn React" isDone={false} />
      </div>
    </div>
  )
}
