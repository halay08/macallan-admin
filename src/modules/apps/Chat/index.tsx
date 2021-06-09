import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ChatSideBar from './ChatSideBar';
import ChatContent from './ChatContent';
import { useIntl } from 'react-intl';
import AppsContainer from '../../../@crema/core/AppsContainer';
import { getConnectionList } from '../../../redux/actions';

const Chat: React.FC<{}> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConnectionList());
  }, [dispatch]);

  const { messages } = useIntl();
  return (
    <AppsContainer
      title={messages['chatApp.chat'] as string}
      sidebarContent={<ChatSideBar />}
    >
      <ChatContent />
    </AppsContainer>
  );
};

export default Chat;
