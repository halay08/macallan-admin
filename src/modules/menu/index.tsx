import React from 'react';
import { authRole } from '../../shared/constants/AppConst';

export const menuLevelConfig = [
  {
    auth: authRole.user,
    routes: [
      {
        path: '/menu-level-1',
        component: React.lazy(() => import('./MenuLevel'))
      }
    ]
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/menu-level-2-1',
        component: React.lazy(() => import('./MenuLevel'))
      },
      {
        path: '/menu-level-2-2',
        component: React.lazy(() => import('./MenuLevel'))
      }
    ]
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/menu-level-3-1-1',
        component: React.lazy(() => import('./MenuLevel'))
      },
      {
        path: '/menu-level-3-1-2',
        component: React.lazy(() => import('./MenuLevel'))
      },
      {
        path: '/menu-level-3-2-1',
        component: React.lazy(() => import('./MenuLevel'))
      },
      {
        path: '/menu-level-3-2-2',
        component: React.lazy(() => import('./MenuLevel'))
      }
    ]
  }
];
