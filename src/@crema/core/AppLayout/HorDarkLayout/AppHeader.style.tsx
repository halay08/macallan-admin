import { makeStyles } from '@material-ui/core/styles';
import { CremaTheme } from '../../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => ({
  headerMain: {
    minHeight: 56,
    paddingRight: 0,
    paddingLeft: 0,
    borderBottom: 'solid 1px',
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.up('sm')]: {
      minHeight: 70
    },
    '& .crAppsSearch': {
      backgroundColor: theme.palette.primary.contrastText,
      borderRadius: 4,
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent'
      }
    },
    '& .crAppsSearchIcon': {
      color: theme.palette.primary.contrastText
    },
    '& .langBtn': {
      borderLeft: '0 none',
      color: theme.palette.primary.contrastText,
      '&:hover, &:focus': {
        color: theme.palette.secondary.main,
        backgroundColor: 'transparent'
      }
    },
    '& .smsIcon, & .notiIcon': {
      color: theme.palette.primary.contrastText,
      '&:hover, &:focus': {
        color: theme.palette.secondary.main,
        backgroundColor: 'transparent'
      }
    },
    '& .notiBtn': {
      color: theme.palette.grey[800],
      borderLeft: '0 none',
      '&:hover, &:focus': {
        color: theme.palette.text.primary,
        backgroundColor: 'transparent'
      },
      [theme.breakpoints.up('md')]: {
        color: theme.palette.primary.contrastText,
        '&:hover, &:focus': {
          color: theme.palette.secondary.main
        }
      }
    }
  },
  headerMainFlex: {
    display: 'flex',
    alignItems: 'center'
  },
  headerContainer: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1140
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: 1720
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  grow: {
    flexGrow: 1
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 'auto'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  headerNav: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '& .navbarNav': {
      display: 'flex',
      padding: 0,
      marginLeft: -16,
      marginRight: -16,
      [theme.breakpoints.up('lg')]: {
        marginLeft: -20,
        marginRight: -20
      }
    },
    '& .navItem': {
      width: 'auto',
      cursor: 'pointer',
      [theme.breakpoints.up('lg')]: {
        paddingLeft: 20,
        paddingRight: 20
      },
      '&.active': {
        color: '#000',
        '& .navLinkIcon': {
          color: theme.palette.secondary.main
        }
      }
    },
    '& .navLinkIcon': {
      marginRight: 10,
      color: theme.palette.primary.contrastText,
      fontSize: 20
    }
  },
  menuItemRoot: {
    padding: 0
  },
  pointer: {
    cursor: 'pointer'
  },
  menuIconRoot: {
    width: '2.5rem',
    height: '2.5rem'
  },
  logoRoot: {
    height: 30
  }
}));
export default useStyles;
