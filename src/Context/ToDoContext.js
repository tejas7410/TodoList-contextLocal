import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [{
        id: 1,
        todo: "todomsg",
        completed: false
    }],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})
export const TodoProvider = ToDoContext.Provider
export default ToDoContext

export const useToDo = () => {
    return useContext(ToDoContext)
}