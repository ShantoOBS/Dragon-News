import React from 'react'
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import CategoriesNews from '../Pages/CategoriesNews';
import HomePage from '../Pages/HomePage';
import AuthLayouts from '../Layouts/AuthLayouts';
import Login from '../Pages/Login';
import Register from '../Pages/Register';


export const Routes = createBrowserRouter([
  {
    path: "/",
    Component:Home,
    children:[
         {
            path:'',
             element: <HomePage></HomePage>
         },
         {
             path:'/categories/:id',
             element: <CategoriesNews></CategoriesNews>,
             loader: () => fetch("/news.json"),
         }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayouts></AuthLayouts>,
    children:[

        {
            path:"/auth/login",
            element: <Login></Login>
        },
        {
            path:"/auth/register",
            element: <Register></Register>
        }
    ]
  },
  {
    path: '/news',
    element: <p>News layout</p>
  },
  {
    path:'/*',
    element: <p>Error</p>
  }
]);


