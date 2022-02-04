import { lazy } from 'react';

const Login = lazy(() =>
  import(/* webpackChunkName: "Login" */ '../main/login/pages/LoginPage')
);
const Main = lazy(() =>
  import(/* webpackChunkName: "Main" */ '../main/modules/main/pages/Main')
);

export const routes = [
  {
    path: 'login',
    to: '/login',
    Component: Login,
    name: 'Login',
    requiredAuth: false,
  },
  {
    path: '/main/*',
    to: '/main/',
    Component: Main,
    name: 'Main',
    requiredAuth: true,
  },
];
