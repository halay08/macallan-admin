import React from 'react';
import { authRole } from '../../shared/constants/AppConst';

export const galleryConfigs = [
  {
    auth: authRole.user,
    routes: [
      {
        path: '/gallery/list',
        component: React.lazy(() => import('./ListGallery'))
      }
    ]
  }
];
