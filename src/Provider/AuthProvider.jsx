import React, { createContext, useState } from 'react'

export const AuthContext=createContext();

export default function AuthProvider({children}) {

    const [user,setUser]=useState({
         email:"dfd@gamil.com",
         name:"sdfdf"
    })

    const authData={
        user
    }
  return (
    <AuthContext value={authData}>
         {
            children
         }
    </AuthContext>
  )
}
