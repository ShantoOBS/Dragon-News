import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider,
   onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword,
    signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../FireBase/FIrebase.config';

export const AuthContext=createContext();

const googleProvider=new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider();

export default function AuthProvider({children}) {

    const [user,setUser]=useState(null);
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(true);

    const emailVerify=(email)=>{
      return sendEmailVerification(email);
    }

    const forgatePass=(email)=>{
       return sendPasswordResetEmail(auth,email);
    }
    const signInGoogle=()=>{
        return signInWithPopup(auth,googleProvider);
    }

    const signInGithub=()=>{
      return signInWithPopup(auth,githubProvider);
    }

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
        forgatePass,
        emailVerify,
        signInGithub,
        setError,
        setUser,
        cerateUser,
        loginUser,
        signOutUser,
        loading,
        signInGoogle

    }
   
  return (
    <AuthContext.Provider value={authData}>
  {children}
</AuthContext.Provider>
  )
}
