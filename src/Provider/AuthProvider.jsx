import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../FireBase/FIrebase.config';

export const AuthContext=createContext();

export default function AuthProvider({children}) {

    const [user,setUser]=useState(null);
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(true);

    const cerateUser=(email, password)=>{
      setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const loginUser=(email, password)=>{
      setLoading(true);
       return signInWithEmailAndPassword(auth,email, password);
    }

    const signOutUser=()=>{
      setLoading(true);
       return signOut(auth);
    }

    const updatePro=(userData)=>{
        setLoading(true);
      return updateProfile(auth.currentUser,userData);
    }
    
    useEffect(()=>{
      const unsuscribe=onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser);
          setLoading(false);
      });

      return ()=>{
          unsuscribe();
      }
    },[])

 

    const authData={
        user,
        error,
        updatePro,
        setError,
        setUser,
        cerateUser,
        loginUser,
        signOutUser,
        loading

    }
   
  return (
    <AuthContext.Provider value={authData}>
  {children}
</AuthContext.Provider>
  )
}
