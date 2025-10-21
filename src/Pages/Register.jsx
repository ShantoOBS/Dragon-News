import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

export default function Register() {
  const { cerateUser, setError, updatePro, setUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const name = event.target.name.value;
    const photo = event.target.photoURL.value;
    const password = event.target.password.value;

    cerateUser(email, password)
      .then((res) => {
        const user = res.user;

        updatePro({ displayName: name, photoURL: photo })
          .then(() => {
 
            setUser({ ...user, displayName: name, photoURL: photo });
            
          })
          .catch((error) => {
            setError(error.message);
            setUser(user); 
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <p className="text-2xl font-semibold text-center mt-4">Register your account</p>

        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Your Name</label>
              <input type="text" className="input" placeholder="Name" name="name" required />

              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="Photo URL" name="photoURL" required />

              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" name="email" required />

              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" name="password" required />

              <button className="btn btn-neutral mt-4">Register</button>

              <p className="font-medium text-center mt-2">
                Already have an account?{' '}
                <Link className="text-blue-500 underline" to="/auth/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
