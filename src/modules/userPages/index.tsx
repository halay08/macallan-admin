import React from 'react';
import { authRole } from '../../shared/constants/AppConst';

export const userPagesConfig = [
  {
    auth: authRole.user,
    routes: [
      {
        path: '/user/sign-in-1',
        component: React.lazy(() => import('./UserPages/Signin'))
      }
    ]
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/user/sign-in-2',
        component: React.lazy(() => import('./StyledUserPages/Signin'))
      }
    ]
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/user/sign-up-1',
        component: React.lazy(() => import('./UserPages/Signup'))
      }
    ]
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/user/sign-up-2',
        component: React.lazy(() => import('./StyledUserPages/Signup'))
      }
    ]
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/user/forgot-password-1',
        component: React.lazy(() => import('./UserPages/ForgetPassword'))
      }
    ]
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/user/forgot-password-2',
        component: React.lazy(() => import('./StyledUserPages/ForgetPassword'))
      }
    ]
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/user/reset-password-1',
        component: React.lazy(() => import('./UserPages/ResetPassword'))
      }
    ]
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/user/reset-password-2',
        component: React.lazy(() => import('./StyledUserPages/ResetPassword'))
      }
    ]
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/user/lock-1',
        component: React.lazy(() => import('./UserPages/UnlockScreen'))
      }
    ]
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/user/lock-2',
        component: React.lazy(() => import('./StyledUserPages/UnlockScreen'))
      }
    ]
  }
];
