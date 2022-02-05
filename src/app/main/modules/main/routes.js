import { lazy } from 'react';

const FiscaliasModule = lazy(() =>
  import(
    /* webpackChunkName: "FiscaliasModule" */ '../fiscalias/pages/FiscaliasModule'
  )
);

export const routes = [
  {
    path: 'fiscalias',
    to: 'fiscalias',
    Component: FiscaliasModule,
    name: 'Fiscalias',
    requiredAuth: false,
  },
];
