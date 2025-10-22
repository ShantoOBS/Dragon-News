import React, { useContext, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

export default function Login() {
  const { loginUser, setError, setUser, error, forgatePass } = useContext(AuthContext);
  const nav = useNavigate();
  const location = useLocation();
  const emailRef = useRef(); 

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    loginUser(email, password)
      .then((res) => {
        if (!res.user.emailVerified) {
          alert('Please verify your email first!');
          return;
        }
        setUser(res.user);
        nav(location.state ? location.state : '/');
      })
      .catch((err) => setError(err.message));
  };

  const handleForgate = () => {
    const email = emailRef.current.value; 

    if (!email) {
      alert('Please enter your email first!');
      return;
    }

    forgatePass(email)
      .then(() => alert('Password reset link sent to your email.'))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <p className="text-2xl font-semibold text-center mt-4">Login your account</p>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
                ref={emailRef} 
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />

              <button
                type="button" 
                onClick={handleForgate}
                className="text-start hover:text-red-500 cursor-pointer"
              >
                Forgot password?
              </button>

              {error && <p className="text-red-500">{error}</p>}

              <button className="btn btn-neutral mt-4 w-full">Login</button>

              <p className="font-medium text-center mt-2">
                Don't Have An Account?{' '}
                <Link className="text-red-500 underline" to="/auth/register">
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
