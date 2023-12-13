export type Post = {
  username: string;
  email: string;
  avatar: string;
  about: string;
  title: string;
  imgUrl: string;
  text: string;
  views: number;
  author: User;
};

export type User = {
  email: string;
  password: string;
  username: string;
  about: string;
  avatar: string;
  posts: Post;
};
