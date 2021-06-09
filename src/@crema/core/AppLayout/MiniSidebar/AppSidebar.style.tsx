import { makeStyles } from '@material-ui/core';
import { ThemeMode } from '../../../../shared/constants/AppEnums';
import { CremaTheme } from '../../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => {
  return {
    miniSidebar: {
      paddingLeft: 0,
      paddingTop: 0,
      paddingBottom: 0,
      maxHeight: '100vh',
      position: 'relative',
      top: 0,
      left: 0,
      zIndex: 1109,
      width: '19rem',
      transition: 'all 0.5s ease',

      [theme.breakpoints.up('lg')]: {
        width: '4rem',
        position: 'fixed',

        '& .nav-item-text, & .nav-item-icon-arrow': {
          opecity: 0,
          visibility: 'hidden'
        },

        '& .nav-item-header, & .user-info, & .collapse-children': {
          display: 'none'
        }
      },

      [theme.breakpoints.up('xl')]: {
        width: '5rem'
      },

      '& .cr-user-info': {
        paddingLeft: '10px !important',
        paddingRight: '10px !important',
        transition: 'all 0.5s ease',

        [theme.breakpoints.up('xl')]: {
          paddingLeft: '12px !important',
          paddingRight: '12px !important'
        }
      },

      '& .nav-item-icon': {
        transition: 'all 0.5s ease',
        display: 'block',

        [theme.breakpoints.up('lg')]: {
          marginRight: '5px !important',
          marginLeft: '5px !important'
        },

        [theme.breakpoints.up('xl')]: {
          marginRight: '0 !important',
          marginLeft: '0 !important'
        }
      },

      '& .nav-item': {
        width: 48,
        paddingLeft: 11,
        marginLeft: 6,
        borderRadius: '50%',

        [theme.breakpoints.up('xl')]: {
          height: 48,
          paddingLeft: 13,
          marginLeft: 12
        }
      },

      '&:hover': {
        [theme.breakpoints.up('lg')]: {
          width: '21.6rem',

          '& .nav-item-text, & .nav-item-icon-arrow': {
            opecity: 1,
            visibility: 'visible'
          },

          '& .nav-item-header, & .user-info, & .collapse-children': {
            display: 'block'
          },

          '& .nav-item-icon': {
            marginLeft: '0 !important'
          },

          '& .nav-item': {
            width: 'calc(100% - 16px)',
            paddingLeft: 17,
            marginLeft: 0,
            borderRadius: '0 30px 30px 0'
          },
          '& .collapse-children .nav-item': {
            paddingLeft: 67
          },
          '& .collapse-children .collapse-children .nav-item': {
            paddingLeft: 117
          },
          '& .collapse-children .collapse-children .collapse-children .nav-item':
            {
              paddingLeft: 167
            }
        },

        [theme.breakpoints.up('xl')]: {
          '& .nav-item': {
            paddingLeft: 24,
            marginLeft: 0
          },
          '& .collapse-children .nav-item': {
            paddingLeft: 74
          },
          '& .collapse-children .collapse-children .nav-item': {
            paddingLeft: 124
          },
          '& .collapse-children .collapse-children .collapse-children .nav-item':
            {
              paddingLeft: 174
            }
        }
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
