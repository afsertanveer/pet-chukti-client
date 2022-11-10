import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import Menu from "../../Pages/Menu/Menu";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddMenu from './../../Pages/AddMenu/AddMenu';
import Home from './../../Pages/Home/Home/Home';
import Login from './../../Pages/Login/Login/Login';
import MyReview from './../../Pages/MyReview/MyReview';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
        loader:()=> fetch("http://localhost:5000/menu"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/add-menu",
        element: (
          <PrivateRoute>
            <AddMenu></AddMenu>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
    ],
  },
]);