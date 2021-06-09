import { Analytics } from '../../../../types/models/dashboards/Analytics';

const analyticsData: Analytics = {
  welcomeCard: [
    {
      id: 1,
      type: 'Emails',
      counts: 42
    },
    {
      id: 2,
      type: 'Messages',
      counts: 144
    },
    {
      id: 1,
      type: 'Invoices',
      counts: 12
    }
  ],
  revenueCards: [
    {
      id: 1,
      type: 'REVENUE',
      value: '$3,732',
      growth: 2.5,
      icon: '/assets/images/dashboard/icon_revenue.png',
      strokeColor: '#f44d50',
      graphData: [
        { month: 'Aug', number: 310 },
        { month: 'Sep', number: 130 },
        { month: 'Oct', number: 350 },
        { month: 'Nov', number: 170 },
        { month: 'Dec', number: 400 }
      ]
    },
    {
      id: 2,
      type: 'TODAY VISITS',
      value: '882',
      growth: 3.7,
      icon: '/assets/images/dashboard/icon_visits.png',
      strokeColor: '#f49820',
      graphData: [
        { month: 'Jan', number: 20 },
        { month: 'Feb', number: 170 },
        { month: 'Mar', number: 40 },
        { month: 'Apr', number: 200 },
        { month: 'May', number: 70 }
      ]
    }
  ],
  salesState: [
    {
      id: 1,

      amount: '3510',
      type: 'Author Sales',
      icon: '/assets/images/dashboard/auther_sales.png'
    },
    {
      id: 2,
      amount: '390',
      type: 'Commissions',
      icon: '/assets/images/dashboard/commission_sale.png'
    },
    {
      id: 3,
      amount: '3.2M',
      type: 'All Time Revenue',
      icon: '/assets/images/dashboard/all_time_sales.png'
    },
    {
      id: 4,
      amount: '3.5M',
      type: 'All Time Sales',
      icon: '/assets/images/dashboard/commission_sale.png'
    }
  ],
  salesChartData: [
    { title: 'Author Sales', value: 100, color: '#FAB817' },
    { title: 'Commissions', value: 60, color: '#F04F47' },
    { title: 'All Time Revenue', value: 30, color: '#FFDE00' },
    { title: 'All Time Sales', value: 20, color: '#5ABE20' }
  ],

  visitorsPageView: [
    { name: '15 May', Page: 150, Visitor: 270 },
    { name: '16 May', Page: 250, Visitor: 200 },
    { name: '17 May', Page: 180, Visitor: 280 },
    { name: '18 May', Page: 278, Visitor: 250 },
    { name: '19 May', Page: 250, Visitor: 300 },
    { name: '20 May', Page: 350, Visitor: 250 },
    { name: '21 May', Page: 280, Visitor: 300 },
    { name: '21 May', Page: 340, Visitor: 240 },
    { name: '21 May', Page: 280, Visitor: 300 },
    { name: '21 May', Page: 400, Visitor: 270 }
  ],
  activeVisitors: {
    growth: 4,
    value: 4788,
    slug: 'Active Visitors right now',
    graphData: [
      { time: '1', value: 823 },
      { time: '2', value: 635 },
      { time: '3', value: 900 },
      { time: '4', value: 760 },
      { time: '5', value: 874 },
      { time: '6', value: 575 },
      { time: '7', value: 800 },
      { time: '8', value: 680 },
      { time: '9', value: 830 },
      { time: '10', value: 920 },
      { time: '11', value: 823 },
      { time: '22', value: 635 },
      { time: '23', value: 900 },
      { time: '24', value: 760 },
      { time: '25', value: 874 },
      { time: '26', value: 575 },
      { time: '27', value: 800 },
      { time: '28', value: 680 },
      { time: '29', value: 823 },
      { time: '30', value: 920 },
      { time: '31', value: 823 },
      { time: '32', value: 635 }
    ]
  },
  topSellingProduct: [
    {
      id: 1,
      icon: '/assets/images/dashboard/product_image_1.png',
      name: 'Antler Theme',
      description: 'Reference site about.',
      price: 6790,
      rate: 80,
      color: '#F44C51'
    },
    {
      id: 1,
      icon: '/assets/images/dashboard/product_image_2.png',
      name: 'Live Chat Support',
      description: 'information on its origins.',
      price: 4430,
      rate: 64,
      color: '#0A99EB'
    },
    {
      id: 1,
      icon: '/assets/images/dashboard/product_image_3.png',
      name: 'Puzzle Mask',
      description: 'information Lipsum generator.',
      price: 2330,
      rate: 55,
      color: '#58BE1E'
    }
  ],
  earningData: [
    {
      id: 1,
      color: 'green',
      amount: 4855,
      country: 'Japan'
    },
    {
      id: 2,
      color: 'orange',
      amount: 1598,
      country: 'India'
    },
    {
      id: 3,
      color: 'blue',
      amount: 866,
      country: 'Australia'
    },
    {
      id: 4,
      color: 'red',
      amount: 2534,
      country: 'USA'
    }
  ],
  tickets: [
    {
      id: 1,
      name: 'Support Tickets',
      opened: 50,
      overAllPercentage: {
        open: 65,
        close: 87,
        hold: 56
      }
    },
    {
      id: 2,
      name: 'Sales Tickets',
      opened: 50,
      overAllPercentage: {
        open: 65,
        close: 87,
        hold: 56
      }
    },
    {
      id: 3,
      name: 'Support Tickets',
      opened: 50,
      overAllPercentage: {
        open: 65,
        close: 87,
        hold: 56
      }
    }
  ],
  pageVisits: [
    {
      id: 1,
      page: '/dashboard/index.html',
      pageView: 322,
      visitors: 132
    },
    {
      id: 2,
      page: '/products/index.html',
      pageView: 234,
      visitors: 232
    },
    {
      id: 3,
      page: '/listing/index.html',
      pageView: 435,
      visitors: 654
    },
    {
      id: 4,
      page: '/invoces/index.html',
      pageView: 255,
      visitors: 633
    },
    {
      id: 5,
      page: '/details/index.html',
      pageView: 223,
      visitors: 233
    },
    {
      id: 6,
      page: '/delivered/index.html',
      pageView: 565,
      visitors: 645
    },
    {
      id: 7,
      page: '/cancelled/index.html',
      pageView: 333,
      visitors: 354
    },
    {
      id: 8,
      page: '/in-transit/index.html',
      pageView: 343,
      visitors: 567
    },
    {
      id: 9,
      page: '/delivered/index.html',
      pageView: 565,
      visitors: 645
    },
    {
      id: 10,
      page: '/cancelled/index.html',
      pageView: 333,
      visitors: 354
    },
    {
      id: 11,
      page: '/in-transit/index.html',
      pageView: 343,
      visitors: 567
    }
  ],
  transactionData: [
    {
      id: '#SK231',
      customer: 'Ina Hughes',
      date: '08-21-2020',
      paymentType: 'COD',
      status: 'In Transit'
    },
    {
      id: '#SK232',
      customer: 'Myrtie Ferguson',
      date: '08-12-2020',
      paymentType: 'Prepaid',
      status: 'Delivered'
    },
    {
      id: '#SK233',
      customer: 'Johnny Herrera',
      date: '07-30-2020',
      paymentType: 'Prepaid',
      status: 'In Transit'
    },
    {
      id: '#SK234',
      customer: 'Barbara Bowers',
      date: '07-25-2020',
      paymentType: 'COD',
      status: 'Delivered'
    },
    {
      id: '#SK235',
      customer: 'Annie Herrera',
      date: '07-11-2020',
      paymentType: 'Refunded',
      status: 'In Transit'
    },
    {
      id: '#SK236',
      customer: 'Ann Herrington',
      date: '06-21-2020',
      paymentType: 'COD',
      status: 'Return'
    },
    {
      id: '#SK237',
      customer: 'Ina Hughes',
      date: '06-12-2020',
      paymentType: 'COD',
      status: 'In Transit'
    }
  ],
  infoWidgets: [
    {
      id: 1,
      icon: '/assets/images/dashboard/icon_phone.png',
      count: 5623,
      details: 'Mobile Devices',
      bgColor: '#0698ED'
    },
    {
      id: 2,
      icon: '/assets/images/dashboard/icon_desktop.png',
      count: 7632,
      details: 'Desktop BrowserData',
      bgColor: '#9F4AE7'
    },
    {
      id: 3,
      icon: '/assets/images/dashboard/icon_android.png',
      count: 1234,
      details: 'Android Apps',
      bgColor: '#41C589'
    }
  ],

  trafficData: [
    {
      id: 1,
      title: 'Organic Search',
      value: 78,
      session: 10853
    },
    { id: 2, title: 'Direct', value: 90, session: 12323 },
    {
      id: 3,
      title: 'Referral',
      value: 25,
      session: 1231
    },
    { id: 4, title: 'Email', value: 40, session: 5454 },
    {
      id: 5,
      title: 'Social',
      value: 55,
      session: 6755
    },
    {
      id: 6,
      title: 'Advertise',
      value: 70,
      session: 9853
    },
    {
      id: 7,
      title: 'Referral',
      value: 25,
      session: 1231
    }
  ]
};
export default analyticsData;
