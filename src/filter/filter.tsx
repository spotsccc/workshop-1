import {useState} from "react";

type FilterProps = {
    filter: (type: string) => void
}

export function Filter({filter}: FilterProps) {

    const [selected, setSelected] = useState("all")

    return (
        <div>
            <label><input name={"filter"} id={"all"} type="radio" onChange={() => filter("all")} checked={selected === "all"}/>All</label>
            <label><input name={"filter"} id={"done"} type="radio" onChange={() => filter("done")} checked={selected === "done"}/>Done </label>
            <label><input name={"filter"} id={"not_done"} type="radio" onChange={() => filter("not_done")} checked={selected === "not_done"}/>Not
                done</label>
        </div>
    )
}