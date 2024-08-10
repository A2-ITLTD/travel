import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
 createBrowserRouter, 
 RouterProvider, 
} from "react-router-dom"; 
import Root from './Root';
import Home from './Compononets/Home.jsx';
import Policy from './Compononets/Policy.jsx';
const router = createBrowserRouter([ 
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }, 
      {
        path: "/Policy",
        element: <Policy></Policy>,
      },
      
    ],
  },
]); 
 
ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode> 
 <RouterProvider router={router} /> 
 </React.StrictMode> 
); 

