import React from 'react';

export const authRouteConfig = [
  {
    routes: [
      {
        path: '/signin',
        component: React.lazy(() => import('./Signin'))
      }
    ]
  },
  {
    routes: [
      {
        path: '/error-pages/error-404',
        component: React.lazy(() => import('../errorPages/Error404/index'))
      }
    ]
  }
];
