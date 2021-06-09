import { MessageType } from '../../../@crema/services/db/apps/chat/connectionList';

export interface ConnectionObj {
  id: number;
  channelId: number;
  name: string;
  image: string;
  status: string;
  username: string;
  lastMessage?: {
    id: number;
    message: string;
    type: string;
    time: string;
  };
}

export interface MediaObj {
  url: string;
  mime_type: string;
  file_name: string;
  file_size: number;
}

export interface MessageDataObj {
  id?: number;
  sender: number | string;
  message?: string;
  message_type: MessageType;
  time: string;
  edited?: boolean;
  media?: MediaObj;
}

export interface MessageObj {
  channelId: number;
  messageData: MessageDataObj[];
}
