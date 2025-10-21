import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate, useLocation } from 'react-router';

export default function PrivateRoutes({children}) {
 
 const location=useLocation();

 const {user,loading}=useContext(AuthContext);
 
 if(loading)return <span className="loading loading-spinner loading-xl"></span>
 if(user)return children;

  return <Navigate state={location.pathname} to="/auth/login"></Navigate>
}
