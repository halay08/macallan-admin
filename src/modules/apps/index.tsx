import React from 'react';
import { Redirect } from 'react-router-dom';
import { authRole } from '../../shared/constants/AppConst';

export const appsConfig = [
  {
    auth: authRole.user,
    routes: [
      {
        path: [
          '/apps/mail/folder/:name',
          '/apps/mail/label/:name',
          '/apps/mail/compose',
          '/apps/mail/:name/:id'
        ],
        component: React.lazy(() => import('./Mail'))
      },
      {
        path: '/apps/mail',
        component: () => <Redirect to="/apps/mail/folder/inbox" />
      },
      {
        path: [
          '/apps/todo/folder/:name',
          '/apps/todo/label/:name',
          '/apps/todo/:name/:id'
        ],
        component: React.lazy(() => import('./ToDo'))
      },
      {
        path: '/apps/todo',
        component: () => <Redirect to="/apps/todo/folder/all" />
      },
      {
        path: ['/apps/contact/folder/:name', '/apps/contact/label/:name'],
        component: React.lazy(() => import('./Contact'))
      },
      {
        path: '/apps/contact',
        component: () => <Redirect to="/apps/contact/folder/all" />
      },
      {
        path: ['/apps/scrum-board/:id', '/apps/scrum-board'],
        component: React.lazy(() => import('./ScrumBoard'))
      },
      {
        path: ['/apps/chat'],
        component: React.lazy(() => import('./Chat'))
      },
      {
        path: ['/apps/wall'],
        component: React.lazy(() => import('./Wall'))
      }
    ]
  }
];
