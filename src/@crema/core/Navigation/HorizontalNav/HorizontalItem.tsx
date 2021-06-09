import React from 'react';
import { Icon, ListItem, ListItemText } from '@material-ui/core';
import { Badge, NavLink } from '../../../../@crema';
import clsx from 'clsx';
import IntlMessages from '../../../utility/IntlMessages';
import useStyles from './HorizontalItem.style';
import Box from '@material-ui/core/Box';
import { NavItemProps } from '../../../../modules/routesConfig';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface HorizontalItemProps extends RouteComponentProps<any> {
  item: NavItemProps;
  dense?: string;
  location: any;
}

const HorizontalItem: React.FC<HorizontalItemProps> = ({
  item,
  location,
  history,
  dense
}) => {
  const classes = useStyles();
  const { pathname } = location;
  const active = isUrlInChildren(item, pathname);

  function isUrlInChildren(parent: any, url: string) {
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
  }

  return (
    <ListItem
      component={NavLink}
      to={item.url}
      onClick={() => history.push(item.url ? item.url : '/')}
      className={clsx('navItemSubmenu', classes.root, dense && 'dense', {
        active: pathname === item.url
      })}
    >
      {item.icon && (
        <Box fontSize={{ xs: 16, xl: 18 }} mr={3} clone>
          <Icon style={{ color: active ? 'white' : 'action' }}>
            {item.icon}
          </Icon>
        </Box>
      )}
      <ListItemText
        className="navLinkTextSubmenu"
        primary={<IntlMessages id={item.messageId} />}
      />
      {item.count && (
        <Box ml={4} clone>
          <Badge count={item.count} color={item.color} />
        </Box>
      )}
    </ListItem>
  );
};
export default withRouter(React.memo(HorizontalItem));
