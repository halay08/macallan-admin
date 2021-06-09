import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch } from 'react-redux';
import { onSignOutFirebaseUser } from '../../../redux/actions';
import { useAuthUser } from '../../../@crema/utility/AppHooks';
import AppContext from '../../../@crema/utility/AppContext';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import { orange } from '@material-ui/core/colors';
import { Fonts, ThemeMode } from '../../constants/AppEnums';
import Hidden from '@material-ui/core/Hidden';
import AppContextPropsType, {
  CremaTheme
} from '../../../types/AppContextPropsType';
import { AuthUser } from '../../../types/models/AuthUser';

const useStyles = makeStyles((theme: CremaTheme) => {
  return {
    crHeaderUser: {
      backgroundColor: (props: { header: boolean; themeMode: ThemeMode }) =>
        props.header ? 'transparent' : 'rgba(0,0,0,.08)',
      paddingTop: 9,
      paddingBottom: 9,
      minHeight: 56,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.up('sm')]: {
        paddingTop: 10,
        paddingBottom: 10,
        minHeight: 70
      }
    },
    profilePic: {
      fontSize: 24,
      backgroundColor: orange[500]
    },
    userInfo: {
      width: (props: { header: boolean; themeMode: ThemeMode }) =>
        !props.header ? 'calc(100% - 75px)' : '100%'
    },
    userName: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      fontSize: 15,
      fontWeight: Fonts.MEDIUM,
      color: (props: { header: boolean; themeMode: ThemeMode }) =>
        props.themeMode === ThemeMode.DARK || !props.header
          ? 'white'
          : '#313541'
    },
    pointer: {
      cursor: 'pointer'
    }
  };
});

interface HeaderUserProps {
  header?: boolean;
}

const HeaderUser: React.FC<HeaderUserProps> = ({ header = true }) => {
  const { themeMode } = useContext<AppContextPropsType>(AppContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const user: AuthUser | null = useAuthUser();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getUserAvatar = () => {
    if (user && user.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }
    if (user && user.email) {
      return user.email.charAt(0).toUpperCase();
    }
  };
  const getUserAvatarView = () => {
    if (user && user.photoURL) {
      return <Avatar className={classes.profilePic} src={user.photoURL} />;
    } else {
      return <Avatar className={classes.profilePic}>{getUserAvatar()}</Avatar>;
    }
  };

  const classes = useStyles({ themeMode, header });

  return (
    <Box
      px={{ xs: 2, xl: 6 }}
      className={clsx(classes.crHeaderUser, 'cr-user-info')}
    >
      <Box display="flex" alignItems="center">
        <Hidden mdDown> {getUserAvatarView()}</Hidden>
        <Box className={clsx(classes.userInfo, 'user-info')}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Hidden mdDown>
              <Box ml={4} mb={1.5} className={classes.userName}>
                {user && (user.displayName ? user.displayName : user.email)}
                <Box
                  fontSize={13}
                  fontWeight={Fonts.LIGHT}
                  color="text.secondary"
                >
                  System Manager
                </Box>
              </Box>
            </Hidden>
            <Box
              ml={{ md: 3 }}
              className={classes.pointer}
              color={
                themeMode === ThemeMode.DARK || !header ? 'white' : '#313541'
              }
            >
              <Hidden mdDown>
                <ExpandMoreIcon onClick={handleClick} />
              </Hidden>
              <Hidden lgUp>
                <Box component="span" onClick={handleClick}>
                  {getUserAvatarView()}
                </Box>
              </Hidden>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>My account</MenuItem>
                <MenuItem onClick={() => dispatch(onSignOutFirebaseUser())}>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default HeaderUser;
HeaderUser.defaultProps = {
  header: true
};
