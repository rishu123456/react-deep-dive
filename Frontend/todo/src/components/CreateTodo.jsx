
import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle]=useState("");
    const [description,setDesription]=useState("");
    return <div>

        <input  type="text" placeholder="title" onChange={(e)=>setTitle(e.target.value)}></input><br></br>
        <input type="text" placeholder="description" onChange={(e)=>setDesription(e.target.value)}></input><br></br>

        <button onClick={()=>{
            fetch("fghjkl;", {
                method: "POST",
                body: JSON.stringify({
                    title:title,
                    description:description,
                })
            }
            ).then( async function(res){
                const  json=await res.json();
                alert("todo added");
            })
        }}>Add to do</button>


    </div>
}