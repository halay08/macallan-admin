import React from 'react';

export const errorPagesConfigs = [
  {
    auth: ['user'],
    routes: [
      {
        path: '/error-pages/error-404',
        component: React.lazy(() => import('./Error404'))
      }
    ]
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/error-pages/error-500',
        component: React.lazy(() => import('./Error500'))
      }
    ]
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/error-pages/coming-soon',
        component: React.lazy(() => import('./ComingSoon'))
      }
    ]
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/error-pages/maintenance',
        component: React.lazy(() => import('./Maintenance'))
      }
    ]
  }
];
