import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
// import Nav from "./components/Nav";
import About from './components/pages/About';
import Favorite from './components/pages/Favorite';
import Contacts from './components/pages/Contact';
import Arts from './components/pages/Arts';
import Home from "./components/Home";

const router=createBrowserRouter([{path:"/",element:<Home/>},
  {path:"/about",element:<About/>},{path:"/favorite",element:<Favorite/>},
  {path:"/contact",element:<Contacts/>},{path:"/arts",element:<Arts/>}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
