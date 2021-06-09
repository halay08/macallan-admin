import React, { useContext } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import clsx from 'clsx';
import Navigation from '../../Navigation/VerticleNav';
import { toggleNavCollapsed } from '../../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import useStyles from './AppSidebar.style';
import Scrollbar from '../../Scrollbar';
import { AppState } from '../../../../redux/store';
import AppContextPropsType from '../../../../types/AppContextPropsType';
import AppContext from '../../../utility/AppContext';

interface AppSidebarProps {
  position?: 'left' | 'bottom' | 'right' | 'top';
  variant?: string;
}

const AppSidebar: React.FC<AppSidebarProps> = ({
  position = 'left',
  variant = ''
}) => {
  const dispatch = useDispatch();
  const { navCollapsed } = useSelector<AppState, AppState['settings']>(
    ({ settings }) => settings
  );
  const { themeMode } = useContext<AppContextPropsType>(AppContext);

  const handleToggleDrawer = () => {
    dispatch(toggleNavCollapsed());
  };

  const classes = useStyles({ themeMode });
  let sidebarClasses = classes.sidebarStandard;

  return (
    <>
      <Hidden lgUp>
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
          <Box height="100%" className={classes.miniSidebar}>
            <Box className={clsx(classes.sidebarBg, sidebarClasses)}>
              <Scrollbar
                scrollToTop={false}
                className={classes.drawerScrollAppSidebar}
              >
                <Navigation />
              </Scrollbar>
            </Box>
          </Box>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Box height="100%" className={clsx(classes.miniSidebar, 'app-sidebar')}>
          <Box className={clsx(classes.sidebarBg, sidebarClasses)}>
            <Scrollbar scrollToTop={false} className={classes.scrollAppSidebar}>
              <Navigation />
            </Scrollbar>
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default AppSidebar;
