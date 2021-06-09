import React from 'react';
import { authRole } from '../../shared/constants/AppConst';

export const extraPagesConfigs = [
  {
    auth: authRole.user,
    routes: [
      {
        path: '/extra-pages/about-us',
        component: React.lazy(() => import('./AboutUs'))
      }
    ]
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/extra-pages/knowledge-base',
        component: React.lazy(() => import('./KnowledgeBase'))
      }
    ]
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/extra-pages/portfolio',
        component: React.lazy(() => import('./Portfolio'))
      }
    ]
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/extra-pages/faq',
        component: React.lazy(() => import('./FAQ'))
      }
    ]
  }
];
