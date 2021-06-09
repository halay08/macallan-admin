import React from 'react';
import ChatItem from './ChatItem';
import AppList from '../../../../../../@crema/core/AppList';
import ListEmptyResult from '../../../../../../@crema/core/AppList/ListEmptyResult';
import { useIntl } from 'react-intl';
import ChatListSkeleton from '../../../../../../@crema/core/Skeleton/ChatListSkeleton';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../../../redux/store';
import { ConnectionObj } from '../../../../../../types/models/apps/Chat';

interface ChatListProps {
  chatListData: ConnectionObj[];
  loading: boolean;
}

const ChatList: React.FC<ChatListProps> = ({ chatListData, loading }) => {
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
      data={chatListData}
      ListEmptyComponent={
        <ListEmptyResult
          content={messages['chatApp.noUserFound']}
          loading={loading}
          placeholder={<ChatListSkeleton />}
        />
      }
      renderRow={item => (
        <ChatItem key={item.id} item={item} selectedUser={selectedUser} />
      )}
    />
  );
};

export default ChatList;
