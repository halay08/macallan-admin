import React, { useContext } from 'react';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import UserInfo from '../../../../shared/components/UserInfo';
import Navigation from '../../Navigation/VerticleNav';
import { toggleNavCollapsed } from '../../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import useStyles from './AppSidebar.style';
import Scrollbar from '../../Scrollbar';
import AppContext from '../../../utility/AppContext';
import { AppState } from '../../../../redux/store';
import AppContextPropsType from '../../../../types/AppContextPropsType';

interface AppSidebarProps {
  variant?: string;
  position?: 'left' | 'bottom' | 'right' | 'top';
}

const AppSidebar: React.FC<AppSidebarProps> = ({
  position = 'left',
  variant = ''
}) => {
  const dispatch = useDispatch();
  const { themeMode } = useContext<AppContextPropsType>(AppContext);
  const { navCollapsed } = useSelector<AppState, AppState['settings']>(
    ({ settings }) => settings
  );

  const handleToggleDrawer = () => {
    dispatch(toggleNavCollapsed());
  };

  const classes = useStyles({ themeMode });
  return (
    <Drawer
      anchor={position}
      open={navCollapsed}
      onClose={ev => handleToggleDrawer()}
      classes={{
        root: clsx(variant),
        paper: clsx(variant)
      }}
      style={{ position: 'absolute' }}
    >
      <Box height="100%" className={classes.drawerContainer}>
        <Box
          height="100%"
          width="100%"
          color="primary.contrastText"
          className={classes.sidebarBg}
        >
          <UserInfo />
          <Scrollbar
            scrollToTop={false}
            className={classes.drawerScrollAppSidebar}
          >
            <Navigation />
          </Scrollbar>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AppSidebar;
