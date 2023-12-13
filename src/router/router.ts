import Login from 'pages/login/Login';
import Register from 'pages/register/Register';
import Home from 'pages/home/Home';
import Post from 'pages/post/Post';
import Tags from 'pages/tags/Tags';
import Create from 'pages/create/Create';

type RouteType = {
  path: string;
  element: () => JSX.Element;
};

export const publicRoutes: RouteType[] = [
  {
    path: '/login',
    element: Login,
  },
  {
    path: '/register',
    element: Register,
  },
  {
    path: '/',
    element: Home,
  },
  {
    path: '/tags',
    element: Tags,
  },
  {
    path: '/post/:id',
    element: Post,
  },
];

export const privateRoutes: RouteType[] = [
  {
    path: '/create',
    element: Create,
  },
];
