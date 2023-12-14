import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/hooks';

import { loginUser } from '../../redux/slices/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAppSelector(state => Boolean(state.user.token));

  const dispatch = useAppDispatch();

  const handlerSubmit = () => {
    try {
      dispatch(
        loginUser({
          email: email,
          password: password,
        }),
      );
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  if (auth) {
    return <Navigate to="/" />;
  }

  return (
    <section className="section-auth">
      <div className="section-auth__header">
        <h1 className="main-title section-auth__main-title">Welcome back!</h1>
        <p>Sign in to get the most out of nuntium.</p>
      </div>
      <form className="auth-form" onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          value={email}
          placeholder="Email"
          className="auth-form__input"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={password}
          placeholder="Password"
          className="auth-form__input"
          onChange={e => setPassword(e.target.value)}
        />
        <Link className="auth-form__link" to="/register">
          Create an account
        </Link>
        <button className="button" onClick={handlerSubmit}>
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
