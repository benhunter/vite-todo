import {useState} from 'react'
import './App.css'

function App() {
  const [newTodo, setNewTodo] = useState<string>('')
  const [todoList, setTodoList] = useState<string[]>([])

  const handleChangeNewTodo = (event) => {
    setNewTodo(event.target.value)
  }

  const addTodo = (event) => {
    event.preventDefault()
    if (newTodo.length === 0) {
      // TODO - toast
      return
    }

    if (todoList.includes(newTodo)) {
      // TODO - toast
      return
    }

    setTodoList([...todoList, newTodo])
    setNewTodo('')
  }

  return (
    <div className="App">
      <h1>To Do</h1>

      <div className="card">
        {todoList.map((todo) => {
          return <div key={todo}>{todo}</div>
        })}
      </div>

      <div className="card">
        <form onSubmit={addTodo}>
          <input type="text" value={newTodo} onChange={handleChangeNewTodo}/>
          <button onClick={addTodo}>
            Add
          </button>
        </form>
      </div>

      <p className="read-the-docs">
        Stop procrastinating and do the work!
      </p>
    </div>
  )
}

export default App
