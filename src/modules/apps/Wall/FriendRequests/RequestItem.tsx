import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { timeFromNow } from '../../../../@crema/utility/Utils';
import { makeStyles } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import { CremaTheme } from '../../../../types/AppContextPropsType';
import { FriendRequestObj } from '../../../../types/models/apps/Wall';

const useStyles = makeStyles((theme: CremaTheme) => ({
  avatarRoot: {
    [theme.breakpoints.up('lg')]: {
      width: 50,
      height: 50
    }
  }
}));

interface RequestItemProps {
  request: FriendRequestObj;
}

const RequestItem: React.FC<RequestItemProps> = ({ request }) => {
  const classes = useStyles();
  return (
    <Box className="item-hover" px={5} py={2}>
      <Box display="flex" alignItems="center" flexWrap="wrap">
        <Box display="flex" alignItems="center">
          <Avatar className={classes.avatarRoot} src={request.profilePic} />
          <Box ml={4}>
            <Box component="h4" mb={0.5}>
              {request.name}
            </Box>
            <Box component="p" color="text.secondary">
              {timeFromNow(request.date)}
            </Box>
          </Box>
        </Box>

        <Box ml="auto" display="flex" alignItems="center" flexWrap="wrap">
          <Box mx={1} mb={1}>
            <IconButton size="small">
              <CheckCircleOutlineIcon />
            </IconButton>
          </Box>
          <Box mx={1} mb={1}>
            <IconButton size="small">
              <HighlightOffIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RequestItem;
