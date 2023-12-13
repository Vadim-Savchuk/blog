import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="section-auth">
      <div className="section-auth__header">
        <h1 className="main-title section-auth__main-title">Welcome back!</h1>
        <p>Sign in to get the most out of nuntium.</p>
      </div>
      <form className="auth-form">
        <input
          className="auth-form__input"
          type="text"
          placeholder="Username"
        />
        <input
          className="auth-form__input"
          type="text"
          placeholder="Password"
        />
        <Link className="auth-form__link" to="/register">
          Create an account
        </Link>
        <button className="button">Login</button>
      </form>
    </section>
  );
};

export default Login;
