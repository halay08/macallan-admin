import { createMuiTheme, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { CremaTheme } from '../../types/AppContextPropsType';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import moment from 'moment';
import { useIntl } from 'react-intl';

type BreakpointOrNull = Breakpoint | null;

export const isBreakPointDown = (key: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
  const defaultTheme = createMuiTheme();
  return defaultTheme.breakpoints.width(key) > window.innerWidth;
};

export const useDownBreakPointChecker = (
  key: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
) => {
  return useMediaQuery((theme: CremaTheme) => theme.breakpoints.down(key));
};

export const useBreakPointDown = (key: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(key));
};

export const useWidth = () => {
  const theme: CremaTheme = useTheme();
  const keys: Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
};

export const createRoutes = (routeConfigs: any[]) => {
  let allRoutes: any[] = [];
  routeConfigs.forEach(config => {
    allRoutes = [...allRoutes, ...setRoutes(config)];
  });
  return allRoutes;
};

export const setRoutes = (config: any) => {
  let routes = [...config.routes];
  if (config.auth) {
    routes = routes.map(route => {
      let auth = route.auth
        ? [...config.auth, ...route.auth]
        : [...config.auth];
      return { ...route, auth };
    });
  }

  return [...routes];
};
export const getBreakPointsValue = (valueSet: any, breakpoint: string) => {
  if (typeof valueSet === 'number') return valueSet;
  switch (breakpoint) {
    case 'xs':
      return valueSet.xs;
    case 'sm':
      return valueSet.sm || valueSet.xs;
    case 'md':
      return valueSet.md || valueSet.sm || valueSet.xs;
    case 'lg':
      return valueSet.lg || valueSet.md || valueSet.sm || valueSet.xs;
    default:
      return (
        valueSet.xl || valueSet.lg || valueSet.md || valueSet.sm || valueSet.xs
      );
  }
};

export const getFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  let k = 1024,
    dm = 2,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const getCustomDateTime = (
  value = 0,
  unit = 'days',
  format = 'YYYY-MM-DD'
): string => {
  if (value === 0) {
    return moment().format(format) as string;
  } else {
    // @ts-ignore
    return moment().add(value, unit).format(format) as string;
  }
};

export const timeFromNow = (date: string) => {
  const timestamp = +moment(date).format('X');
  const newDate = moment.unix(timestamp);
  return moment(newDate).fromNow();
};

// 'intl' service singleton reference
let intl: any;

export function IntlGlobalProvider({ children }: any) {
  intl = useIntl();
  // Keep the 'intl' service reference
  return children;
}

export const appIntl = () => {
  return intl;
};
export const checkPermission = (
  routeAuth: any | null | undefined,
  userRole: any | null | undefined
) => {
  if (routeAuth === null || routeAuth === undefined) {
    return true;
  }

  if (userRole && Array.isArray(userRole)) {
    return routeAuth.some((r: any) => userRole.indexOf(r) >= 0);
  }

  if (routeAuth.length === 0) {
    return !userRole || userRole.length === 0;
  }
  if (userRole && Array.isArray(userRole) && Array.isArray(routeAuth)) {
    return routeAuth.some(r => userRole.indexOf(r) >= 0);
  }
  return routeAuth.indexOf(userRole) >= 0;
};
