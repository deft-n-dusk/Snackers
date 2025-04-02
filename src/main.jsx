import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Error from './Components/Error.jsx'
import Body from './Components/Body'
import Cart from './Components/Cart.jsx'
import Contact from './Components/Contact.jsx'
import './index.css'
import RestaurantInfo from './Components/RestaurantInfo.jsx'


const About = lazy(() => import('./Components/About.jsx'));

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<Suspense 
        fallback = {<h1>Loading...</h1>}>
         <About/>
        </Suspense>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurant/:restId",
        element:<RestaurantInfo/>
      },
      {
        path:"/cart",
        element:<Cart/>,
      },

    ],
    errorElement:<Error/>,
  },
 
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={appRouter}/>
 
)
