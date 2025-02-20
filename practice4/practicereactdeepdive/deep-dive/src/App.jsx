import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [todo,setTodo]=useState([{
    id:1,
    title:"go to gym",
    description:"go"
  },{
    id:2,
    title:"eat",
    description:"eat"
  },
  {
    id:3,
    title:"sleep",
    description:"sleep"
  }
])

function upadtetodo(){
  setTodo([...todo,{
    id:Math.random(),
    title:Math.random(),
    description:Math.random()
  }])
}

  return (
    <div>
      <button onClick={upadtetodo}>add</button>
      {
        todo.map((t)=><Todo title={t.title} description={t.description}></Todo>)
      }
      
    </div>
  )
}

function Todo({title,description}){
  return (
  <>
  <h3>{title}</h3>
  <h3>{description}</h3>

  </>
  )
}



export default App
