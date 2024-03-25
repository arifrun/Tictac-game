import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa"; 
import axios from 'axios';

const Users = () => {   
    let[user,setUser] = useState([])
    useEffect(()=>{ 

     axios.get("https://jsonplaceholder.typicode.com/users").then((resp)=>{ 
        setUser(resp.data)
     });
    },[]) 
    console.log(user)
  return (
     <section> 
        <div className="container "> 
            { 
              user.map((item)=>( 
                <div key={item.id} className="p-8 border w-fit my-8">  
                <h1>No:{item.id}</h1> 
                <div className=" flex gap-5 items-center"> 
                 <FaUserAlt /> 
                 <h2>Name: {item.name}</h2>
                </div> 
                <div> 
                    <h2>Email:{item.email}</h2> 
                    <h2>Phone:{item.phone}</h2>
                </div>
           </div>       
              )) 
            }         
 
        </div>
     </section>
  )
}

export default Users