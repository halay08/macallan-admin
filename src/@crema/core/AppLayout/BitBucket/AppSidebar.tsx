import React, { useContext } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import UserInfo from '../../../../shared/components/UserInfo';
import Navigation from '../../Navigation/VerticleNav';
import { toggleNavCollapsed } from '../../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import BucketMinibar from './BucketMinibar';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import useStyles from './AppSidebar.style';
import Scrollbar from '../../Scrollbar';
import AppContext from '../../../utility/AppContext';
import { AppState } from '../../../../redux/store';

interface AppSidebarProps {
  isCollapsed: boolean;
  variant?: string;
  position?: 'left' | 'bottom' | 'right' | 'top';
  setCollapsed: (isCollapsed: boolean) => void;
}

const AppSidebar: React.FC<AppSidebarProps> = props => {
  const { isCollapsed, setCollapsed } = props;
  const { themeMode } = useContext(AppContext);

  const dispatch = useDispatch();
  const { navCollapsed } = useSelector<AppState, AppState['settings']>(
    ({ settings }) => settings
  );

  const handleToggleDrawer = () => {
    dispatch(toggleNavCollapsed());
  };
  const classes = useStyles({ themeMode });

  let sidebarClasses = classes.sidebarStandard;

  const sideBarComponent = () => {
    return (
      <Box className={clsx(classes.bitBucketSidebar, 'bit-bucket-sidebar')}>
        <Box
          className={classes.bitBucketBtn}
          onClick={() => setCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <NavigateNextIcon /> : <NavigateBeforeIcon />}
        </Box>
        <BucketMinibar />
        <Box className={`app-sidebar-container ${classes.appSidebarContainer}`}>
          <Box className={clsx(classes.sidebarBg, sidebarClasses)}>
            <UserInfo />
            <Scrollbar
              scrollToTop={false}
              className={classes.drawerScrollAppSidebar}
            >
              <Navigation />
            </Scrollbar>
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor={props.position}
          open={navCollapsed}
          onClose={() => handleToggleDrawer()}
          classes={{
            root: clsx(props.variant),
            paper: clsx(props.variant)
          }}
          style={{ position: 'absolute' }}
        >
          {sideBarComponent()}
        </Drawer>
      </Hidden>
      <Hidden mdDown>{sideBarComponent()}</Hidden>
    </>
  );
};
export default AppSidebar;
