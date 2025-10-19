import React from 'react'
import { Link } from 'react-router'

export default function Login() {
  const handleLogin=(event)=>{
      event.preventDefault();
      const email=event.target.email.value;
      const password=event.target.password.value;
  }
    return (
        <div className='flex justify-center items-center'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                <p className='text-2xl font-semibold'>Login your account</p>
                <div className="card-body">

                    <form onSubmit={handleLogin}>

                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name="email" />

                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name="password" />
                            <div className='text-start'><a className="link link-hover ">Forgot password?</a></div>
                          
                            <button className="btn btn-neutral mt-4">Login</button>
                              <p className='font-medium'>Don't Have A Account? <Link className='text-red-500 underline' to="/auth/register"> Register </Link> </p>
                        </fieldset>

                    </form>

                </div>
            </div>

        </div>
    )
}
