import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoFrom"
import { TodoList } from "./TodoList"
import { useEffect } from "react"
export default function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [...currentTodos, { id: crypto.randomUUID(), title, completed: false }]
    })
  }


  function toggleTodo(id, completed) {
    console.log(id, completed) // Affiche l'ID du todo et son état de complétion dans la console
    setTodos(currentTodos => {
      return currentTodos.map(todo => { // Parcourt la liste actuelle des todos
        if (todo.id === id) { // Vérifie si l'ID du todo correspond à celui passé en argument
          return { ...todo, completed } // Met à jour l'état 'completed' du todo correspondant
        }
        return todo // Retourne le todo inchangé si l'ID ne correspond pas
      })
    })
  }

  function deleteTodo(id) {
    console.log(id)
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  function handleDelete(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <h1 className="header">Create your custom Todo List</h1>
      <NewTodoForm addTodo={addTodo} />
      <h2 className="header">Todo List</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}