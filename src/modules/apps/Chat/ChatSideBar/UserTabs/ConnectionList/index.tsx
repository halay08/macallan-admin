import React from 'react';
import ConnectionItem from './ConnectionItem';
import AppList from '../../../../../../@crema/core/AppList';
import ListEmptyResult from '../../../../../../@crema/core/AppList/ListEmptyResult';
import ChatListSkeleton from '../../../../../../@crema/core/Skeleton/ChatListSkeleton';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../../../redux/store';
import { ConnectionObj } from '../../../../../../types/models/apps/Chat';

interface ConnectionListProps {
  connectionListData: ConnectionObj[];
  loading: boolean;
}

const ConnectionList: React.FC<ConnectionListProps> = ({
  connectionListData,
  loading
}) => {
  const { messages } = useIntl();
  const { selectedUser } = useSelector<AppState, AppState['chatApp']>(
    ({ chatApp }) => chatApp
  );
  return (
    <AppList
      containerStyle={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      data={connectionListData}
      ListEmptyComponent={
        <ListEmptyResult
          content={messages['chatApp.noUserFound']}
          loading={loading}
          placeholder={<ChatListSkeleton />}
        />
      }
      renderRow={item => (
        <ConnectionItem key={item.id} item={item} selectedUser={selectedUser} />
      )}
    />
  );
};

export default ConnectionList;
