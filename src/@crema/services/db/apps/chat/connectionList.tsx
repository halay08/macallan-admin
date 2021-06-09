import { ConnectionObj } from '../../../../../types/models/apps/Chat';

export enum MessageType {
  MEDIA = 1,
  DOC = 2,
  TEXT = 3
}

const connectionList: ConnectionObj[] = [
  {
    id: 2,
    channelId: 2001,
    name: 'Jubina Chawla',
    image: 'https://via.placeholder.com/150',
    status: 'online',
    username: 'jubina.1',
    lastMessage: {
      id: 6,
      message: 'ok, will do it',
      type: 'received',
      time: 'Sat, May 09, 2020 8:30 PM'
    }
  },
  {
    id: 3,
    channelId: 2002,
    name: 'Mark Johnson',
    username: 'johnson.mark',
    image: 'https://via.placeholder.com/150',
    status: 'offline'
  },
  {
    id: 4,
    channelId: 2003,
    name: 'Shane Lee',
    username: 'lee.shane',
    image: 'https://via.placeholder.com/150',
    status: 'online'
  },
  {
    id: 5,
    channelId: 2004,
    name: 'Chris Crains',
    username: 'chris.crains',
    image: 'https://via.placeholder.com/150',
    status: 'offline',
    lastMessage: {
      id: 6,
      message: 'cheers!',
      type: 'received',
      time: 'Fri, May 08, 2020 8:30 PM'
    }
  },
  {
    id: 6,
    channelId: 2005,
    name: 'Jonathan Trott',
    username: 'trott.johnson',
    image: 'https://via.placeholder.com/150',
    status: 'online'
  },
  {
    id: 7,
    channelId: 2006,
    name: 'Rohita Sharma',
    image: 'https://via.placeholder.com/150',
    status: 'online',
    username: 'sharma.rohita',
    lastMessage: {
      id: 6,
      message: 'what are you upto these days?',
      type: 'received',
      time: 'Fri, May 08, 2020 5:30 PM'
    }
  },
  {
    id: 8,
    channelId: 2007,
    name: 'Mark Lee',
    username: 'lee.1',
    image: 'https://via.placeholder.com/150',
    status: 'offline'
  },
  {
    id: 9,
    channelId: 2008,
    name: 'Saina Williams',
    username: 'williams.saina',
    image: 'https://via.placeholder.com/150',
    status: 'offline'
  },
  {
    id: 10,
    channelId: 2009,
    name: 'Parth Aulins',
    username: 'aulins.parth',
    image: 'https://via.placeholder.com/150',
    status: 'online',
    lastMessage: {
      id: 6,
      message: 'No worries!',
      type: 'received',
      time: 'Fri, May 08, 2020 4:30 PM'
    }
  },
  {
    id: 11,
    channelId: 2010,
    name: 'Rahul Bose',
    username: 'bose.12',
    image: 'https://via.placeholder.com/150',
    status: 'offline',
    lastMessage: {
      id: 6,
      message: 'cheers!',
      type: 'received',
      time: 'Thru, May 07, 2020 2:30 PM'
    }
  },
  {
    id: 12,
    channelId: 2011,
    name: 'Rohan Bopanna',
    username: 'thetennisfreak',
    image: 'https://via.placeholder.com/150',
    status: 'online'
  },
  {
    id: 13,
    channelId: 2012,
    name: 'Nikita Panwar',
    username: 'mrs.panwar',
    image: 'https://via.placeholder.com/150',
    status: 'offline'
  },
  {
    id: 14,
    channelId: 2013,
    name: 'Vijaya Murli',
    username: 'therealplayer',
    image: 'https://via.placeholder.com/150',
    status: 'online'
  },
  {
    id: 15,
    channelId: 2014,
    name: 'David Boon',
    username: 'david.boon',
    image: 'https://via.placeholder.com/150',
    status: 'offline'
  },
  {
    id: 16,
    channelId: 2015,
    name: 'Saurabh Shukla',
    username: 'shukla.ji',
    image: 'https://via.placeholder.com/150',
    status: 'online'
  },
  {
    id: 17,
    channelId: 2016,
    name: 'Nick Taylor',
    username: 'taylor',
    image: 'https://via.placeholder.com/150',
    status: 'online',
    lastMessage: {
      id: 6,
      message: 'for what?',
      type: 'received',
      time: 'Tues, May 05, 2020 8:30 PM'
    }
  },
  {
    id: 18,
    channelId: 2017,
    name: 'Nikita Suman',
    username: 'nikita.rowdy',
    image: 'https://via.placeholder.com/150',
    status: 'offline',
    lastMessage: {
      id: 6,
      message: 'Hi!',
      type: 'sent',
      time: 'Sun, May 03, 2020 8:30 PM'
    }
  },
  {
    id: 19,
    channelId: 2018,
    name: 'Laura Lohan',
    username: 'lohan.lora',
    image: 'https://via.placeholder.com/150',
    status: 'online'
  },
  {
    id: 20,
    channelId: 2019,
    name: 'Jennifer John',
    username: 'johnson.jen',
    image: 'https://via.placeholder.com/150',
    status: 'offline'
  },
  {
    id: 21,
    channelId: 2020,
    name: 'Robert Key',
    username: 'key.robert',
    image: 'https://via.placeholder.com/150',
    status: 'offline',
    lastMessage: {
      id: 6,
      message: 'in India',
      type: 'received',
      time: 'Fri, May 01, 2020 8:30 PM'
    }
  }
];
export default connectionList;
