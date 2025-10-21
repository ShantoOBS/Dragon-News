import React, { useContext } from 'react'
import { Link, Navigate, useLocation } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';

export default function Login() {

  const {loginUser,setError,setUser,error,user}=useContext(AuthContext);
  const nav=useNavigate();
  const location=useLocation();
 
  const handleLogin=(event)=>{
      event.preventDefault();
      const email=event.target.email.value;
      const password=event.target.password.value;

      loginUser(email,password)
      .then((res)=>{
        setUser(res.user)
        nav(`${location.state?location.state:"/"}`)
      })
      .catch((error)=>{setError(error.message)})


  }
   console.log(user)
    return (
        <div className='flex justify-center items-center'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                <p className='text-2xl font-semibold'>Login your account</p>
                <div className="card-body">

                    <form onSubmit={handleLogin}>

                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name="email" required />

                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name="password" required />
                            
                            <div className='text-start'><a className="link link-hover ">Forgot password?</a></div>

                            {
                                error && <p className='text-red-500'>{error}</p>
                            }
                          
                            <button className="btn btn-neutral mt-4">Login</button>
                              <p className='font-medium'>Don't Have A Account? <Link className='text-red-500 underline' to="/auth/register"> Register </Link> </p>
                        </fieldset>

                    </form>

                </div>
            </div>

        </div>
    )
}
