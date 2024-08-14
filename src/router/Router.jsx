import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Checkout from "../pages/Checkout";
import ServiceDetails from "../pages/ServiceDetails";
import AllBookings from "../pages/AllBookings";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/registration',
          element: <Register></Register>
        },
        
        {
          path:'/details/:id', 
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/services/details/${params.id}`)
        },

        {
          path:'/checkout/:id', 
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute> ,
          loader: ({params}) => fetch(`http://localhost:5000/services/checkout/${params.id}`)
        },
        {
          path: '/bookings',
          element: <PrivateRoute> <AllBookings></AllBookings></PrivateRoute>
        }
      ]
    },
  ]);