import React, { useContext } from 'react';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import { ContentView } from '../../../index';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import useStyles from './index.style';
import clsx from 'clsx';
import AppContext from '../../../utility/AppContext';
import AppFixedFooter from './AppFixedFooter';
import { LayoutType } from '../../../../shared/constants/AppEnums';
import AppContextPropsType from '../../../../types/AppContextPropsType';
interface HeaderUserLayoutProps {}

const HeaderUserLayout: React.FC<HeaderUserLayoutProps> = () => {
  const { footer, themeStyle, layoutType, footerType } =
    useContext<AppContextPropsType>(AppContext);
  const classes = useStyles({ footer, themeStyle });

  return (
    <Box
      className={clsx(
        classes.appMain,
        layoutType === LayoutType.BOXED ? classes.boxedLayout : '',
        {
          appMainFooter: footer && footerType === 'fluid',
          appMainFixedFooter: footer && footerType === 'fixed'
        }
      )}
    >
      <AppHeader />

      <Box className={classes.mainContent}>
        <AppSidebar />
        <Hidden mdDown>
          <Box className={classes.mainContainer}>
            <ContentView />
            <AppFixedFooter />
          </Box>
        </Hidden>

        <Hidden lgUp>
          <Box className={classes.mainContainerFull}>
            <ContentView />
            <AppFixedFooter />
          </Box>
        </Hidden>
      </Box>
    </Box>
  );
};

export default HeaderUserLayout;
