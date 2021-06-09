import React, { useContext, useState } from 'react';
import {
  Grow,
  Icon,
  IconButton,
  ListItem,
  ListItemText,
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Manager, Popper, Reference } from 'react-popper';
import HorizontalItem from './HorizontalItem';
import HorizontalGroup from './HorizontalGroup';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../utility/IntlMessages';
import AppContext from '../../../utility/AppContext';
import AppContextPropsType, {
  CremaTheme
} from '../../../../types/AppContextPropsType';
import { NavItemProps } from '../../../../modules/routesConfig';
import ClientOnlyPortal from './ClientPortal';

const useStyles = makeStyles((theme: CremaTheme) => ({
  root: {
    '& .list-item-text': {
      padding: '0 0 0 16px'
    }
  },
  button: {
    color: theme.palette.text.primary,
    minHeight: 48,
    '&.active, &.active:hover, &.active:focus': {
      backgroundColor: theme.palette.primary.main + '!important',
      color: theme.palette.secondary.contrastText + '!important'
    },
    '&.open': {
      backgroundColor: 'rgba(0,0,0,.08)'
    },
    '&.dense': {
      padding: '8px 12px 8px 12px',
      minHeight: 40,
      '& .list-item-text': {
        padding: '0 0 0 8px'
      }
    }
  },
  popper: {
    zIndex: 999
  },
  popperClose: {
    pointerEvents: 'none'
  },
  icon: {
    fontsSize: 18,
    marginRight: 14
  },
  pl0: {
    paddingLeft: 0
  }
}));

interface HorizontalCollapseProps extends RouteComponentProps<any> {
  item: NavItemProps;
  nestedLevel: number;
  dense?: string;
  match: any;
  history: any;
}

const HorizontalCollapse: React.FC<HorizontalCollapseProps> = ({
  item,
  location,
  match,
  history,
  nestedLevel,
  dense
}) => {
  const classes = useStyles();
  const [opened, setOpened] = useState(false);
  const { theme } = useContext<AppContextPropsType>(AppContext);
  const active = isUrlInChildren(item, location.pathname);

  const handleToggle = (open: boolean) => {
    setOpened(open);
  };

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
    <ul className={clsx(classes.root, 'navbarNavSubmenu')}>
      <Manager>
        <Reference>
          {({ ref }) => (
            <ListItem
              ref={ref}
              button
              className={clsx(
                'navItemSubmenu',
                classes.button,
                opened && 'open',
                dense && 'dense',
                active && 'active'
              )}
              onMouseEnter={() => handleToggle(true)}
              onMouseLeave={() => handleToggle(false)}
            >
              {item.icon && (
                <Icon
                  style={{ color: active ? 'white' : 'action' }}
                  className={classes.icon}
                >
                  {item.icon}
                </Icon>
              )}
              <ListItemText
                className="navLinkTextSubmenu"
                primary={<IntlMessages id={item.messageId} />}
              />
              <Box p={0} clone>
                <IconButton disableRipple>
                  <Icon style={{ color: active ? 'white' : 'action' }}>
                    {theme.direction === 'ltr'
                      ? 'chevron_right'
                      : 'chevron_left'}
                  </Icon>
                </IconButton>
              </Box>
            </ListItem>
          )}
        </Reference>

        <ClientOnlyPortal selector="#root">
          <Popper placement="right">
            {({ ref, style, placement, arrowProps }) =>
              opened && (
                <div
                  ref={ref}
                  style={{
                    ...style,
                    boxShadow: '0 0 3px 0 rgba(0, 0, 0, 0.2)',
                    zIndex: 1110 + nestedLevel + 1
                  }}
                  data-placement={placement}
                  className={clsx(classes.popper, {
                    [classes.popperClose]: !opened
                  })}
                >
                  <Grow in={opened} style={{ transformOrigin: '0 0 0' }}>
                    <Paper
                      onMouseEnter={() => handleToggle(true)}
                      onMouseLeave={() => handleToggle(false)}
                    >
                      {item.children && Array.isArray(item.children) && (
                        <ul className={clsx(classes.pl0)}>
                          {item.children.map((item: any) => (
                            <React.Fragment key={item.id}>
                              {item.type === 'group' && (
                                <HorizontalGroup
                                  item={item}
                                  nestedLevel={nestedLevel + 1}
                                />
                              )}

                              {item.type === 'collapse' && (
                                <HorizontalCollapse
                                  item={item}
                                  match={match}
                                  history={history}
                                  nestedLevel={nestedLevel + 1}
                                  location={location}
                                />
                              )}

                              {item.type === 'item' && (
                                <HorizontalItem
                                  item={item}
                                  // nestedLevel={nestedLevel + 1}
                                />
                              )}
                            </React.Fragment>
                          ))}
                        </ul>
                      )}
                    </Paper>
                  </Grow>
                </div>
              )
            }
          </Popper>
        </ClientOnlyPortal>
      </Manager>
    </ul>
  );
};

export default withRouter(React.memo(HorizontalCollapse));
