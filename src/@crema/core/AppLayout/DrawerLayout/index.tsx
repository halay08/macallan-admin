import React, { useContext } from 'react';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import { ContentView, ThemeSetting } from '../../../index';
import Box from '@material-ui/core/Box';
import useStyles from './index.style';
import AppFixedFooter from './AppFixedFooter';
import clsx from 'clsx';
import AppContext from '../../../utility/AppContext';
import { LayoutType } from '../../../../shared/constants/AppEnums';
import AppContextPropsType from '../../../../types/AppContextPropsType';

interface DrawerLayoutProps {}

const DrawerLayout: React.FC<DrawerLayoutProps> = () => {
  const { footer, layoutType, footerType } =
    useContext<AppContextPropsType>(AppContext);
  const classes = useStyles({ footer });

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
      <AppSidebar />
      <Box className={classes.mainContent}>
        <Box className={classes.mainContainerFull}>
          <ContentView />
        </Box>
      </Box>
      <AppFixedFooter />
      <ThemeSetting />
    </Box>
  );
};

export default DrawerLayout;
