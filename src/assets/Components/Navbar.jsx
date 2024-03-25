import { Link } from "react-router-dom";


const Navbar = () => {
  return (
     <nav className='py-5 bg-green-400'> 
        <div className='container'> 
           <ul className=' flex gap-5 items-center'> 
               <li> <Link to='/'>Home</Link></li>   
                <li> <Link to='/About'>About</Link></li>  
                <li> <Link to='/Service'>Service</Link></li>  
                <li> <Link to='#'>Blog</Link></li>  
                <li> <Link to='/User'>Users</Link></li>
               
          </ul> 
        </div>
     </nav>
  );
};

export default Navbar