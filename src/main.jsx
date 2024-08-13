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
import ShippingTools from './Compononets/ShippingTools.jsx';
import Supplies from './Compononets/Supplies.jsx';
import About from './Compononets/About.jsx';
import Contactus from './Compononets/Contactus.jsx';
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
      {
        path: "/ShippingTools",
        element: <ShippingTools></ShippingTools>,
      },
      {
        path: "/Supplies",
        element: <Supplies></Supplies>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/Contact",
        element: <Contactus></Contactus>,
      },
      
    ],
  },
]); 
 
ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode> 
 <RouterProvider router={router} /> 
 </React.StrictMode> 
); 

