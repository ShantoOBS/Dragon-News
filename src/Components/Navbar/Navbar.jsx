import React, { useContext } from 'react'
import { Link } from 'react-router'

import ProfileImg from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider'
export default function Navbar() {

  const {user}=useContext(AuthContext);

  const links= <>

      <Link to='/categories/0'>Home</Link>
      <Link to=''>About</Link>
      <Link to=''>Career</Link>
      
    </>  
  return (
    <div className=''>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#706F6F] ">
        {links}
      </ul>
    </div>
    <a className="font-bold text-xl">{user  && user.email}</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-2 text-[#706F6F]">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    <img src={ProfileImg} alt="" />
    <Link to="/auth/login" className="btn bg-[#403F3F] text-white">Login</Link>
  </div>
</div>
    </div>
  )
}
