import './task.css'

type TaskProps = {
  title: string
  id: number
  isDone: boolean
}

export function Task({ title, isDone }: TaskProps) {
  return (
    <div className="task">
      <p className="taskTitle">{title}</p>
      <input type="checkbox" checked={isDone} />
    </div>
  )
}
