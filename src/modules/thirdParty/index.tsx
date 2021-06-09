import React from 'react';
// import {mapConfigs} from './googleMap';/*
// import {rechartsConfigs} from './recharts';
// import {calendarConfigs} from './calendar';*/
import { authRole } from '../../shared/constants/AppConst';

export const thirdPartyConfigs = [
  // ...mapConfigs,
  // ...rechartsConfigs,
  // {
  //   auth: authRole.user,
  //   routes: [
  //     {
  //       path: '/third-party/react-color',
  //       component: React.lazy(() => import('./reactColor')),
  //     },
  //   ],
  // },
  // {
  //   auth: authRole.user,
  //   routes: [
  //     {
  //       path: '/third-party/react-notification',
  //       component: React.lazy(() => import('./reactNotification')),
  //     },
  //   ],
  // },
  // {
  //   auth: authRole.user,
  //   routes: [
  //     {
  //       path: '/third-party/react-dropzone',
  //       component: React.lazy(() => import('./reactDropzone')),
  //     },
  //   ],
  // },
  // {
  //   auth: authRole.user,
  //   routes: [
  //     {
  //       path: '/third-party/react-table',
  //       component: React.lazy(() => import('./reactTable')),
  //     },
  //   ],
  // },
  // {
  //   auth: authRole.user,
  //   routes: [
  //     {
  //       path: '/third-party/material-table',
  //       component: React.lazy(() => import('./materialTable')),
  //     },
  //   ],
  // },
  // {
  //   auth: authRole.user,
  //   routes: [
  //     {
  //       path: '/third-party/react-gallery',
  //       component: React.lazy(() => import('./reactPhotoGallery')),
  //     },
  //   ],
  // },
  // {
  //   auth: authRole.user,
  //   routes: [
  //     {
  //       path: '/third-party/react-player',
  //       component: React.lazy(() => import('./reactPlayer')),
  //     },
  //   ],
  // },
  // {
  //   auth: authRole.user,
  //   routes: [
  //     {
  //       path: '/third-party/react-dnd',
  //       component: React.lazy(() => import('./reactBeautifulDnd')),
  //     },
  //   ],
  // },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/third-party/time-line',
        component: React.lazy(() => import('./timeLine'))
      }
    ]
  }
  // ...calendarConfigs,
];
