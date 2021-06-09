import React from 'react';
import Box from '@material-ui/core/Box';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { Fonts } from '../../../../../../shared/constants/AppEnums';
import { useDispatch } from 'react-redux';
import { onSelectUser } from '../../../../../../redux/actions';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import clsx from 'clsx';
import { fade } from '@material-ui/core';
import { ConnectionObj } from '../../../../../../types/models/apps/Chat';
import { CremaTheme } from '../../../../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => ({
  userInfoRoot: {
    fontSize: 14,
    paddingLeft: 16,
    width: 'calc(100% - 40px)'
  },
  avatar: {
    width: 40,
    height: 40
  },
  avatarRoot: {
    minWidth: 0,
    position: 'relative'
  },
  userStatus: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 1,
    width: 14,
    height: 14,
    borderRadius: '50%',
    border: `1px solid white`
  },
  listItemRoot: {
    display: 'flex',
    paddingLeft: 24,
    paddingRight: 24,
    cursor: 'pointer',
    '&.active': {
      backgroundColor: fade(theme.palette.primary.main, 0.07)
    }
  },
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
}));

interface ChatItemProps {
  item: ConnectionObj;
  selectedUser: ConnectionObj;
}

const ChatItem: React.FC<ChatItemProps> = ({ item, selectedUser }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <ListItem
      button
      className={clsx(classes.listItemRoot, 'item-hover', {
        active: selectedUser && selectedUser.id === item.id
      })}
      onClick={() => dispatch(onSelectUser(item))}
    >
      <Box>
        <ListItemAvatar className={classes.avatarRoot}>
          <>
            <Avatar className={classes.avatar} src={item.image} />
            <Box
              className={classes.userStatus}
              bgcolor={item.status === 'online' ? green[600] : red[600]}
            />
          </>
        </ListItemAvatar>
      </Box>
      <Box className={classes.userInfoRoot}>
        <Box
          component="span"
          fontWeight={Fonts.MEDIUM}
          display="block"
          mb={0.5}
          fontSize={14}
        >
          {item.name}
        </Box>
        <Box
          className={classes.truncate}
          component="span"
          color="text.secondary"
          display="block"
        >
          {item.lastMessage!.message}
        </Box>
      </Box>
    </ListItem>
  );
};

export default ChatItem;
