import React from 'react'
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import CategoriesNews from '../Pages/CategoriesNews';
import HomePage from '../Pages/HomePage';
import AuthLayouts from '../Layouts/AuthLayouts';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import NewsDetails from '../Pages/NewsDetails';
import PrivateRoutes from '../Provider/PrivateRoutes';
import Loading from '../Components/Loading/Loading';


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
             hydrateFallbackElement: <Loading></Loading>
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
    path: '/news-details/:id',
    element: <PrivateRoutes> <NewsDetails></NewsDetails> </PrivateRoutes>,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>
  },
  {
    path:'/*',
    element: <p>Error</p>
  }
]);


