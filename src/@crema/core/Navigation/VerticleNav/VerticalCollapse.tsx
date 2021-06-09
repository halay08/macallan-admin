import React, { useContext, useEffect, useMemo, useState } from 'react';
import {
  Collapse,
  Icon,
  IconButton,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import VerticalItem from './VerticalItem';
import AppContext from '../../../utility/AppContext';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../utility/IntlMessages';
import useStyles from './VerticalCollapase.style';
import { useSelector } from 'react-redux';
import { checkPermission } from '../../../utility/Utils';
import AppContextPropsType from '../../../../types/AppContextPropsType';
import { NavItemProps } from '../../../../modules/routesConfig';
import { AppState } from '../../../../redux/store';

const needsToBeOpened = (pathname: string, item: NavItemProps): boolean => {
  if (pathname) {
    return isUrlInChildren(item, pathname);
  }
  return false;
};

const isUrlInChildren = (parent: any, url: string) => {
  if (!parent.children) {
    return false;
  }

  for (let i = 0; i < parent.children.length; i++) {
    if (parent.children[i].children) {
      if (isUrlInChildren(parent.children[i], url)) {
        return true;
      }
    }

    if (
      parent.children[i].url === url ||
      url.includes(parent.children[i].url)
    ) {
      return true;
    }
  }

  return false;
};

interface VerticalCollapseProps {
  item: NavItemProps;
  level: number;
}

const VerticalCollapse: React.FC<VerticalCollapseProps> = ({ item, level }) => {
  const { theme, themeMode } = useContext<AppContextPropsType>(AppContext);
  const classes = useStyles({ level, themeMode });
  const { pathname } = useLocation();
  const [open, setOpen] = useState(() => needsToBeOpened(pathname, item));

  useEffect(() => {
    if (needsToBeOpened(pathname, item)) {
      setOpen(true);
    }
  }, [pathname, item]);

  const handleClick = () => {
    setOpen(!open);
  };

  const { user } = useSelector<AppState, AppState['auth']>(({ auth }) => auth);
  const hasPermission = useMemo(
    () => checkPermission(item.auth, user!.role),
    [item.auth, user]
  );

  if (!hasPermission) {
    return null;
  }

  return (
    <>
      <ListItem
        button
        component="li"
        className={clsx(classes.navItem, 'nav-item', open && 'open')}
        onClick={handleClick}
      >
        {item.icon && (
          <Box component="span" mr={6}>
            <Icon
              color="action"
              className={clsx('nav-item-icon', classes.listIcon)}
            >
              {item.icon}
            </Icon>
          </Box>
        )}
        <ListItemText
          classes={{ primary: clsx('nav-item-text', classes.listItemText) }}
          primary={<IntlMessages id={item.messageId} />}
        />
        <Box p={0} clone>
          <IconButton disableRipple>
            <Icon className="nav-item-icon-arrow" color="inherit">
              {open
                ? 'expand_more'
                : theme.direction === 'ltr'
                ? 'chevron_right'
                : 'chevron_left'}
            </Icon>
          </IconButton>
        </Box>
      </ListItem>

      {item.children && Array.isArray(item.children) && (
        <Collapse in={open} className="collapse-children">
          {item.children.map((item: any) => (
            <React.Fragment key={item.id}>
              {item.type === 'collapse' && (
                <VerticalCollapse item={item} level={level + 1} />
              )}

              {item.type === 'item' && (
                <VerticalItem item={item} level={level + 1} />
              )}
            </React.Fragment>
          ))}
        </Collapse>
      )}
    </>
  );
};

export default React.memo(VerticalCollapse);
