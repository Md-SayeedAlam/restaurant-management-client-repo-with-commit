import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './Components/MainLayOut/MainLayOut.jsx';
import Error from './Components/Error/Error.jsx';
import Home from './Components/HOME/hOME.JSX';
import Login from './Pages/Login.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import Register from './Pages/Register.jsx';
import AllFoods from './Pages/AllFoods.jsx';
import AddFoodItem from './Pages/AddFoodItem.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement:<Error></Error>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      
      {
        path:'/all-foods',
        element:<AllFoods></AllFoods>
      },
      
      {
        path:'/add-item',
        element:<PrivateRoute><AddFoodItem></AddFoodItem></PrivateRoute>
      },
      
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
