import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'

function App() {
  const [todos,setTodos]=useState([]);

  fetch("dfghjkl;").
  then(async function(res) {
    const json=await res.json();
    setTodos(json.todo);
    
  })
  return (
    <div>
      <CreateTodo></CreateTodo>
      <todo t={todos}></todo>
    </div>
  )
}

export default App
