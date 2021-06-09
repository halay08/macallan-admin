import { makeStyles } from '@material-ui/core';
import { ThemeMode, ThemeStyle } from '../../../../shared/constants/AppEnums';
import { CremaTheme } from '../../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => {
  return {
    container: {
      maxHeight: '100vh',
      paddingLeft: (props: { themeStyle: ThemeStyle; themeMode: ThemeMode }) =>
        props.themeStyle === ThemeStyle.MODERN ? 30 : 0,
      paddingTop: (props: { themeStyle: ThemeStyle; themeMode: ThemeMode }) =>
        props.themeStyle === ThemeStyle.MODERN ? 30 : 0,
      paddingBottom: (props: {
        themeStyle: ThemeStyle;
        themeMode: ThemeMode;
      }) => (props.themeStyle === ThemeStyle.MODERN ? 30 : 0),
      width: (props: { themeStyle: ThemeStyle; themeMode: ThemeMode }) =>
        props.themeStyle === ThemeStyle.MODERN ? '19rem' : '19rem',
      [theme.breakpoints.up('xl')]: {
        width: (props: { themeStyle: ThemeStyle; themeMode: ThemeMode }) =>
          props.themeStyle === ThemeStyle.MODERN ? '22.8rem' : '21.6rem'
      }
    },
    drawerContainer: {
      maxHeight: '100vh',
      paddingLeft: 0,
      paddingTop: 0,
      paddingBottom: 0,
      width: '19rem',
      [theme.breakpoints.up('xl')]: {
        width: '21.6rem'
      }
    },
    sidebarBg: {
      overflow: 'hidden',
      backgroundColor: (props: {
        themeStyle: ThemeStyle;
        themeMode: ThemeMode;
      }) =>
        props.themeMode === ThemeMode.SEMI_DARK
          ? theme.palette.sidebar.bgColor
          : props.themeMode === ThemeMode.LIGHT
          ? 'white'
          : '#313541'
    },
    scrollAppSidebar: {
      paddingTop: 8,
      paddingBottom: 8,
      height: (props: { themeStyle: ThemeStyle; themeMode: ThemeMode }) =>
        props.themeStyle === ThemeStyle.MODERN
          ? 'calc(100vh - 166px) !important'
          : 'calc(100vh - 116px) !important',
      [theme.breakpoints.up('xl')]: {
        height: (props: { themeStyle: ThemeStyle; themeMode: ThemeMode }) =>
          props.themeStyle === ThemeStyle.MODERN
            ? 'calc(100vh - 190px) !important'
            : 'calc(100vh - 130px) !important'
      }
    },
    drawerScrollAppSidebar: {
      paddingTop: 8,
      paddingBottom: 20,
      height: 'calc(100vh - 58px) !important'
    },

    sidebarModern: {
      height: '100%',
      width: '100%',
      color: 'white',
      overflow: 'hidden',
      borderRadius: 30
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
