import { MessageType } from './connectionList';
import { MessageObj } from '../../../../../types/models/apps/Chat';

const chatList: MessageObj[] = [
  {
    channelId: 2001,
    messageData: [
      {
        id: 1,
        sender: 'sender_id',
        message: 'Hello',
        message_type: MessageType.TEXT,
        time: 'Sat, May 09, 2020 8:00 PM'
      },
      {
        id: 2,
        sender: 2,
        message: 'Hi',
        message_type: MessageType.TEXT,
        time: 'Sat, May 09, 2020 8:02 PM'
      },
      {
        id: 3,
        sender: 'sender_id',
        message: 'how you doing?',
        message_type: MessageType.TEXT,
        time: 'Sat, May 09, 2020 8:03 PM'
      },
      {
        id: 4,
        sender: 2,
        message: 'all well, you say!',
        message_type: MessageType.TEXT,
        time: 'Sat, May 09, 2020 8:05 PM'
      },
      {
        id: 5,
        sender: 'sender_id',
        message: 'all well here too, please check your mail!',
        message_type: MessageType.TEXT,
        time: 'Sat, May 09, 2020 8:13 PM'
      },
      {
        id: 6,
        sender: 2,
        message: 'ok, will do it',
        message_type: MessageType.TEXT,
        time: 'Sat, May 09, 2020 8:30 PM'
      },
      {
        id: 7,
        sender: 2,
        message: 'ok, will do it',
        message_type: MessageType.MEDIA,
        media: {
          url: '/assets/images/illustration.png',
          mime_type: 'image',
          file_name: 'illustration.png',
          file_size: 12332
        },
        time: 'Sat, May 09, 2020 8:30 PM'
      },
      {
        id: 8,
        sender: 'sender_id',
        message: 'ok, will do it',
        message_type: MessageType.MEDIA,
        media: {
          url: '/assets/images/bitcoin1.png',
          mime_type: 'image',
          file_name: 'bitcoin1.jpg',
          file_size: 12332
        },
        time: 'Sat, May 09, 2020 8:30 PM'
      },
      {
        id: 9,
        sender: 'sender_id',
        message: 'ok, will do it',
        message_type: MessageType.DOC,
        media: {
          url: '/assets/images/crema docs.txt',
          mime_type: 'image',
          file_name: 'crema docs.txt',
          file_size: 12332
        },
        time: 'Sat, May 09, 2020 8:30 PM'
      },
      {
        id: 10,
        sender: 2,
        message: 'ok, will do it',
        message_type: MessageType.DOC,
        media: {
          url: '/assets/images/crema docs.txt',
          mime_type: 'image',
          file_name: 'crema docs.txt',
          file_size: 1232232
        },
        time: 'Sat, May 09, 2020 8:30 PM'
      }
    ]
  },
  {
    channelId: 2004,
    messageData: [
      {
        id: 1,
        sender: 'sender_id',
        message: 'Hello',
        message_type: MessageType.TEXT,
        time: 'Fri, May 08, 2020 7:30 PM'
      },
      {
        id: 2,
        sender: 5,
        message: 'Hi',
        message_type: MessageType.TEXT,
        time: 'Fri, May 08, 2020 8:00 PM'
      },
      {
        id: 3,
        sender: 5,
        message: 'how you doing?',
        message_type: MessageType.TEXT,
        time: 'Fri, May 08, 2020 8:03 PM'
      },
      {
        id: 4,
        sender: 'sender_id',
        message: 'all well, you say!',
        message_type: MessageType.TEXT,
        time: 'Fri, May 08, 2020 8:15 PM'
      },
      {
        id: 5,
        sender: 5,
        message: 'all well here too',
        message_type: MessageType.TEXT,
        time: 'Fri, May 08, 2020 8:18 PM'
      },
      {
        id: 6,
        sender: 'sender_id',
        message: 'cheers!',
        message_type: MessageType.TEXT,
        time: 'Fri, May 08, 2020 8:30 PM'
      },
      {
        id: 7,
        sender: 'sender_id',
        message: '!',
        message_type: MessageType.MEDIA,
        media: {
          url: '/assets/images/illustration.png',
          mime_type: 'image',
          file_name: 'illustration.png',
          file_size: 12332
        },
        time: 'Fri, May 08, 2020 8:30 PM'
      }
    ]
  },
  {
    channelId: 2006,
    messageData: [
      {
        id: 1,
        sender: 7,
        message: 'Hello',
        message_type: MessageType.TEXT,
        time: 'Fri, May 08, 2020 5:10 PM'
      },
      {
        id: 2,
        sender: 'sender_id',
        message: 'Hi',
        message_type: MessageType.TEXT,
        time: 'Fri, May 08, 2020 5:13 PM'
      },
      {
        id: 3,
        sender: 7,
        message: 'how you doing?',
        message_type: MessageType.TEXT,
        time: 'Fri, May 08, 2020 5:17 PM'
      },
      {
        id: 4,
        sender: 7,
        message: 'all well, you say!',
        message_type: MessageType.TEXT,
        time: 'Fri, May 08, 2020 5:24 PM'
      },
      {
        id: 5,
        sender: 'sender_id',
        message: 'all well here too',
        message_type: MessageType.TEXT,
        time: 'Fri, May 08, 2020 5:26 PM'
      },
      {
        id: 6,
        sender: 7,
        message: 'what are you upto these days?',
        message_type: MessageType.TEXT,
        time: 'Fri, May 08, 2020 5:30 PM'
      },
      {
        id: 7,
        sender: 7,
        message_type: MessageType.MEDIA,
        media: {
          url: '/assets/images/illustration.png',
          mime_type: 'image',
          file_name: 'illustration.png',
          file_size: 12332
        },
        time: 'Fri, May 08, 2020 5:30 PM'
      }
    ]
  },
  {
    channelId: 2009,
    messageData: [
      {
        id: 1,
        sender: 'sender_id',
        message: 'Hello',
        message_type: MessageType.TEXT,
        time: 'Thru, May 07, 2020 3:30 PM'
      },
      {
        id: 2,
        sender: 10,
        message: 'Hi',
        message_type: MessageType.TEXT,
        time: 'Fri, May 08, 2020 10:30 AM'
      },
      {
        id: 3,
        sender: 'sender_id',
        message: 'how you doing?',
        message_type: MessageType.TEXT,
        time: 'Fri, May 08, 2020 11:32 AM'
      },
      {
        id: 4,
        sender: 10,
        message: 'all well, you say!',
        message_type: MessageType.TEXT,
        time: 'Fri, May 08, 2020 2:30 PM'
      },
      {
        id: 5,
        sender: 'sender_id',
        message: 'Sorry a bit busy, will talk to you later!',
        message_type: MessageType.TEXT,
        time: 'Fri, May 08, 2020 3:24 PM'
      },
      {
        id: 6,
        sender: 10,
        message: 'No worries!',
        message_type: MessageType.TEXT,
        time: 'Fri, May 08, 2020 4:30 PM'
      },
      {
        id: 7,
        sender: 10,
        message_type: MessageType.MEDIA,
        media: {
          url: '/assets/images/illustration.png',
          mime_type: 'image',
          file_name: 'illustration.png',
          file_size: 12332
        },
        time: 'Fri, May 08, 2020 5:30 PM'
      }
    ]
  },
  {
    channelId: 2010,
    messageData: [
      {
        id: 1,
        sender: 'sender_id',
        message: 'We got the assignment',
        message_type: MessageType.TEXT,
        time: 'Thru, May 07, 2020 2:08 PM'
      },
      {
        id: 2,
        sender: 11,
        message: 'congratulations!',
        message_type: MessageType.TEXT,
        time: 'Thru, May 07, 2020 2:20 PM'
      },
      {
        id: 5,
        sender: 'sender_id',
        message: 'We all worked hard, see you in the party!',
        message_type: MessageType.TEXT,
        time: 'Thru, May 07, 2020 2:24 PM'
      },
      {
        id: 6,
        sender: 11,
        message: 'cheers!',
        message_type: MessageType.TEXT,
        time: 'Thru, May 07, 2020 2:30 PM'
      },
      {
        id: 7,
        sender: 'sender_id',
        message_type: MessageType.MEDIA,
        media: {
          url: '/assets/images/illustration.png',
          mime_type: 'image',
          file_name: 'illustration.png',
          file_size: 12332
        },
        time: 'Fri, May 08, 2020 5:30 PM'
      }
    ]
  },
  {
    channelId: 2016,
    messageData: [
      {
        id: 1,
        sender: 17,
        message: 'Did you watch the news?',
        message_type: MessageType.TEXT,
        time: 'Tues, May 05, 2020 8:10 PM'
      },
      {
        id: 4,
        sender: 'sender_id',
        message: 'No, anything special today?',
        message_type: MessageType.TEXT,
        time: 'Tues, May 05, 2020 8:12 PM'
      },
      {
        id: 5,
        sender: 17,
        message: 'Yes, our organization got nominated!',
        message_type: MessageType.TEXT,
        time: 'Tues, May 05, 2020 8:16 PM'
      },
      {
        id: 6,
        sender: 'sender_id',
        message: 'for what?',
        message_type: MessageType.TEXT,
        time: 'Tues, May 05, 2020 8:30 PM'
      },
      {
        id: 7,
        sender: 'sender_id',
        message_type: MessageType.MEDIA,
        media: {
          url: '/assets/images/illustration.png',
          mime_type: 'image',
          file_name: 'illustration.png',
          file_size: 12332
        },
        time: 'Fri, May 08, 2020 5:30 PM'
      }
    ]
  },
  {
    channelId: 2017,
    messageData: [
      {
        id: 1,
        sender: 18,
        message: 'Hello',
        message_type: MessageType.TEXT,
        time: 'Sun, May 02, 2020 6:30 PM'
      },
      {
        id: 6,
        sender: 'sender_id',
        message: 'Hi!',
        message_type: MessageType.TEXT,
        time: 'Sun, May 03, 2020 8:30 PM'
      },
      {
        id: 7,
        sender: 7,
        message_type: MessageType.MEDIA,
        media: {
          url: '/assets/images/illustration.png',
          mime_type: 'image',
          file_name: 'illustration.png',
          file_size: 12332
        },
        time: 'Fri, May 08, 2020 5:30 PM'
      }
    ]
  },
  {
    channelId: 2020,
    messageData: [
      {
        id: 1,
        sender: 'sender_id',
        message: 'Hey Robert',
        message_type: MessageType.TEXT,
        time: 'Fri, May 01, 2020 8:11 PM'
      },
      {
        id: 2,
        sender: 21,
        message: 'Hi',
        message_type: MessageType.TEXT,
        time: 'Fri, May 01, 2020 8:14 PM'
      },
      {
        id: 3,
        sender: 'sender_id',
        message: 'how you doing?',
        message_type: MessageType.TEXT,
        time: 'Fri, May 01, 2020 8:19 PM'
      },
      {
        id: 4,
        sender: 21,
        message: 'all well, you say!',
        message_type: MessageType.TEXT,
        time: 'Fri, May 01, 2020 8:21 PM'
      },
      {
        id: 5,
        sender: 'sender_id',
        message: 'all well here too, where r u these days?',
        message_type: MessageType.TEXT,
        time: 'Fri, May 01, 2020 8:24 PM'
      },
      {
        id: 6,
        sender: 21,
        message: 'in India',
        message_type: MessageType.TEXT,
        time: 'Fri, May 01, 2020 8:30 PM'
      },
      {
        id: 7,
        sender: 21,
        message_type: MessageType.MEDIA,
        media: {
          url: '/assets/images/illustration.png',
          mime_type: 'image',
          file_name: 'illustration.png',
          file_size: 12332
        },
        time: 'Fri, May 08, 2020 5:30 PM'
      }
    ]
  }
];

export default chatList;
