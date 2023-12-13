import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <section className="section-post">
      <div className="banner">
        <img
          className="banner__img"
          src="https://www.mhid.ru/assets/images/stil-loft-v-interere-2.jpg"
          alt="Box title"
        />
      </div>

      <div className="section-post__body">
        <h1 className="main-title section-post__main-title">
          The World’s Most Dangerous Technology Ever Made.
        </h1>
        <div className="author">
          <Link className="author__link" to="/profile">
            Leslie Pena
          </Link>
          <span>&#183;</span>
          <Link className="author__link" to="/">
            April 25, 2012 (6 mins read)
          </Link>
        </div>
        <div className="section-post__tags">
          <Link className="section-post__tags-link" to="/tags">
            #technology
          </Link>
          <Link className="section-post__tags-link" to="/tags">
            #tech
          </Link>
          <Link className="section-post__tags-link" to="/tags">
            #career
          </Link>
        </div>
        <p className="section-post__description">
          Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore.
          Aliquip consectetur labore consectetur dolor exercitation est minim
          quis. Magna non irure qui ex est laborum nulla excepteur qui. Anim
          Lorem dolore cupidatat pariatur ex tempor. Duis ea excepteur proident
          ex commodo irure est. Nisi commodo qui pariatur enim sint laborum
          consequat enim in officia. Officia fugiat incididunt commodo et mollit
          aliqua non aute. Enim dolor eiusmod aliqua amet ipsum in enim eiusmod.
          Quis exercitation sit velit duis. Est Lorem labore consectetur minim
          sit eu eiusmod mollit velit. Consectetur voluptate ex amet id eiusmod
          laborum irure. Aliquip ad qui id exercitation irure amet commodo nisi
          quis. Occaecat minim incididunt eiusmod nostrud veniam quis culpa.
          Nisi ipsum et consequat id deserunt excepteur. Cillum non pariatur
          culpa ut occaecat laboris eu. Ullamco ad Lorem et elit laboris eu qui
          irure nulla qui culpa et. Cupidatat sunt ipsum proident aute
          exercitation do tempor aliqua cupidatat quis non exercitation.
          Adipisicing do minim dolore nulla mollit. Adipisicing incididunt irure
          ipsum et in esse ipsum elit tempor. Aliquip mollit sunt qui irure.
          Irure ullamco Lorem excepteur dolor qui ea ad quis. Enim fugiat cillum
          enim ad occaecat sint qui elit labore mollit sunt laborum fugiat
          consequat. Voluptate labore sunt duis eu deserunt. Occaecat do ut ut
          labore cillum enim dolore ad enim enim id. Aliquip do veniam ad
          excepteur ad cillum qui deserunt nostrud sunt aliqua duis sunt
          occaecat. Laborum incididunt commodo ullamco proident quis.
        </p>

        <div className="author-profile  section-post__author-profile">
          <h3 className="author-profile__subtitle">ABOUT THE AUTHOR</h3>
          <div className="author-profile__container">
            <div className="author-profile__img">
              <img
                src="https://rivne1.tv/pics2/1901/i97511.jpg?1546526976"
                alt="Name"
              />
            </div>
            <div className="author-profile__body">
              <Link
                className="main-title author-profile__main-title"
                to="/profile"
              >
                <h2>Arthur Black</h2>
              </Link>
              <Link
                to="mailto:@arthurblack.com"
                className="author-profile__email"
                onClick={e => e.preventDefault()}
              >
                @arthurblack
              </Link>
              <p>
                Ipsum adipisicing culpa est nisi consequat ex amet magna culpa
                veniam tempor irure ea. Reprehenderit labore do tempor eiusmod
                in consectetur ex sunt id mollit commodo ipsum deserunt quis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
