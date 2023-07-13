import './task.css'
import {useState} from "react";

type TaskProps = {
  title: string
  id: number
  priority: string
  isDone: boolean
  isEdit: boolean
  toggleTask: (id: number) => void
  deleteTask: (id: number) => void
  editTitle: (id: number, title: string) => void
}

export function Task({ title, isDone, toggleTask, id, deleteTask , editTitle, priority, setPriority}: TaskProps) {
  const [isEdit, setEditable] = useState(false)

  function setEdit(){
    setEditable(
        !isEdit
    )
  }
    return (
    <div className="task">
      <select value={priority} onChange={(e) => setPriority(id, e.target.value)}>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      {!isEdit ? <p className="taskTitle">{title}</p> : <input type="text" onChange={(e) => editTitle(id, e.target.value)} value={title}/>}
      <input type="checkbox" checked={isDone} onChange={() => toggleTask(id)} />
      <button className="editButton" onClick={() => setEdit()}>
        Edit
      </button>
        <button className="deleteButton" onClick={() => deleteTask(id)}>
        Delete
      </button>
    </div>
  )
}
