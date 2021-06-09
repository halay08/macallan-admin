import React, { CSSProperties, ReactNode, useContext } from 'react';
import { onToggleAppDrawer } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import InfoView from '@crema/core/InfoView';
import { Box } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Fonts } from '../../../shared/constants/AppEnums';
import Card from '@material-ui/core/Card';
import useStyles from './index.style';
import { AppContext } from '../../index';
import AppSidebar from './AppSidebar';
import { AppState } from '../../../redux/store';

interface AppsContainerProps {
  title?: string | ReactNode;
  sidebarContent?: ReactNode;
  fullView?: boolean;
  cardStyle?: CSSProperties;
  children: ReactNode;
}

const AppsContainer: React.FC<AppsContainerProps> = ({
  title = '',
  cardStyle,
  sidebarContent,
  fullView = false,
  children
}) => {
  const dispatch = useDispatch();
  const { isAppDrawerOpen } = useSelector<AppState, AppState['common']>(
    ({ common }) => common
  );
  const { footer, navStyle } = useContext(AppContext);
  const classes = useStyles({ footer, navStyle, fullView });

  return (
    <Box pt={{ xl: 4 }} flex={1} display="flex" flexDirection="column">
      <Box
        mb={{ xs: fullView ? 4 : 2, lg: fullView ? 5 : 4 }}
        mt={{ xs: fullView ? 0 : -3, lg: 0 }}
        display="flex"
        alignItems="center"
      >
        {fullView ? null : (
          <Hidden lgUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={() => dispatch(onToggleAppDrawer())}
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
          </Hidden>
        )}
        <Box
          component="h2"
          color="text.primary"
          fontWeight={Fonts.BOLD}
          fontSize={16}
        >
          {title}
        </Box>
      </Box>

      <Box className={classes.appsContainer}>
        {sidebarContent ? (
          <AppSidebar
            isAppDrawerOpen={isAppDrawerOpen}
            footer={footer}
            fullView={fullView}
            navStyle={navStyle}
            sidebarContent={sidebarContent}
          />
        ) : null}

        <Box className={classes.appsMainContent}>
          <Card
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              ...cardStyle
            }}
          >
            {children}
          </Card>
          <InfoView />
        </Box>
      </Box>
    </Box>
  );
};

export default AppsContainer;
