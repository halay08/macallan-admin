import WorkIcon from '@material-ui/icons/Work';
import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { blue, green, grey, red } from '@material-ui/core/colors';
import { MailObj } from '../../../../../types/models/apps/Mail';

const mailList: MailObj[] = [
  {
    id: 411,
    isChecked: false,
    isStarred: false,
    isReplied: true,
    label: {
      id: 214,
      name: 'Paypal',
      alias: 'paypal',
      color: grey[500],
      icon: <WorkIcon />
    },
    sentBy: 'Dribble',
    subject: '[Dribble] Work Enquiry - Website Development',
    isAttachment: false,
    sentAt: '10.30am',
    isRead: true,
    folderValue: 121,
    sentOn: 'Thu, Oct 18, 2019 8:30 PM',
    senderMailId: 'dribbble.help@dribbble.com'
  },
  {
    id: 412,
    isChecked: false,
    isStarred: false,
    isReplied: false,
    label: {
      id: 212,
      name: 'Personal',
      alias: 'personal',
      color: blue[500],
      icon: <PersonIcon />
    },
    sentBy: 'Paytm',
    subject: 'Your Movie Tickets for Sahoo',
    isAttachment: false,
    sentAt: '10.30am',
    sentOn: 'Wed, Oct 17, 2019 8:30 PM',
    isRead: true,
    folderValue: 121,
    senderMailId: 'paytm.help@paytm.com'
  },
  {
    id: 413,
    isChecked: false,
    isStarred: false,
    isReplied: false,
    label: {
      id: 212,
      name: 'Personal',
      alias: 'personal',
      color: blue[500],
      icon: <PersonIcon />
    },
    sentBy: 'Bitcoins Support',
    subject:
      'Bitcoins IP Whitelist mail: Please approve this IP to continue to login',
    isAttachment: true,
    sentAt: '10.30am',
    sentOn: 'Tues, Oct 15, 2019 8:30 PM',
    isRead: true,
    folderValue: 123,
    senderMailId: 'bitcoin.help@bitcoin.com'
  },
  {
    id: 414,
    isChecked: false,
    isStarred: false,
    isReplied: false,
    label: {
      id: 212,
      name: 'Personal',
      alias: 'personal',
      color: blue[500],
      icon: <PersonIcon />
    },
    sentBy: 'Symu Freebies',
    subject: 'Download freebie Hello Tune plugin',
    isAttachment: false,
    sentAt: '10.30am',
    sentOn: 'Tues, Oct 15, 2019 7:30 PM',
    isRead: false,
    folderValue: 121,
    senderMailId: 'help@freebies.com'
  },
  {
    id: 415,
    isChecked: false,
    isStarred: false,
    isReplied: false,
    label: {
      id: 212,
      name: 'Personal',
      alias: 'personal',
      color: blue[500],
      icon: <PersonIcon />
    },
    sentBy: 'Flipkart',
    subject: 'Big Billion Day sale coming, Are you ready?',
    isAttachment: true,
    sentAt: '10.30am',
    sentOn: 'Mon, Oct 14, 2019 8:30 PM',
    isRead: true,
    folderValue: 121,
    senderMailId: 'noReply@flipkart.com'
  },
  {
    id: 416,
    isChecked: false,
    isStarred: false,
    isReplied: false,
    label: {
      id: 211,
      name: 'Crema',
      alias: 'crema',
      color: red[500],
      icon: <WorkIcon />
    },
    sentBy: 'Dribbble',
    subject: '[Dribble] Work Enquiry - Website Development',
    isAttachment: false,
    sentAt: '10.30am',
    sentOn: 'Sun, Oct 13, 2019 8:30 PM',
    isRead: true,
    folderValue: 123,
    senderMailId: 'dribbble.help@dribbble.com'
  },
  {
    id: 417,
    isChecked: false,
    isStarred: false,
    isReplied: false,
    label: {
      id: 213,
      name: 'Work',
      alias: 'work',
      color: green[500],
      icon: <WorkIcon />
    },
    sentBy: 'Paytm',
    subject: 'Your Movie Tickets for Sahoo',
    isAttachment: false,
    sentAt: '10.30am',
    sentOn: 'Sat, Oct 12, 2019 8:30 PM',
    isRead: false,
    folderValue: 121,
    senderMailId: 'offers@paytm.com'
  },
  {
    id: 418,
    isChecked: false,
    isStarred: false,
    isReplied: false,
    label: {
      id: 212,
      name: 'Personal',
      alias: 'personal',
      color: blue[500],
      icon: <PersonIcon />
    },
    sentBy: 'Bitcoins Support',
    subject:
      'Bitcoins IP Whitelist mail: Please approve this IP to continue to login',
    isAttachment: false,
    sentAt: '10.30am',
    sentOn: 'Fri, Oct 11, 2019 8:30 PM',
    isRead: true,
    folderValue: 123,
    senderMailId: 'support@bitcoin.com'
  },
  {
    id: 419,
    isChecked: false,
    isStarred: false,
    isReplied: false,
    label: {
      id: 212,
      name: 'Personal',
      alias: 'personal',
      color: blue[500],
      icon: <PersonIcon />
    },
    sentBy: 'Symu Freebies',
    subject: 'Download freebie Hello Tune plugin',
    isAttachment: true,
    sentAt: '10.30am',
    sentOn: 'Thru, Oct 10, 2019 8:30 PM',
    isRead: false,
    folderValue: 121,
    senderMailId: 'offers@symuFreebies.com'
  },
  {
    id: 420,
    isChecked: false,
    isStarred: false,
    isReplied: false,
    label: {
      id: 213,
      name: 'Work',
      alias: 'work',
      color: green[500],
      icon: <WorkIcon />
    },
    sentBy: 'Flipkart',
    subject: 'Big Billion Day sale coming, Are you ready?',
    isAttachment: false,
    sentAt: '10.30am',
    isRead: true,
    folderValue: 121,
    sentOn: 'Tues, Oct 09, 2019 8:30 PM',
    senderMailId: 'contact@flipkart.com'
  },
  {
    id: 421,
    isChecked: false,
    isStarred: false,
    isReplied: false,
    label: {
      id: 214,
      name: 'Paypal',
      alias: 'paypal',
      color: grey[500],
      icon: <WorkIcon />
    },
    sentBy: 'Dribbble',
    subject: '[Dribble] Work Enquiry - Website Development',
    isAttachment: false,
    sentAt: '10.30am',
    sentOn: 'Mon, Oct 08, 2019 8:30 PM',
    isRead: false,
    folderValue: 127,
    senderMailId: 'dribbble.help@dribbble.com'
  },
  {
    id: 422,
    isChecked: false,
    isStarred: false,
    isReplied: false,
    label: {
      id: 211,
      name: 'Crema',
      alias: 'crema',
      color: red[500],
      icon: <WorkIcon />
    },
    sentBy: 'Paytm',
    subject: 'Your Movie Tickets for Sahoo',
    isAttachment: false,
    sentAt: '10.30am',
    sentOn: 'Mon, Oct 08, 2019 6:30 PM',
    isRead: false,
    folderValue: 123,
    senderMailId: 'sale@paytm.com'
  },
  {
    id: 423,
    isChecked: false,
    isStarred: false,
    isReplied: false,
    label: {
      id: 214,
      name: 'Paypal',
      alias: 'paypal',
      color: grey[500],
      icon: <WorkIcon />
    },
    sentBy: 'Bitcoins Support',
    subject:
      'Bitcoins IP Whitelist mail: Please approve this IP to continue to login',
    isAttachment: false,
    sentAt: '10.30am',
    sentOn: 'Sun, Oct 07, 2019 6:30 PM',
    isRead: false,
    folderValue: 127,
    senderMailId: 'help@bitcoin.com'
  },
  {
    id: 424,
    isChecked: false,
    isStarred: false,
    isReplied: false,
    label: {
      id: 211,
      name: 'Crema',
      alias: 'crema',
      color: red[500],
      icon: <WorkIcon />
    },
    sentBy: 'Symu Freebies',
    subject: 'Download freebie Hello Tune plugin',
    isAttachment: false,
    sentAt: '10.30am',
    sentOn: 'Sat, Oct 06, 2019 6:30 PM',
    isRead: false,
    folderValue: 121,
    senderMailId: 'symu.help@freebies.com'
  },
  {
    id: 425,
    isChecked: false,
    isStarred: false,
    isReplied: false,
    label: {
      id: 212,
      name: 'Personal',
      alias: 'personal',
      color: blue[500],
      icon: <PersonIcon />
    },
    sentBy: 'Flipkart',
    subject: 'Big Billion Day sale coming, Are you ready?',
    isAttachment: true,
    sentAt: '10.30am',
    sentOn: 'Sat, Oct 06, 2019 4:30 PM',
    isRead: true,
    folderValue: 127,
    senderMailId: 'noReply.help@flipkart.com'
  },
  {
    id: 426,
    isChecked: false,
    isStarred: false,
    isReplied: false,
    label: {
      id: 214,
      name: 'Paypal',
      alias: 'paypal',
      color: grey[500],
      icon: <WorkIcon />
    },
    sentBy: 'Amazon',
    subject: 'Offers you can not miss!',
    isAttachment: false,
    sentAt: '10.30am',
    isRead: true,
    folderValue: 121,
    sentOn: 'Fri, Oct 05, 2019 6:30 PM',
    senderMailId: 'offers@amazon.in'
  },
  {
    id: 427,
    isChecked: false,
    isStarred: false,
    isReplied: false,
    label: {
      id: 214,
      name: 'Paypal',
      alias: 'paypal',
      color: grey[500],
      icon: <WorkIcon />
    },
    sentBy: 'SBI YONO',
    subject: 'Use SBI YONO for faster banking',
    isAttachment: false,
    sentAt: '10.30am',
    isRead: true,
    folderValue: 121,
    sentOn: 'Wed, Oct 03, 2019 6:30 PM',
    senderMailId: 'yono@sbi.com'
  },
  {
    id: 435,
    isChecked: false,
    isStarred: false,
    isReplied: false,
    label: {
      id: 213,
      name: 'Work',
      alias: 'work',
      color: green[500],
      icon: <WorkIcon />
    },
    sentBy: 'Naukri.com',
    subject: 'Thank you for being with us!',
    isAttachment: false,
    sentAt: '10.30am',
    isRead: true,
    folderValue: 121,
    sentOn: 'Wed, Oct 03, 2019 6:30 PM',
    senderMailId: 'noreply@nokri.com'
  }
];
export default mailList;
