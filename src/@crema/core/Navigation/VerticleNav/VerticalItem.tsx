import React, { useContext, useMemo } from 'react';
import { Icon, ListItem, ListItemText } from '@material-ui/core';
import clsx from 'clsx';
import { Badge, NavLink } from '../../../index';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../utility/IntlMessages';
import useStyles from './VerticalItem.style';
import AppContext from '../../../utility/AppContext';
import { checkPermission } from '../../../utility/Utils';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../redux/store';
import { NavItemProps } from '../../../../modules/routesConfig';

interface VerticalItemProps {
  item: NavItemProps;
  level: number;
}

const VerticalItem: React.FC<VerticalItemProps> = ({ item, level }) => {
  const { themeMode } = useContext(AppContext);
  const classes = useStyles({ level, themeMode });
  const { user } = useSelector<AppState, AppState['auth']>(({ auth }) => auth);
  const hasPermission = useMemo(
    () => checkPermission(item.auth, user!.role),
    [item.auth, user]
  );
  if (!hasPermission) {
    return null;
  }
  return (
    <ListItem
      button
      component={NavLink}
      to={item.url}
      activeClassName="active"
      className={clsx(classes.navItem, 'nav-item')}
      exact={item.exact}
    >
      {item.icon && (
        <Box component="span" mr={6}>
          <Icon
            className={clsx(classes.listIcon, 'nav-item-icon')}
            color="action"
          >
            {item.icon}
          </Icon>
        </Box>
      )}
      <ListItemText
        primary={<IntlMessages id={item.messageId} />}
        classes={{ primary: 'nav-item-text' }}
      />
      {item.count && (
        <Box mr={1} clone>
          <Badge count={item.count} color={item.color} />
        </Box>
      )}
    </ListItem>
  );
};

export default React.memo(VerticalItem);
