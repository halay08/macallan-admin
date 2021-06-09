import React from 'react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { Box, makeStyles } from '@material-ui/core';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { ConnectionObj } from '../../../../types/models/apps/Mail';

const useStyles = makeStyles(() => ({
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
    cursor: 'pointer'
  },
  avatar: {
    width: 40,
    height: 40
  },
  marginTop0: {
    marginTop: 0
  },
  marginY: {
    marginTop: 0,
    marginBottom: 0
  }
}));

interface ConnectionListItemProps {
  connection: ConnectionObj;
}

const ConnectionListItem: React.FC<ConnectionListItemProps> = ({
  connection
}) => {
  const classes = useStyles();

  return (
    <ListItem
      key={connection.id}
      className={classes.listItem}
      alignItems="flex-start"
    >
      <Box component="span">
        <ListItemAvatar className={classes.marginTop0}>
          <Avatar
            className={classes.avatar}
            alt="Remy Sharp"
            src={connection.image}
          />
        </ListItemAvatar>
      </Box>
      <ListItemText
        className={classes.marginY}
        primary={
          <Box component="p" mb={0} fontWeight={Fonts.MEDIUM}>
            {connection.name}
          </Box>
        }
        secondary={
          <Box component="span" display="block" color="text.primary">
            {connection.status}
          </Box>
        }
      />
    </ListItem>
  );
};

export default ConnectionListItem;
