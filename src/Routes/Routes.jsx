import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from '../Pages/Home';


export const Routes = createBrowserRouter([
  {
    path: "/",
    Component:Home
  },
]);


