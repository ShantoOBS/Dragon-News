import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading/Loading';

export default function PrivateRoutes({children}) {
 
 const location=useLocation();

 const {user,loading}=useContext(AuthContext);
 
 if(loading)return <Loading></Loading>
 if(user)return children;

  return <Navigate state={location.pathname} to="/auth/login"></Navigate>
}
