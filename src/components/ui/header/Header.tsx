import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/hooks';

import { logout } from '../../../redux/slices/userSlice';

const Header = () => {
  const auth = useAppSelector(state => Boolean(state.user.token));

  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
  };

  return (
    <header className="header">
      <nav className="nav">
        {/* Logo ===> */}
        <div className="logo">
          <div className="logo__body">
            <span>nu</span>ntium.
          </div>
        </div>
        {/* Nav List ===> */}
        <ul className="nav__list">
          <li className="nav__elem">
            <Link className="nav__link active" to="/">
              Home
            </Link>
          </li>
          <li className="nav__elem">
            <Link className="nav__link" to="/tags">
              Tags
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header__actions">
        {/* Search ===> */}
        <form className="search header__search">
          <input className="search__input" type="text" />
          <button className="search__button">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.25 26.25L20.8125 20.8125"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </form>

        {auth ? (
          <div className="header__profile">
            <div className="header__profile-img">
              <img
                src="https://znaj.ua/crops/82ce86/620x0/1/0/2018/05/10/0de6d1a3-1caa-4959-aaed-3b9187bb7100.jpg"
                alt="Author"
              />
            </div>
            <div className="header__profile-menu">
              <Link className="header__profile-name" to="/profile">
                <h4>Arthur Black</h4>
              </Link>
              <Link
                className="header__profile-email"
                to="mailto:'mailto:arthurblack.com"
                onClick={e => e.preventDefault()}
              >
                @arthurblack
              </Link>

              <ul className="header__profile-list">
                <li className="header__profile-elem">
                  <Link className="header__profile-link" to="/create">
                    Write a Post
                  </Link>
                </li>
                <li className="header__profile-elem">
                  <button
                    className="header__profile-link"
                    onClick={logoutHandler}
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link className="button" to="/login">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
