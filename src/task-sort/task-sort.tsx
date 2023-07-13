type TaskSortProps = {
  selectedSort: string
  onSortChange: (sort: string) => void
}

export function TaskSort({
  selectedSort,
  onSortChange,
}: TaskSortProps) {
  return (
    <div>
      <select value={selectedSort} onChange={(e) => onSortChange(e.target.value)}>
          <option value="asc">asc</option>
          <option value="desc">desc</option>
      </select>
    </div>
  )
}
