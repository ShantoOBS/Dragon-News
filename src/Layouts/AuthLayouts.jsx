import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router'

export default function AuthLayouts() {
  return (
    <div className='w-11/12 mx-auto'>

        <Navbar></Navbar>
        <Outlet></Outlet>
      
    </div>
  )
}
