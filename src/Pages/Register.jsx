import React from 'react'
import { Link } from 'react-router'
export default function Register() {

  const handleRegiter=(event)=>{
      event.preventDefault();
      const email=event.target.email.value;
      const name=event.target.name.value;
      const photoURL=event.target.photoURL.value;
      const password=event.target.password.value;
  }
  return (
     <div className='flex justify-center items-center'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                <p className='text-2xl font-semibold'>Register your account</p>
                <div className="card-body">

                    <form onSubmit={handleRegiter}>

                        <fieldset className="fieldset">

                              <label className="label">Your Name</label>
                            <input type="text" className="input" placeholder="Name" name="name" />


                              <label className="label">Photo URL</label>
                            <input type="text" className="input" placeholder="Photo URL" name="photoURL"/>

                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name="email" />

                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name="password" />
                 
                          
                            <button className="btn btn-neutral mt-4">Register</button>
                              <p className='font-medium'>All Ready Have A Account? <Link className='text-blue-500 underline' to="/auth/login"> Login </Link> </p>
                        </fieldset>

                    </form>

                </div>
            </div>

     </div>
  )
}
