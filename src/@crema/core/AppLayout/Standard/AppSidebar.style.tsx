import { makeStyles } from '@material-ui/core';
import { ThemeMode } from '../../../../shared/constants/AppEnums';
import { CremaTheme } from '../../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => {
  return {
    container: {
      paddingLeft: 0,
      paddingTop: 0,
      paddingBottom: 0,
      position: 'relative',
      top: 0,
      left: 0,
      width: '19rem',
      maxHeight: '100vh',
      [theme.breakpoints.up('lg')]: {
        position: 'fixed'
      },
      [theme.breakpoints.up('xl')]: {
        width: '21.6rem'
      }
    },
    sidebarBg: {
      backgroundColor: (props: { themeMode: ThemeMode }) =>
        props.themeMode === ThemeMode.SEMI_DARK
          ? theme.palette.sidebar.bgColor
          : props.themeMode === ThemeMode.LIGHT
          ? 'white'
          : '#313541'
    },
    scrollAppSidebar: {
      paddingTop: 8,
      paddingBottom: 20,
      height: 'calc(100vh - 58px) !important',

      [theme.breakpoints.up('xl')]: {
        height: 'calc(100vh - 65px) !important'
      }
    },
    drawerScrollAppSidebar: {
      paddingTop: 8,
      paddingBottom: 20,
      height: 'calc(100vh - 58px) !important',

      [theme.breakpoints.up('xl')]: {
        height: 'calc(100vh - 65px) !important'
      }
    },
    sidebarStandard: {
      height: '100%',
      width: '100%',
      color: 'white',
      overflow: 'hidden'
    }
  };
});
export default useStyles;
