import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onGetUserList } from '../../../redux/actions';
import ListItem from './ListItem';
import InfoView from '@crema/core/InfoView';
import Box from '@material-ui/core/Box';
import AppList from '../../../@crema/core/AppList';
import { AppState } from '../../../redux/store';

const Flat = () => {
  const dispatch = useDispatch();

  const { usersList } = useSelector<AppState, AppState['userList']>(
    ({ userList }) => userList
  );

  useEffect(() => {
    dispatch(onGetUserList());
  }, [dispatch]);

  return (
    <Box flex={1}>
      {usersList ? (
        <AppList
          data={usersList}
          renderRow={user => {
            return <ListItem user={user} key={user.id} />;
          }}
        />
      ) : null}
      <InfoView />
    </Box>
  );
};

export default Flat;
