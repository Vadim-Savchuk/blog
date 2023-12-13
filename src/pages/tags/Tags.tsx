import { Link } from 'react-router-dom';

const Tags = () => {
  return (
    <>
      <section className="section-form">
        <form className="search section-form__search">
          <input
            className="search__input"
            type="text"
            placeholder="Find the topics you care about..."
          />
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

        <ul className="section-form__tags-list">
          <li>
            <Link className="button" to="/tags">
              #technology
            </Link>
          </li>
        </ul>

        <div className="section-form__offer">
          <ul className="card-list">
            <li className="card">
              <Link className="card__img" to="/post/1">
                <img
                  src="https://stilists.com.ua/assets/media/images/articles/stylew1.png"
                  alt="Card title"
                />
              </Link>
              <div className="card__body">
                <Link className="article" to="/tags">
                  MINIMALISM
                </Link>
                <Link className="main-title" to="/post/1">
                  <h3>Culpa sit Laboris Exercitation ea Fugiat</h3>
                </Link>
                <div className="author">
                  <Link className="author__link" to="/profile">
                    Leslie Pena
                  </Link>
                  <span>&#183;</span>
                  <Link className="author__link" to="/">
                    April 25, 2012 (6 mins read)
                  </Link>
                </div>
                <p className="description">
                  Incididunt occaecat et qui dolore consectetur magna. Lorem
                  veniam ut et labore consequat ut ex sunt. Ut et nostrud
                  aliquip do anim proident ad nulla consectetur eu aute ex anim
                  mollit. Anim aute exercitation nisi fugiat. Dolor velit
                  excepteur commodo proident nulla commodo ullamco labore et
                  esse.
                </p>
              </div>
            </li>
            <li className="card">
              <Link className="card__img" to="/post/1">
                <img
                  src="https://stilists.com.ua/assets/media/images/articles/stylew1.png"
                  alt="Card title"
                />
              </Link>
              <div className="card__body">
                <Link className="article" to="/tags">
                  MINIMALISM
                </Link>
                <Link className="main-title" to="/post/1">
                  <h3>Culpa sit Laboris Exercitation ea Fugiat</h3>
                </Link>
                <div className="author">
                  <Link className="author__link" to="/profile">
                    Leslie Pena
                  </Link>
                  <span>&#183;</span>
                  <Link className="author__link" to="/">
                    April 25, 2012 (6 mins read)
                  </Link>
                </div>
                <p className="description">
                  Incididunt occaecat et qui dolore consectetur magna. Lorem
                  veniam ut et labore consequat ut ex sunt. Ut et nostrud
                  aliquip do anim proident ad nulla consectetur eu aute ex anim
                  mollit. Anim aute exercitation nisi fugiat. Dolor velit
                  excepteur commodo proident nulla commodo ullamco labore et
                  esse.
                </p>
              </div>
            </li>
            <li className="card">
              <Link className="card__img" to="/post/1">
                <img
                  src="https://stilists.com.ua/assets/media/images/articles/stylew1.png"
                  alt="Card title"
                />
              </Link>
              <div className="card__body">
                <Link className="article" to="/tags">
                  MINIMALISM
                </Link>
                <Link className="main-title" to="/post/1">
                  <h3>Culpa sit Laboris Exercitation ea Fugiat</h3>
                </Link>
                <div className="author">
                  <Link className="author__link" to="/profile">
                    Leslie Pena
                  </Link>
                  <span>&#183;</span>
                  <Link className="author__link" to="/">
                    April 25, 2012 (6 mins read)
                  </Link>
                </div>
                <p className="description">
                  Incididunt occaecat et qui dolore consectetur magna. Lorem
                  veniam ut et labore consequat ut ex sunt. Ut et nostrud
                  aliquip do anim proident ad nulla consectetur eu aute ex anim
                  mollit. Anim aute exercitation nisi fugiat. Dolor velit
                  excepteur commodo proident nulla commodo ullamco labore et
                  esse.
                </p>
              </div>
            </li>
            <li className="card">
              <Link className="card__img" to="/post/1">
                <img
                  src="https://stilists.com.ua/assets/media/images/articles/stylew1.png"
                  alt="Card title"
                />
              </Link>
              <div className="card__body">
                <Link className="article" to="/tags">
                  MINIMALISM
                </Link>
                <Link className="main-title" to="/post/1">
                  <h3>Culpa sit Laboris Exercitation ea Fugiat</h3>
                </Link>
                <div className="author">
                  <Link className="author__link" to="/profile">
                    Leslie Pena
                  </Link>
                  <span>&#183;</span>
                  <Link className="author__link" to="/">
                    April 25, 2012 (6 mins read)
                  </Link>
                </div>
                <p className="description">
                  Incididunt occaecat et qui dolore consectetur magna. Lorem
                  veniam ut et labore consequat ut ex sunt. Ut et nostrud
                  aliquip do anim proident ad nulla consectetur eu aute ex anim
                  mollit. Anim aute exercitation nisi fugiat. Dolor velit
                  excepteur commodo proident nulla commodo ullamco labore et
                  esse.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Tags;
