import React from 'react';
import { Redirect } from 'react-router-dom';

import { createRoutes } from '../@crema/utility/Utils';
import { galleryConfigs } from './gallery';
import { errorPagesConfigs } from './errorPages';
import { authRouteConfig } from './auth';
import { initialUrl } from '../shared/constants/AppConst';
import { appsConfig } from './apps';
import { extraPagesConfigs } from './extraPages';
import { userListConfig } from './userList';
import { menuLevelConfig } from './menu';
import { thirdPartyConfigs } from './thirdParty';
import { userPagesConfig } from './userPages';

const routeConfigs = [
  ...authRouteConfig,
  ...galleryConfigs,
  ...extraPagesConfigs,
  ...userListConfig,
  ...menuLevelConfig,
  ...appsConfig,
  ...thirdPartyConfigs,
  ...userPagesConfig,
  ...errorPagesConfigs
];

const routes = [
  ...createRoutes(routeConfigs),
  {
    path: '/',
    exact: true,
    component: () => <Redirect to={initialUrl} />
  },
  {
    component: () => <Redirect to="/error-pages/error-404" />
  }
];

export default routes;
