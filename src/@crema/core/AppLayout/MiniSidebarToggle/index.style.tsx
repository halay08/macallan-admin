import { makeStyles } from '@material-ui/core';
import { ThemeStyle } from '../../../../shared/constants/AppEnums';
import { CremaTheme } from '../../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => {
  return {
    appMain: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      backgroundColor: theme.palette.background.default,
      paddingTop: 56,
      [theme.breakpoints.up('sm')]: {
        paddingTop: 70
      },
      '&.appMainFixedFooter': {
        paddingBottom: 48,
        [theme.breakpoints.up('xl')]: {
          paddingBottom: 58
        },
        '& .scrollAppSidebar': {
          height: (props: { themeStyle: ThemeStyle; footer: boolean }) =>
            props.themeStyle === ThemeStyle.MODERN
              ? 'calc(100vh - 260px) !important'
              : 'calc(100vh - 198px) !important',
          [theme.breakpoints.up('xl')]: {
            height: (props: { themeStyle: ThemeStyle; footer: boolean }) =>
              props.themeStyle === ThemeStyle.MODERN
                ? 'calc(100vh - 300px) !important'
                : 'calc(100vh - 236px) !important'
          }
        },
        '& $mainContainer': {
          paddingBottom: 1
        }
      }
    },
    mainContent: {
      flex: 1,
      display: 'flex',
      transition: 'all 0.5s ease',
      [theme.breakpoints.up('lg')]: {
        marginLeft: '19rem',
        width: 'calc(100vw - 20rem)'
      },
      [theme.breakpoints.up('xl')]: {
        marginLeft: '21rem',
        width: 'calc(100vw - 21rem)'
      }
    },
    mainContainer: {
      width: '100%',
      paddingBottom: (props: { themeStyle: ThemeStyle; footer: boolean }) =>
        props.footer ? 0 : 10,
      '& > .scrollbar-container': {
        padding: '20px 20px 0',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
          padding: '30px 32px 0'
        }
      }
    },
    mainContainerFull: {
      width: '100vw',
      paddingBottom: (props: { themeStyle: ThemeStyle; footer: boolean }) =>
        props.footer ? 0 : 10,
      '& > .scrollbar-container': {
        padding: '20px 20px 0',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
          padding: '30px 32px 0'
        }
      }
    },
    boxedLayout: {
      [theme.breakpoints.up('lg')]: {
        maxWidth: 1260,
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '0px 0px 4px 2px rgba(0,0,0,0.12)',
        '& .app-sidebar': {
          position: 'absolute'
        },
        '& .fixed-footer': {
          position: 'sticky',
          width: '100%'
        },
        '& $mainContent': {
          width: 'calc(100% - 19rem)',
          flex: 'auto'
        },
        '& $mainContainer': {
          width: '100%'
        },
        '& .app-bar': {
          position: 'absolute',
          boxShadow: '0px 0px 4px 2px rgba(0,0,0,0.12)',
          width: 'calc(100% - 19rem)'
        },
        '& .mini-sidebar-collapsed': {
          '& + .main-content .app-bar': {
            width: 'calc(100% - 4rem)'
          }
        },
        '& .grid-btn': {
          fontSize: 11
        }
      },
      [theme.breakpoints.up('xl')]: {
        maxWidth: 1680,
        '& $mainContent': {
          width: 'calc(100% - 21.6rem)'
        },
        '& .app-bar': {
          width: 'calc(100% - 21rem)'
        },
        '& .mini-sidebar-collapsed': {
          '& + .main-content .app-bar': {
            width: 'calc(100% - 5rem)'
          }
        }
      }
    }
  };
});
export default useStyles;
