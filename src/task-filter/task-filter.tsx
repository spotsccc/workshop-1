export enum Filter {
  all = 'all',
  done = 'done',
  notDone = 'notDone',
}

type TaskFilterProps = {
  selectedFilter: Filter
  onFilterChange: (filter: Filter) => void
}

export function TaskFilter({
  selectedFilter,
  onFilterChange,
}: TaskFilterProps) {
  return (
    <div>
      <label>
        All
        <input
          type="radio"
          checked={selectedFilter === Filter.all}
          onChange={() => onFilterChange(Filter.all)}
        />
      </label>
      <label>
        Done
        <input
          type="radio"
          checked={selectedFilter === Filter.done}
          onChange={() => onFilterChange(Filter.done)}
        />
      </label>
      <label>
        Not done
        <input
          type="radio"
          checked={selectedFilter === Filter.notDone}
          onChange={() => onFilterChange(Filter.notDone)}
        />
      </label>
    </div>
  )
}
