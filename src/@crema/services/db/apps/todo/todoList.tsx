import { blue, green, grey, red } from '@material-ui/core/colors';
import { TodoObj } from '../../../../../types/models/apps/Todo';

const todoList: TodoObj[] = [
  {
    id: 783232,
    title: 'Call Adam to check the documentation',
    isStarred: true,
    label: [
      {
        id: 211,
        name: 'Html',
        alias: 'html',
        label: 'Html',
        value: 'Html',
        color: red[500]
      },
      {
        id: 212,
        name: 'CSS',
        alias: 'css',
        label: 'CSS',
        value: 'CSS',
        color: blue[500]
      }
    ],
    priority: { id: 4545554, name: 'High', type: 1, color: red[500] },
    isAttachment: false,
    sentAt: '10.30am',
    folderValue: 121,
    schedule: 'Oct 18, 2019 8:30 PM',
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 501,
      name: 'Johnson',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'John David',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Oct 12, 2019',
    status: 1,
    comments: [
      {
        comment:
          'The Task is very important, try to complete it so that we have time for testing.',
        name: 'K L Sharma',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 20, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 454553,
    title: 'Check the documents of audit',
    priority: { id: 9384234, name: 'Medium', type: 2, color: blue[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 213,
        name: 'JQuery',
        alias: 'jquery',
        label: 'JQuery',
        value: 'JQuery',
        color: green[500]
      },
      {
        id: 211,
        name: 'Html',
        alias: 'html',
        label: 'Html',
        value: 'Html',
        color: red[500]
      }
    ],
    isAttachment: false,
    sentAt: '10.30am',
    schedule: 'Oct 17, 2019 8:30 PM',
    folderValue: 123,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 502,
      name: 'Joe Root',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'John Guetta',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Oct 10, 2019',
    status: 2,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'M S Dhoni',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 25, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 345655,
    title: 'Arrange birthday party for the staff',
    priority: { id: 4354454, name: 'Low', type: 3, color: green[500] },
    isStarred: false,
    isReplied: false,
    label: [
      {
        id: 214,
        name: 'Node.js',
        alias: 'node',
        label: 'Node.js',
        value: 'Node.js',
        color: grey[500]
      }
    ],
    isAttachment: true,
    sentAt: '10.30am',
    schedule: 'Oct 16, 2019 8:30 PM',
    isRead: true,
    folderValue: 124,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 503,
      name: 'Monty Panesar',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Nathan David',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Oct 09, 2019',
    status: 3,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Nikit Sharma',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 21, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 765645,
    title: 'Go to marketing section for diwali gifts',
    priority: { id: 9384234, name: 'Medium', type: 2, color: blue[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 211,
        name: 'Html',
        alias: 'html',
        label: 'Html',
        value: 'Html',
        color: red[500]
      },
      {
        id: 213,
        name: 'JQuery',
        alias: 'jquery',
        label: 'JQuery',
        value: 'JQuery',
        color: green[500]
      }
    ],
    isAttachment: false,
    sentAt: '10.30am',
    schedule: 'Oct 15, 2019 8:30 PM',
    folderValue: 211,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 504,
      name: 'Darren Gough',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Nathon Lyon',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Oct 12, 2019',
    status: 1,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Ravindra Jadeja',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 22, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 765635,
    title: 'Ask secretary for meeting minutes',
    priority: { id: 4545554, name: 'High', type: 1, color: red[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 213,
        name: 'JQuery',
        alias: 'jquery',
        label: 'JQuery',
        value: 'JQuery',
        color: green[500]
      },
      {
        id: 212,
        name: 'CSS',
        alias: 'css',
        label: 'CSS',
        value: 'CSS',
        color: blue[500]
      }
    ],
    isAttachment: true,
    sentAt: '10.30am',
    schedule: 'Oct 14, 2019 8:30 PM',
    folderValue: 121,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 505,
      name: 'Andy Caddick',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Ross Taylor',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Oct 09, 2019',
    status: 2,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Krishna Kumar',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 19, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 345536,
    title: 'To arrange a meeting with React team',
    priority: { id: 4354454, name: 'Low', type: 3, color: green[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 212,
        name: 'CSS',
        alias: 'css',
        label: 'CSS',
        value: 'CSS',
        color: blue[500]
      },
      {
        id: 214,
        name: 'Node.js',
        alias: 'node',
        label: 'Node.js',
        value: 'Node.js',
        color: grey[500]
      }
    ],
    isAttachment: false,
    sentAt: '10.30am',
    schedule: 'Oct 13, 2019 8:30 PM',
    folderValue: 126,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 506,
      name: 'Marcus Vaughan',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Mark Williamson',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Oct 08, 2019',
    status: 3,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Rehan Kant',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 18, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 785655,
    title: 'Arrange a trip for best performing staff members',
    priority: { id: 9384234, name: 'Medium', type: 2, color: blue[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 211,
        name: 'Html',
        alias: 'html',
        label: 'Html',
        value: 'Html',
        color: red[500]
      },
      {
        id: 213,
        name: 'JQuery',
        alias: 'jquery',
        label: 'JQuery',
        value: 'JQuery',
        color: green[500]
      }
    ],
    isAttachment: false,
    sentAt: '10.30am',
    schedule: 'Oct 12, 2019 8:30 PM',
    folderValue: 124,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 501,
      name: 'Johnson',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Rober Twose',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Oct 07, 2019',
    status: 1,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Rahul Rajan',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 21, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 234554,
    title: 'Schedule an interview for hiring React developer',
    priority: { id: 4354454, name: 'Low', type: 3, color: green[500] },
    isStarred: false,
    isReplied: false,
    label: [
      {
        id: 214,
        name: 'Node.js',
        alias: 'node',
        label: 'Node.js',
        value: 'Node.js',
        color: grey[500]
      }
    ],
    isAttachment: false,
    sentAt: '10.30am',
    schedule: 'Oct 11, 2019 8:30 PM',
    folderValue: 125,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 502,
      name: 'Joe Root',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Jessy Ryder',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Oct 07, 2019',
    status: 2,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Shikhar Dhawan',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 22, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 907645,
    title: 'Check the documents of audit',
    priority: { id: 4545554, name: 'High', type: 1, color: red[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 211,
        name: 'Html',
        alias: 'html',
        label: 'Html',
        value: 'Html',
        color: red[500]
      },
      {
        id: 214,
        name: 'Node.js',
        alias: 'node',
        label: 'Node.js',
        value: 'Node.js',
        color: grey[500]
      }
    ],
    isAttachment: true,
    sentAt: '10.30am',
    schedule: 'Oct 10, 2019 8:30 PM',
    folderValue: 121,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 503,
      name: 'Monty Panesar',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Shane Bond',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Oct 06, 2019',
    status: 3,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'shreyas Iyer',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 22, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 678434,
    title: 'Download freebie Hello Tune plugin',
    priority: { id: 4545554, name: 'High', type: 1, color: red[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 212,
        name: 'CSS',
        alias: 'css',
        label: 'CSS',
        value: 'CSS',
        color: blue[500]
      },
      {
        id: 214,
        name: 'Node.js',
        alias: 'node',
        label: 'Node.js',
        value: 'Node.js',
        color: grey[500]
      }
    ],
    isAttachment: false,
    sentAt: '10.30am',
    folderValue: 125,
    schedule: 'Oct 09, 2019 8:30 PM',
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 504,
      name: 'Darren Gough',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Martin Fergusen',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Oct 01, 2019',
    status: 1,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Bhuvneshwar Kumar',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 18, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 789754,
    title: 'Arrange a trip for best performing staff members',
    priority: { id: 9384234, name: 'Medium', type: 2, color: blue[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 213,
        name: 'JQuery',
        alias: 'jquery',
        label: 'JQuery',
        value: 'JQuery',
        color: green[500]
      }
    ],
    isAttachment: false,
    sentAt: '10.30am',
    schedule: 'Oct 08, 2019 8:30 PM',
    folderValue: 124,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 505,
      name: 'Andy Caddick',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Mark Johnson',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Oct 05, 2019',
    status: 2,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Narendra Kumar',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 21, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 345656,
    title: 'Check the documents of audit',
    priority: { id: 4354454, name: 'Low', type: 3, color: green[500] },
    isStarred: false,
    isReplied: false,
    label: [],
    isAttachment: false,
    sentAt: '10.30am',
    schedule: 'Oct 07, 2019 8:30 PM',
    folderValue: 123,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 506,
      name: 'Marcus Vaughan',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Nathan David',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 12, 2019',
    status: 3,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Baichang Bhutia',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 24, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 856787,
    title: 'Arrange birthday party for the staff',
    priority: { id: 9384234, name: 'Medium', type: 2, color: blue[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 211,
        name: 'Html',
        alias: 'html',
        label: 'Html',
        value: 'Html',
        color: red[500]
      },
      {
        id: 212,
        name: 'CSS',
        alias: 'css',
        label: 'CSS',
        value: 'CSS',
        color: blue[500]
      }
    ],
    isAttachment: false,
    sentAt: '10.30am',
    schedule: 'Oct 06, 2019 8:30 PM',
    folderValue: 121,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 501,
      name: 'Johnson',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Michael Holding',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 12, 2019',
    status: 1,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Rameshwar Sharma',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 17, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 234546,
    title: 'Arrange a trip for best performing staff members',
    priority: { id: 4354454, name: 'Low', type: 3, color: green[500] },
    isStarred: true,
    isReplied: false,
    label: [],
    isAttachment: false,
    sentAt: '10.30am',
    schedule: 'Oct 05, 2019 8:30 PM',
    folderValue: 121,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 502,
      name: 'Joe Root',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Shane Warne',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 12, 2019',
    status: 2,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Tushar Sharma',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 24, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 455643,
    title: 'Check the documents of audit',
    priority: { id: 4545554, name: 'High', type: 1, color: red[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 213,
        name: 'JQuery',
        alias: 'jquery',
        label: 'JQuery',
        value: 'JQuery',
        color: green[500]
      }
    ],
    isAttachment: true,
    sentAt: '10.30am',
    schedule: 'Oct 04, 2019 8:30 PM',
    folderValue: 121,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 503,
      name: 'Monty Panesar',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Billy Bowden',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 12, 2019',
    status: 3,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Rohit Sharma',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 25, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 856121,
    title: 'Arrange birthday party for the staff',
    priority: { id: 9384234, name: 'Medium', type: 2, color: blue[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 211,
        name: 'Html',
        alias: 'html',
        label: 'Html',
        value: 'Html',
        color: red[500]
      },
      {
        id: 212,
        name: 'CSS',
        alias: 'css',
        label: 'CSS',
        value: 'CSS',
        color: blue[500]
      }
    ],
    isAttachment: false,
    sentAt: '10.30am',
    schedule: 'Oct 03, 2019 8:30 PM',
    folderValue: 121,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 501,
      name: 'Johnson',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Michael Holding',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 12, 2019',
    status: 1,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Rameshwar Sharma',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 17, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 233346,
    title: 'Arrange a trip for best performing staff members',
    priority: { id: 4354454, name: 'Low', type: 3, color: green[500] },
    isStarred: true,
    isReplied: false,
    label: [],
    isAttachment: false,
    sentAt: '10.30am',
    schedule: 'Oct 02, 2019 8:30 PM',
    folderValue: 121,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 502,
      name: 'Joe Root',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Shane Warne',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 12, 2019',
    status: 2,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Tushar Sharma',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 24, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 456753,
    title: 'Check the documents of audit',
    priority: { id: 4545554, name: 'High', type: 1, color: red[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 213,
        name: 'JQuery',
        alias: 'jquery',
        label: 'JQuery',
        value: 'JQuery',
        color: green[500]
      }
    ],
    isAttachment: true,
    sentAt: '10.30am',
    schedule: 'Oct 02, 2019 5:30 PM',
    folderValue: 121,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 503,
      name: 'Monty Panesar',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Billy Bowden',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 12, 2019',
    status: 3,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Rohit Sharma',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 25, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 32432435,
    title: 'Call Adam to check the documentation',
    isStarred: true,
    label: [
      {
        id: 211,
        name: 'Html',
        alias: 'html',
        label: 'Html',
        value: 'Html',
        color: red[500]
      },
      {
        id: 212,
        name: 'CSS',
        alias: 'css',
        label: 'CSS',
        value: 'CSS',
        color: blue[500]
      }
    ],
    priority: { id: 4545554, name: 'High', type: 1, color: red[500] },
    isAttachment: false,
    sentAt: '10.30am',
    folderValue: 121,
    schedule: 'Oct 01, 2019 8:30 PM',
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 501,
      name: 'Johnson',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'John David',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 12, 2019',
    status: 1,
    comments: [
      {
        comment:
          'The Task is very important, try to complete it so that we have time for testing.',
        name: 'K L Sharma',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 20, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 5467454354,
    title: 'Check the documents of audit',
    priority: { id: 9384234, name: 'Medium', type: 2, color: blue[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 213,
        name: 'JQuery',
        alias: 'jquery',
        label: 'JQuery',
        value: 'JQuery',
        color: green[500]
      },
      {
        id: 211,
        name: 'Html',
        alias: 'html',
        label: 'Html',
        value: 'Html',
        color: red[500]
      }
    ],
    isAttachment: false,
    sentAt: '10.30am',
    schedule: 'Oct 01, 2019 7:30 PM',
    folderValue: 123,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 502,
      name: 'Joe Root',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'John Guetta',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 05, 2019',
    status: 2,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'M S Dhoni',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 25, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 5432356454,
    title: 'Arrange birthday party for the staff',
    priority: { id: 4354454, name: 'Low', type: 3, color: green[500] },
    isStarred: false,
    isReplied: false,
    label: [
      {
        id: 214,
        name: 'Node.js',
        alias: 'node',
        label: 'Node.js',
        value: 'Node.js',
        color: grey[500]
      }
    ],
    isAttachment: true,
    sentAt: '10.30am',
    schedule: 'Oct 01, 2019 4:30 PM',
    isRead: true,
    folderValue: 124,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 503,
      name: 'Monty Panesar',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Nathan David',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 05, 2019',
    status: 3,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Nikit Sharma',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 21, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 4324543234,
    title: 'Go to marketing section for diwali gifts',
    priority: { id: 9384234, name: 'Medium', type: 2, color: blue[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 211,
        name: 'Html',
        alias: 'html',
        label: 'Html',
        value: 'Html',
        color: red[500]
      },
      {
        id: 213,
        name: 'JQuery',
        alias: 'jquery',
        label: 'JQuery',
        value: 'JQuery',
        color: green[500]
      }
    ],
    isAttachment: false,
    sentAt: '10.30am',
    schedule: 'Sept 28, 2019 8:30 PM',
    folderValue: 211,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 504,
      name: 'Darren Gough',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Nathon Lyon',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 05, 2019',
    status: 1,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Ravindra Jadeja',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 22, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 654343443,
    title: 'Ask secretary for meeting minutes',
    priority: { id: 4545554, name: 'High', type: 1, color: red[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 213,
        name: 'JQuery',
        alias: 'jquery',
        label: 'JQuery',
        value: 'JQuery',
        color: green[500]
      },
      {
        id: 212,
        name: 'CSS',
        alias: 'css',
        label: 'CSS',
        value: 'CSS',
        color: blue[500]
      }
    ],
    isAttachment: true,
    sentAt: '10.30am',
    schedule: 'Sept 21, 2019 7:30 PM',
    folderValue: 121,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 505,
      name: 'Andy Caddick',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Ross Taylor',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 05, 2019',
    status: 2,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Krishna Kumar',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 19, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 86764543,
    title: 'To arrange a meeting with React team',
    priority: { id: 4354454, name: 'Low', type: 3, color: green[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 212,
        name: 'CSS',
        alias: 'css',
        label: 'CSS',
        value: 'CSS',
        color: blue[500]
      },
      {
        id: 214,
        name: 'Node.js',
        alias: 'node',
        label: 'Node.js',
        value: 'Node.js',
        color: grey[500]
      }
    ],
    isAttachment: false,
    sentAt: '10.30am',
    schedule: 'Sept 21, 2019 7:30 PM',
    folderValue: 126,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 506,
      name: 'Marcus Vaughan',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Mark Williamson',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 05, 2019',
    status: 3,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Rehan Kant',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 18, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 2344344334,
    title: 'Arrange a trip for best performing staff members',
    priority: { id: 9384234, name: 'Medium', type: 2, color: blue[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 211,
        name: 'Html',
        alias: 'html',
        label: 'Html',
        value: 'Html',
        color: red[500]
      },
      {
        id: 213,
        name: 'JQuery',
        alias: 'jquery',
        label: 'JQuery',
        value: 'JQuery',
        color: green[500]
      }
    ],
    isAttachment: false,
    sentAt: '10.30am',
    schedule: 'Sept 20, 2019 7:30 PM',
    folderValue: 124,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 501,
      name: 'Johnson',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Rober Twose',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 05, 2019',
    status: 1,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Rahul Rajan',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 21, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 767643433,
    title: 'Schedule an interview for hiring React developer',
    priority: { id: 4354454, name: 'Low', type: 3, color: green[500] },
    isStarred: false,
    isReplied: false,
    label: [
      {
        id: 214,
        name: 'Node.js',
        alias: 'node',
        label: 'Node.js',
        value: 'Node.js',
        color: grey[500]
      }
    ],
    isAttachment: false,
    sentAt: '10.30am',
    schedule: 'Sept 19, 2019 7:30 PM',
    folderValue: 125,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 502,
      name: 'Joe Root',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Jessy Ryder',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 05, 2019',
    status: 2,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Shikhar Dhawan',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 22, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 432445554,
    title: 'Check the documents of audit',
    priority: { id: 4545554, name: 'High', type: 1, color: red[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 211,
        name: 'Html',
        alias: 'html',
        label: 'Html',
        value: 'Html',
        color: red[500]
      },
      {
        id: 214,
        name: 'Node.js',
        alias: 'node',
        label: 'Node.js',
        value: 'Node.js',
        color: grey[500]
      }
    ],
    isAttachment: true,
    sentAt: '10.30am',
    schedule: 'Sept 11, 2019 7:30 PM',
    folderValue: 121,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 503,
      name: 'Monty Panesar',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Shane Bond',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 05, 2019',
    status: 3,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'shreyas Iyer',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 22, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 2344354334,
    title: 'Download freebie Hello Tune plugin',
    priority: { id: 4545554, name: 'High', type: 1, color: red[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 212,
        name: 'CSS',
        alias: 'css',
        label: 'CSS',
        value: 'CSS',
        color: blue[500]
      },
      {
        id: 214,
        name: 'Node.js',
        alias: 'node',
        label: 'Node.js',
        value: 'Node.js',
        color: grey[500]
      }
    ],
    isAttachment: false,
    sentAt: '10.30am',
    folderValue: 125,
    schedule: 'Sept 10, 2019 7:30 PM',
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 504,
      name: 'Darren Gough',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Martin Fergusen',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 05, 2019',
    status: 1,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Bhuvneshwar Kumar',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 18, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    id: 435544534,
    title: 'Arrange a trip for best performing staff members',
    priority: { id: 9384234, name: 'Medium', type: 2, color: blue[500] },
    isStarred: true,
    isReplied: false,
    label: [
      {
        id: 213,
        name: 'JQuery',
        alias: 'jquery',
        label: 'JQuery',
        value: 'JQuery',
        color: green[500]
      }
    ],
    isAttachment: false,
    sentAt: '10.30am',
    schedule: 'Sept 09, 2019 7:30 PM',
    folderValue: 124,
    image: '/assets/images/dummy2.jpg',
    assignedTo: {
      id: 505,
      name: 'Andy Caddick',
      image: 'https://via.placeholder.com/150'
    },
    createdBy: {
      name: 'Mark Johnson',
      image: 'https://via.placeholder.com/150'
    },
    createdOn: 'Sept 05, 2019',
    status: 2,
    comments: [
      {
        comment:
          'Call John at 8:00 PM to cross check the things and get a feedback too.',
        name: 'Narendra Kumar',
        image: 'https://via.placeholder.com/150',
        date: 'Dec 21, 2019'
      }
    ],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  }
];
export default todoList;
