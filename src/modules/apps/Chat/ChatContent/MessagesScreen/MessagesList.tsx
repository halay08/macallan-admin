import React from 'react';
import Box from '@material-ui/core/Box';
import SenderMessageItem from './SenderMessageItem';
import ReceiverMessageItem from './ReceiverMessageItem';
import AppList from '../../../../../@crema/core/AppList';
import {
  ConnectionObj,
  MessageDataObj,
  MessageObj
} from '../../../../../types/models/apps/Chat';
import { AuthUser } from '../../../../../types/models/AuthUser';

interface MessagesListProps {
  userMessages: MessageObj;
  authUser: AuthUser;
  selectedUser: ConnectionObj;
  onClickEditMessage: (data: MessageDataObj) => void;
  deleteMessage: (id: number) => void;
}

const MessagesList: React.FC<MessagesListProps> = ({
  userMessages,
  authUser,
  selectedUser,
  onClickEditMessage,
  deleteMessage
}) => {
  return (
    <Box px={6} py={6}>
      <AppList
        animation="transition.slideUpIn"
        data={userMessages.messageData}
        renderRow={item => {
          if (item.sender === 'sender_id') {
            return (
              <SenderMessageItem
                authUser={authUser}
                item={item}
                key={item.id}
                onClickEditMessage={onClickEditMessage}
                deleteMessage={deleteMessage}
              />
            );
          } else {
            return (
              <ReceiverMessageItem
                selectedUser={selectedUser}
                item={item}
                key={item.id}
              />
            );
          }
        }}
      />
    </Box>
  );
};

export default MessagesList;
