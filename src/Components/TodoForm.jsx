import { useState } from "react";
import { useToDo } from "../Context/ToDoContext"
function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useToDo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return
        addTodo({ todo, completed: false })
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="shrink-0 px-3 py-1 text-white bg-green-600 rounded-r-lg">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

