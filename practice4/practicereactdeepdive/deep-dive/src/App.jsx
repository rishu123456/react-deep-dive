import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [todos,setTodos]=useState([]);

  useEffect(()=>{
    fetch("dfgh")
    .then( async (res)=>{
      const json= await res.json();
      setTodos(json);
    })
  },[])
  

  return (
    <div>
      <Todo title={todos.title} desc={todos.desc}></Todo>
      
    </div>
  )
}
export default App


// function Innercompo(){
//   return<h>hi there</h>
// }
// function Innercompo1(){
//   return<h>hi there2</h>
// }

// function Wrapper({innerCompo}){
//   return <div style={{padding:"20 px", border:"10px"}}>
//     {innerCompo}

//   </div>
// }

  function Todo({title,desc}){
    return (
      <div>
        <h1>{title}</h1>
        <h2>{desc}</h2>
      </div>

    );
  }