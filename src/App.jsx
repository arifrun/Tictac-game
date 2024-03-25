import {
  createRoutesFromElements,
  createBrowserRouter,
  Route, 
  RouterProvider
} from "react-router-dom";
import Home from "./assets/Components/home";
import About from "./assets/Components/About";
import Layout from "./assets/Components/Layout";
import Service from "./assets/Components/Service";
import Users from "./assets/Users";
function App() { 
  const router = createBrowserRouter(
    createRoutesFromElements( 
         <Route path="/"element={<Layout />}> 
         <Route index element={<Home />}></Route>   
          <Route path="/About" element={<About/>}></Route>  
          <Route path="/Service" element={<Service/>}></Route> 
          <Route path="/User" element={<Users/>}></Route>  
         </Route>   
    )
  );
  return <RouterProvider router={router} />; 
}

export default App
