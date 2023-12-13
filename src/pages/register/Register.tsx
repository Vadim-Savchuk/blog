import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/hooks';

import { registerUser } from '../../redux/slices/userSlice';

// import { registerUser } from 'redux/slices/userSlice';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isAuth = useAppSelector(state => Boolean(state.user.token));

  const dispatch = useAppDispatch();

  const handlerSubmit = () => {
    try {
      dispatch(registerUser({ email, password }));
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section-auth">
      <div className="section-auth__header">
        <h1 className="main-title section-auth__main-title">Registration</h1>
        <p>Register in to get the most out of nuntium.</p>
      </div>
      <form className="auth-form">
        <input
          type="text"
          value={email}
          placeholder="Username"
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
        <Link className="auth-form__link" to="/login">
          I have an account
        </Link>
        <button className="button" onClick={handlerSubmit}>
          Login
        </button>
      </form>
    </section>
  );
};

export default Register;
