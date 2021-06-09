import React, { useState } from 'react';
import UserInfo from './UserInfo';
import UserTabs from './UserTabs';
import { useAuthUser } from '../../../../@crema/utility/AppHooks';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { useIntl } from 'react-intl';
import { CremaTheme } from '../../../../types/AppContextPropsType';
import { AppState } from '../../../../redux/store';
import { ConnectionObj } from '../../../../types/models/apps/Chat';

const useStyles = makeStyles((theme: CremaTheme) => ({
  chatContent: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column'
  },
  crAppsSearch: {
    position: 'relative',
    marginTop: 0,
    marginBottom: 0,
    width: '100%',

    '& .MuiOutlinedInput-input': {
      padding: '6px 14px',
      paddingLeft: 0,
      [theme.breakpoints.up('xl')]: {
        padding: '10px 14px'
      }
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.text.secondary
    },
    '& .MuiSvgIcon-root': {
      fontSize: '1.2rem'
    }
  }
}));

const ChatSideBar: React.FC<{}> = () => {
  const [keywords, setKeywords] = useState('');
  const user = useAuthUser();

  const { connectionList }: { connectionList: ConnectionObj[] } = useSelector<
    AppState,
    AppState['chatApp']
  >(({ chatApp }) => chatApp);
  const { loading } = useSelector<AppState, AppState['common']>(
    ({ common }) => common
  );

  const getConnectionList = () => {
    if (keywords !== '') {
      return connectionList.filter((item: ConnectionObj) =>
        item.name.toUpperCase().includes(keywords.toUpperCase())
      );
    }
    return connectionList;
  };

  const getChatList = () => {
    let chatsList = connectionList.filter(
      (item: ConnectionObj) => item.lastMessage
    );
    if (keywords !== '') {
      chatsList = chatsList.filter((item: ConnectionObj) =>
        item.name.toUpperCase().includes(keywords.toUpperCase())
      );
    }
    chatsList.sort((a: ConnectionObj, b: ConnectionObj) => {
      if (a.lastMessage && b.lastMessage) {
        let momentA: any = moment(a.lastMessage!.time).format('X');
        let momentB: any = moment(b.lastMessage!.time).format('X');
        return momentB - momentA;
      }
      return 1;
    });
    return chatsList;
  };

  const connectionListData = getConnectionList();

  const chatListData = getChatList();

  const classes = useStyles();

  const { messages } = useIntl();

  return (
    <Box className={classes.chatContent}>
      <Box px={6} pt={4} pb={{ xs: 2, xl: 5 }}>
        <UserInfo user={user} isOnline />
      </Box>
      <Box px={6} py={{ xs: 2, xl: 5 }} width="100%">
        <TextField
          variant="outlined"
          className={clsx(classes.crAppsSearch, 'crAppsSearch')}
          placeholder={messages['chatApp.search'] as string}
          value={keywords}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          onChange={e => setKeywords(e.target.value)}
        />
      </Box>

      <UserTabs
        connectionListData={connectionListData}
        chatListData={chatListData}
        loading={loading}
      />
    </Box>
  );
};

export default ChatSideBar;
