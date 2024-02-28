import { useState, useEffect } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:9000/todos')
    .then((data) => data.json())
    .then((resp) => {
      setTodos(resp)
    })

  }, [])

  const updateUI = function() {
    fetch('http://localhost:9000/todos')
    .then((data) => data.json())
    .then((resp) => {
      setTodos(resp)
    })
  }

  return (
    <>
        <CreateTodo updateUI={updateUI} />
        <Todos todos={todos}  />
    </>
  )
}

export default App
