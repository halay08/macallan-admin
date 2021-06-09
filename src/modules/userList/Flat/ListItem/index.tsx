import React from 'react';
import { makeStyles } from '@material-ui/core';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import UserSocialMediaInfo from './UserSocialMediaInfo';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { CremaTheme } from '../../../../types/AppContextPropsType';
import { UserList } from '../../../../@crema/services/db/userList';

const useStyles = makeStyles((theme: CremaTheme) => ({
  crUserFlatItem: {
    position: 'relative',

    '&:hover': {
      '& $crUserFlat:before': {
        left: '-150px'
      }
    }
  },

  crUserFlat: {
    position: 'relative',
    borderBottom: 'solid 2px',
    borderBottomColor: theme.palette.grey['400'],

    '&:before': {
      [theme.breakpoints.up('sm')]: {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: '-2px',
        zIndex: 1,
        height: '2px',
        width: '162px',
        backgroundColor: theme.palette.grey['400'],
        transition: 'all 0.5s ease'
      }
    }
  },
  crUserImage: {
    borderRadius: theme.overrides.MuiCard.root.borderRadius,
    width: '100%',
    height: 180,
    objectFit: 'cover',
    [theme.breakpoints.up('sm')]: {
      width: 130,
      height: 130
    }
  }
}));

interface ListItemProps {
  user: UserList;
}

const ListItem: React.FC<ListItemProps> = ({ user }) => {
  const classes = useStyles();

  return (
    <Box mb={{ xs: 6, xl: 8 }}>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        className={classes.crUserFlatItem}
      >
        <Box mr={{ sm: 5 }} mb={4}>
          <img src={user.image} alt="user" className={classes.crUserImage} />
        </Box>

        <Box pb={{ xs: 5, xl: 8 }} flex={1} className={classes.crUserFlat}>
          <Box mb={3} fontSize={16} component="h3" color="text.primary">
            <Box
              component="span"
              fontWeight={Fonts.BOLD}
              color="text.primary"
              mr={1}
            >
              {user.name}
            </Box>
            <IntlMessages id="common.in" />
            <Box
              component="span"
              color="primary.main"
              fontWeight={Fonts.BOLD}
              ml={1}
            >
              {user.topic}
            </Box>
          </Box>

          <Box pr={{ lg: 6, xl: 16 }}>
            <Box component="p" color="text.secondary" fontSize={14} mb={4}>
              {user.information}
            </Box>
          </Box>

          <UserSocialMediaInfo user={user} />
        </Box>
      </Box>
    </Box>
  );
};

export default ListItem;
