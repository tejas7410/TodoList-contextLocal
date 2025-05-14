import { useState } from 'react'
import { TodoProvider } from './Context'
import './App.css'
import { TodoForm, TodoItem } from './Components'
import { useEffect } from 'react'

function App() {
  const [todos, setTodo] = useState([])

  const addTodo = (todo) => {
    setTodo((prev) => [{ id: Date.now(), ...todo }, ...prev])
  };
  const updateTodo = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }
  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => (todo.id !== id)))
  }
  const toggleComplete = (id) => {
    setTodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      console.log(todos)
      setTodo(todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])







  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8 w-screen">
        <div className="w-full max-w-2xl px-4 py-3 mx-auto text-white rounded-lg shadow-md">
          <h1 className="mt-2 mb-8 text-2xl font-bold text-center">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="gap-y-3 flex flex-wrap">
            {todos.map((todo) => {
              return (
                <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
