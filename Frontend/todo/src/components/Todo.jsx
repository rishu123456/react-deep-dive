  export function Todo({todo}){
    return 
    <div>
        {todo.map(function(t){
            return <div>
                <h1>{t.title}</h1>
                <h2>{t.description}</h2>
                <button>mark</button>

            </div>
        })}


    </div>
  }