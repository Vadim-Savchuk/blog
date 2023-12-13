import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="section-hero">
        <div className="banner">
          <img
            className="banner__img"
            src="https://www.mhid.ru/assets/images/stil-loft-v-interere-2.jpg"
            alt="Box title"
          />
          <div className="box section-hero__box">
            <Link className="article" to="/tags">
              FEATURED ARTICLE
            </Link>
            <Link className="main-title" to="/post/1">
              <h1>World’s Most Dangerous Technology Ever Made.</h1>
            </Link>
            <div className="author">
              <Link className="author__link" to="/profile">
                Ralph Hawkins
              </Link>
              <span>&#183;</span>
              <Link className="author__link" to="/tags">
                May 7, 2019 (10 mins read)
              </Link>
            </div>
            <p>
              Proident aliquip velit qui commodo officia qui consectetur dolor
              ullamco aliquip elit incididunt. Ea minim ex consectetur
              excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet
              aliqua do enim. Commodo duis dolor anim excepteur. In aliquip
              mollit nulla consequat velit magna.
            </p>
          </div>
        </div>
      </section>
      <section className="section-editors">
        <div className="section-editors__header">
          <h2 className="big-title section-editors__big-title">
            Editor’s Picks
          </h2>
        </div>
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
                veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip
                do anim proident ad nulla consectetur eu aute ex anim mollit.
                Anim aute exercitation nisi fugiat. Dolor velit excepteur
                commodo proident nulla commodo ullamco labore et esse.
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
                veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip
                do anim proident ad nulla consectetur eu aute ex anim mollit.
                Anim aute exercitation nisi fugiat. Dolor velit excepteur
                commodo proident nulla commodo ullamco labore et esse.
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
                veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip
                do anim proident ad nulla consectetur eu aute ex anim mollit.
                Anim aute exercitation nisi fugiat. Dolor velit excepteur
                commodo proident nulla commodo ullamco labore et esse.
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
                veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip
                do anim proident ad nulla consectetur eu aute ex anim mollit.
                Anim aute exercitation nisi fugiat. Dolor velit excepteur
                commodo proident nulla commodo ullamco labore et esse.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="section-article">
        <div className="banner">
          <img
            className="banner__img"
            src="https://www.mhid.ru/assets/images/stil-loft-v-interere-2.jpg"
            alt="Box title"
          />
          <div className="box section-article__box">
            <Link className="article" to="/tags">
              FEATURED ARTICLE
            </Link>
            <Link className="main-title" to="/post/1">
              <h1>World’s Most Dangerous Technology Ever Made.</h1>
            </Link>
            <div className="author">
              <Link className="author__link" to="/profile">
                Ralph Hawkins
              </Link>
              <span>&#183;</span>
              <Link className="author__link" to="/">
                May 7, 2019 (10 mins read)
              </Link>
            </div>
            <p>
              Proident aliquip velit qui commodo officia qui consectetur dolor
              ullamco aliquip elit incididunt. Ea minim ex consectetur
              excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet
              aliqua do enim. Commodo duis dolor anim excepteur. In aliquip
              mollit nulla consequat velit magna.
            </p>
          </div>
        </div>
      </section>
      <section className="section-posts">
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
                veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip
                do anim proident ad nulla consectetur eu aute ex anim mollit.
                Anim aute exercitation nisi fugiat. Dolor velit excepteur
                commodo proident nulla commodo ullamco labore et esse.
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
                veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip
                do anim proident ad nulla consectetur eu aute ex anim mollit.
                Anim aute exercitation nisi fugiat. Dolor velit excepteur
                commodo proident nulla commodo ullamco labore et esse.
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
                veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip
                do anim proident ad nulla consectetur eu aute ex anim mollit.
                Anim aute exercitation nisi fugiat. Dolor velit excepteur
                commodo proident nulla commodo ullamco labore et esse.
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
                veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip
                do anim proident ad nulla consectetur eu aute ex anim mollit.
                Anim aute exercitation nisi fugiat. Dolor velit excepteur
                commodo proident nulla commodo ullamco labore et esse.
              </p>
            </div>
          </li>
        </ul>
        <ul className="tags-list">
          <li className="tags-list__elem">
            <h3 className="tags-list__title">tags.</h3>
          </li>
          <li className="tags-list__elem">
            <Link className="tags-list__link" to="/tags">
              Technology
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;
