const Create = () => {
  return (
    <>
      <section className="section-create">
        <h1 className="main-title section-create__main-title">
          Create new post
        </h1>

        <div className="section-create__img">
          <img
            src="https://static2.issaplus.com/wa-data/public/photos/65/45/4565/4565.970.png"
            alt="Post title"
          />
        </div>

        <form className="section-create__form">
          <label htmlFor="create-title">Title for your post</label>
          <input
            type="text"
            id="create-title"
            placeholder="Ukraine's influence on the world"
            className="section-create__input"
          />

          <label htmlFor="create-post">Your post</label>
          <textarea
            id="create-post"
            placeholder="..."
            className="section-create__input section-create__input_height"
          ></textarea>

          <label htmlFor="create-tags">Add tags to your post</label>
          <input
            type="text"
            id="create-tags"
            placeholder="#ukraine #policy"
            className="section-create__input"
          />

          <button className="button">Create post</button>
        </form>
      </section>
    </>
  );
};

export default Create;
