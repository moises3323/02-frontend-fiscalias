import { lazy } from 'react';

const DashboardModule = lazy(() =>
  import(
    /* webpackChunkName: "DashboardModule" */ '../dashboard/pages/DashboardModule'
  )
);
const ProductsModule = lazy(() =>
  import(
    /* webpackChunkName: "ProductsModule" */ '../products/pages/ProductsModule'
  )
);

export const routes = [
  {
    path: 'dashboard',
    to: 'dashboard',
    Component: DashboardModule,
    name: 'Dashboard',
    requiredAuth: false,
  },
  {
    path: 'productos',
    to: 'productos',
    Component: ProductsModule,
    name: 'Dashboard',
    requiredAuth: false,
  },
];
