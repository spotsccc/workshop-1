type NewFilterProps =  {
    onChange: (type: string) => void
    filterType: string
}
export function Filter({ onChange, filterType }: NewFilterProps) {
    const filterTypeDone = "done"
    const filterTypeUndone = "undone"

    return (
        <div>
            <label>
                All
                <input
                    type="radio"
                    checked={filterType === ''}
                    onChange={() => onChange("")}
                />
            </label>
            <br />
            <label>
                Done
                <input
                    type="radio"
                    checked={filterType === filterTypeDone}
                    onChange={() => onChange(filterTypeDone)}
                />
            </label>
            <br />
            <label>
                Not Done
                <input
                    type="radio"
                    checked={filterType === filterTypeUndone}
                    onChange={() => onChange(filterTypeUndone)}
                />
            </label>
        </div>
    )
}