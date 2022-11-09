import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import Home from './../../Pages/Home/Home/Home';
import Login from './../../Pages/Login/Login/Login';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    }
])