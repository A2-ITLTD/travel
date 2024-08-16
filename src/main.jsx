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
import Support from './Compononets/Support.jsx';
import AuthProvider from './Compononets/AuthProvider.jsx';
import PrivateRoute from './Compononets/PrivateRoute.jsx';
import Login from './Compononets/Login.jsx';
import Registration from './Compononets/Registration.jsx';
import ShipQuick from './Compononets/ShipQuick.jsx';
import ShipService from './Compononets/ShipService.jsx';
import TimeTable from './Compononets/TimeTable.jsx';
import BannerHeader from './Compononets/BannerHeader.jsx';
import AllOrders from './Compononets/AllOrders.jsx';
import UpdateTrack from './Compononets/UpdateTrack.jsx';
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
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Registration",
        element: <Registration></Registration>,
      },
      {
        path: "/Policy",
        element: <Policy></Policy>,
      },
      {
        path: "/ShippingTools",
        element: <PrivateRoute><ShippingTools></ShippingTools></PrivateRoute>,
      },
      {
        path: "/Supplies",
        element: <PrivateRoute><Supplies></Supplies></PrivateRoute>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/Contact",
        element: <Contactus></Contactus>,
      },
      {
        path: "/Support",
        element: <Support></Support>,
      },
      {
        path: "/shipquick",
        element: <PrivateRoute><ShipQuick></ShipQuick></PrivateRoute>,
      },
      {
        path: "/shipservice",
        element: <PrivateRoute><ShipService></ShipService></PrivateRoute>,
      },
      {
        path: "/timetable",
        element: <PrivateRoute><TimeTable></TimeTable></PrivateRoute>,
      },
      {
        path: "/track",
        element: <PrivateRoute><BannerHeader></BannerHeader></PrivateRoute>,
      },
      {
        path: "/allorders",
        element: <PrivateRoute><AllOrders></AllOrders></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/orders')
      },
      {
        path: "/updatetrack",
        element: <PrivateRoute><UpdateTrack></UpdateTrack></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/track')
      },
      
    ],
  },
]); 
 
ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} /> 
  </AuthProvider>
 </React.StrictMode> 
); 

