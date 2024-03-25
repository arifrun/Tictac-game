import { useEffect, useState } from "react" 
import { getDatabase, ref, set } from "firebase/database";

 
 const Home = () => { 
  let[todo, setTodo] = useState("")   
  const db = getDatabase();

  const  handelClick = () =>{    
    set(ref(db, "todo/"),{
      todolist: todo,
    });
  };
  
  return (
    <>  
      <div>Home page</div>  
      <input type="text" className="my-10" placeholder="Add todo" onChange={(e)=>setTodo(e.target.value)}/>  
     
     <button onClick={handelClick}>Add</button> 
     <hr /> 
     <ul> 
       <li> 
          <p>1list</p> 
          <p>1list</p> 
          <p>1list</p>  
       </li>
     </ul>
    </>
  )
} 
export default Home
