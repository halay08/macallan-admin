import { blue, green, grey, red } from '@material-ui/core/colors';
import { CRM } from '../../../../types/models/dashboards/CRM';

const crmData: CRM = {
  dealsTableData: [
    {
      id: 1,
      name: 'Apple Inc.',
      progress: 'Pending',
      type: 'MDSA7',
      amount: '$2,465,867',
      created: '23 Jan, 2019',
      logo: '/assets/images/companyLogos/apple.png'
    },
    {
      id: 2,
      name: 'Adidas Inc.',
      progress: 'Approved',
      type: 'MDSA7',
      amount: '$1,465,867',
      created: '12 Jan, 2019',
      logo: '/assets/images/companyLogos/adidas.png'
    },
    {
      id: 3,
      name: 'Microsoft',
      progress: 'Pending',
      type: 'MDSA7',
      amount: '$5,465,867',
      created: '23 Apr, 2019',
      logo: '/assets/images/companyLogos/microsoft.png'
    },
    {
      id: 4,
      name: 'Netflix',
      progress: 'Approved',
      type: 'MDSA7',
      amount: '$3,465,867',
      created: '28 Feb, 2019',
      logo: '/assets/images/companyLogos/netflix.png'
    },
    {
      id: 5,
      name: 'Instagram',
      progress: 'Application',
      type: 'MDSA7',
      amount: '$4,465,867',
      created: '21 Mar, 2019',
      logo: '/assets/images/companyLogos/instagram.png'
    },
    {
      id: 6,
      name: 'Microsoft',
      progress: 'Pending',
      type: 'MDSA7',
      amount: '$5,465,867',
      created: '23 Apr, 2019',
      logo: '/assets/images/companyLogos/microsoft.png'
    }
  ],
  earningGraphData: [
    { name: 'Earning', value: 18756, color: '#E53E3E', colorName: red[600] },
    { name: 'Pending', value: 5599, color: '#38A169', colorName: green[600] },
    { name: 'Refund', value: 4987, color: '#4299E1', colorName: blue[500] },
    { name: '', value: 16000, color: '#CBD5E0', colorName: grey[500] }
  ],
  progressGraphData: [
    { name: 'Goal 1', actual: 4000, progress: 5000 },
    { name: 'Goal 2', actual: 3700, progress: 3700 },
    { name: 'Goal 3', actual: 4000, progress: 6000 },
    { name: 'Goal 4', actual: 4500, progress: 2000 },
    { name: 'Goal 5', actual: 1000, progress: 8500 }
  ],
  quickStatsData: {
    clientsData: {
      count: '43,000'
    },
    invoiceData: {
      count: '$ 10,600'
    },
    totalProjectsData: {
      count: '73,540'
    },
    openProjectsData: {
      count: '33,280'
    }
  },
  revenueData: {
    ytdRevenue: '$216,759',
    clients: 49,
    countries: '09',
    revenueGraphData: [
      { name: '', revenue: 2000 },
      { name: '$2000', revenue: 10000 },
      { name: '', revenue: 8000 },
      { name: '$19000', revenue: 19000 },
      { name: '', revenue: 15000 },
      { name: '$28000', revenue: 28000 },
      { name: '', revenue: 20000 },
      { name: '$55000', revenue: 65000 },
      { name: '', revenue: 45000 }
    ]
  },
  reviewGraphData: [
    { name: 'reviews', value: 0 },
    { name: 'reviews', value: 20 },
    { name: 'reviews', value: 50 },
    { name: 'reviews', value: 31 },
    { name: 'reviews', value: 38 },
    { name: 'reviews', value: 51 },
    { name: 'reviews', value: 36 },
    { name: 'reviews', value: 46 },
    { name: 'reviews', value: 25 },
    { name: 'reviews', value: 41 },
    { name: 'reviews', value: 31 },
    { name: 'reviews', value: 21 },
    { name: 'reviews', value: 35 },
    { name: 'reviews', value: 45 },
    { name: 'reviews', value: 33 },
    { name: 'reviews', value: 51 },
    { name: 'reviews', value: 36 },
    { name: 'reviews', value: 46 },
    { name: 'reviews', value: 25 },
    { name: 'reviews', value: 41 },
    { name: 'reviews', value: 31 },
    { name: 'reviews', value: 21 },
    { name: 'reviews', value: 35 },
    { name: 'reviews', value: 45 },
    { name: 'reviews', value: 33 }
  ],
  socialMediaData: [
    {
      id: 1,
      name: 'facebook',
      revenue: 2390,
      change: 30,
      color: '#4C51BF'
    },
    {
      id: 2,
      name: 'twitter',
      revenue: 1578,
      change: -20,
      color: '#63B3ED'
    },
    {
      id: 3,
      name: 'instagram',
      revenue: 1977,
      change: 30,
      color: '#F56565'
    }
  ],
  statisticsGraph: {
    projectData: [
      { month: 'Jan', number: 110 },
      { month: 'Feb', number: 280 },
      { month: 'Mar', number: 120 },
      { month: 'Apr', number: 290 },
      { month: 'May', number: 140 },
      { month: 'Jun', number: 320 },
      { month: 'Jul', number: 240 },
      { month: 'Aug', number: 400 },
      { month: 'Sep', number: 270 },
      { month: 'Oct', number: 450 },
      { month: 'Nov', number: 280 },
      { month: 'Dec', number: 430 }
    ],
    clientsData: [
      { month: 'Jan', number: 20 },
      { month: 'Feb', number: 170 },
      { month: 'Mar', number: 40 },
      { month: 'Apr', number: 200 },
      { month: 'May', number: 70 },
      { month: 'Jun', number: 270 },
      { month: 'Jul', number: 100 },
      { month: 'Aug', number: 310 },
      { month: 'Sep', number: 130 },
      { month: 'Oct', number: 350 },
      { month: 'Nov', number: 170 },
      { month: 'Dec', number: 400 }
    ],
    incomeData: [
      { month: 'Jan', number: 110 },
      { month: 'Feb', number: 230 },
      { month: 'Mar', number: 100 },
      { month: 'Apr', number: 290 },
      { month: 'May', number: 160 },
      { month: 'Jun', number: 320 },
      { month: 'Jul', number: 220 },
      { month: 'Aug', number: 450 },
      { month: 'Sep', number: 260 },
      { month: 'Oct', number: 490 },
      { month: 'Nov', number: 240 },
      { month: 'Dec', number: 400 }
    ]
  },
  ticketSupportData: [
    {
      id: 1,
      name: 'Angelina Jow.',
      ticketId: '344553',
      created: '23 Jan, 2019',
      contact: '+435-372-2718',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'John Mathew',
      ticketId: '776843',
      created: '12 Jan, 2019',
      contact: '+435-372-2718',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Alfred Marshall',
      ticketId: '523656',
      created: '28 Feb, 2019',
      contact: '+435-372-2718',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      name: 'George Bailey',
      ticketId: '434356',
      created: '21 Mar, 2019',
      contact: '+435-372-2718',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      name: 'Maria Lee',
      ticketId: '234565',
      created: '23 Apr, 2019',
      contact: '+435-372-2718',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 6,
      name: 'John Lee',
      ticketId: '234434',
      created: '29 June, 2019',
      contact: '+435-372-2718',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 7,
      name: 'Mark Wood',
      ticketId: '345463',
      created: '30 June, 2019',
      contact: '+435-323-3543',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 8,
      name: 'Rohit Dean',
      ticketId: '423454',
      created: '05 July, 2019',
      contact: '+353-372-4345',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 9,
      name: 'Maria Lee',
      ticketId: '234565',
      created: '23 Apr, 2019',
      contact: '+435-372-2718',
      image: 'https://via.placeholder.com/150'
    }
  ],
  todayTaskData: [
    {
      id: 1,
      task: 'Send the Billing Agreement',
      date: '24 Mar, 2019',
      isChecked: false
    },
    {
      id: 2,
      task: 'Send over all the documentation',
      date: '24 Mar, 2019',
      isChecked: false
    },
    {
      id: 3,
      task: 'Call Adam to review the documentation',
      date: '24 Mar, 2019',
      isChecked: true
    },
    {
      id: 4,
      task: 'Meeting with Daron to review the intake form',
      date: '24 Mar, 2019',
      isChecked: false
    },
    {
      id: 5,
      task: 'Call Matthew to schedule an interview',
      date: '24 Mar, 2019',
      isChecked: false
    },
    {
      id: 6,
      task: 'checking UiKings CremaThemeProvider and give customer support',
      date: '24 Mar, 2019',
      isChecked: false
    },
    {
      id: 7,
      task: 'go to market to buy baby corn',
      date: '24 Mar, 2019',
      isChecked: false
    },
    {
      id: 8,
      task: 'schedule a meeting with team alpha',
      date: '24 Mar, 2019',
      isChecked: false
    }
  ],
  websiteTrafficData: [
    { month: 'Jan', users: 1000 },
    { month: 'Feb', users: 600 },
    { month: 'Mar', users: 1100 },
    { month: 'Apr', users: 900 },
    { month: 'May', users: 1000 },
    { month: 'Jun', users: 500 },
    { month: 'Jul', users: 900 },
    { month: 'Aug', users: 800 },
    { month: 'Sep', users: 900 },
    { month: 'Oct', users: 750 },
    { month: 'Nov', users: 700 },
    { month: 'Dec', users: 900 }
  ]
};
export default crmData;
