import { getCustomDateTime } from '../../../utility/Utils';
import { Academy } from '../../../../types/models/dashboards/Academy';

const academyData: Academy = {
  academicStats: [
    {
      id: 1,
      title: 'Total Sales',
      count: '$350',
      new: 'New $50',
      badgeColor: '#FB9C3B',
      bgcolor: '#FFF5EB',
      icon: '/assets/images/dashboard/academy/salesIcon.png'
    },
    {
      id: 2,
      title: 'Total Enroll',
      count: '1500',
      new: 'New 125',
      badgeColor: '#FAB817',
      bgcolor: '#EBF6FC',
      icon: '/assets/images/dashboard/academy/enrollIcon.png'
    },
    {
      id: 3,
      title: 'Total Courses',
      count: '130',
      new: 'New 5',
      badgeColor: '#FD3A84',
      bgcolor: '#FFEFF5',
      icon: '/assets/images/dashboard/academy/coursesIcon.png'
    },
    {
      id: 4,
      title: 'Total Students',
      count: '2650',
      new: 'New 245',
      badgeColor: '#31AB59',
      bgcolor: '#EAF7EE',
      icon: '/assets/images/dashboard/academy/studentsIcon.png'
    }
  ],
  courseCategories: [
    {
      id: 1,
      title: 'Design',
      desc: 'This is a extensive course for learning',
      lessons: 14,
      xp: 45,
      images: [
        {
          image: '/assets/images/dashboard/academy/design.png',
          title: 'image 1'
        },
        {
          image: '/assets/images/dashboard/academy/design.png',
          title: 'image 2'
        },
        {
          image: '/assets/images/dashboard/academy/design.png',
          title: 'image 3'
        }
      ]
    },
    {
      id: 2,
      title: 'Development',
      desc: 'This is a extensive course for learning',
      lessons: 14,
      xp: 45,
      images: [
        {
          image: '/assets/images/dashboard/academy/development.png',
          title: 'image 1'
        },
        {
          image: '/assets/images/dashboard/academy/development.png',
          title: 'image 2'
        },
        {
          image: '/assets/images/dashboard/academy/development.png',
          title: 'image 3'
        }
      ]
    },
    {
      id: 3,
      title: 'Marketing',
      desc: 'This is a extensive course for learning',
      lessons: 14,
      xp: 45,
      images: [
        {
          image: '/assets/images/dashboard/academy/marketing.png',
          title: 'image 1'
        },
        {
          image: '/assets/images/dashboard/academy/marketing.png',
          title: 'image 2'
        },
        {
          image: '/assets/images/dashboard/academy/marketing.png',
          title: 'image 3'
        }
      ]
    },
    {
      id: 4,
      title: 'IT and Software',
      desc: 'This is a extensive course for learning',
      lessons: 14,
      xp: 45,
      images: [
        {
          image: '/assets/images/dashboard/academy/it.png',
          title: 'image 1'
        },
        {
          image: '/assets/images/dashboard/academy/it.png',
          title: 'image 2'
        },
        {
          image: '/assets/images/dashboard/academy/it.png',
          title: 'image 3'
        }
      ]
    }
  ],
  profile: {
    id: 1,
    profile_pic: 'https://via.placeholder.com/150',
    name: 'Donald O Donhue',
    designation: 'Student',
    achievements: 2300,
    friends: 38
  },
  courses: {
    categories: [
      { id: 1, title: 'All courses', slug: 'all' },
      { id: 2, title: 'Current', slug: 'current' },
      { id: 3, title: 'Archived', slug: 'archived' },
      { id: 4, title: 'Upcoming', slug: 'upcoming' },
      { id: 5, title: 'Watchlist', slug: 'watchlist' }
    ],
    courses: [
      {
        id: 1,
        title: 'UI & UX Designing',
        duration: '4 Feb 2020 - 22 Feb 2020',
        rating: 8.7,
        isCompleted: false,
        thumb: '/assets/images/dashboard/academy/ui.png'
      },
      {
        id: 2,
        title: 'Logo Design (Part 1)',
        duration: '4 Mar 2020 - 22 Mar 2020',
        rating: 8.7,
        isCompleted: false,
        thumb: '/assets/images/dashboard/academy/logoDsign.png'
      },
      {
        id: 3,
        title: 'Digital Marketing',
        duration: '4 Apr 2020 - 22 Apr 2020',
        rating: 8.7,
        isCompleted: true,
        thumb: '/assets/images/dashboard/academy/digitalMarketing.png'
      },
      {
        id: 4,
        title: 'Web Development',
        duration: '4 May 2020 - 22 May 2020',
        rating: 8.7,
        isCompleted: false,
        thumb: '/assets/images/dashboard/academy/webDevelopment.png'
      }
    ]
  },
  notifications: [
    {
      id: 1,
      bgcolor: '#FEF1E4',
      color: '#F88333',
      letter: 'B',
      content: 'You had 1 class on 28 August',
      date: getCustomDateTime(-5, 'minutes', 'MMMM DD, YYYY, h:mm:ss a')
    },
    {
      id: 2,
      bgcolor: '#DDEFFA',
      color: '#FAB817',
      letter: 'A',
      content: 'Mighel sent you a message',
      date: getCustomDateTime(-10, 'minutes', 'MMMM DD, YYYY, h:mm:ss a')
    },
    {
      id: 3,
      bgcolor: '#FFE3EE',
      color: '#FE8EB9',
      letter: 'G',
      content: 'You have taken AI class',
      date: getCustomDateTime(-15, 'minutes', 'MMMM DD, YYYY, h:mm:ss a')
    },
    {
      id: 4,
      bgcolor: '#E2F3E8',
      color: '#47B46B',
      letter: 'W',
      content: 'You have registered for Python',
      date: getCustomDateTime(-25, 'minutes', 'MMMM DD, YYYY, h:mm:ss a')
    },
    {
      id: 5,
      bgcolor: '#FEE7E6',
      color: '#FCA7A4',
      letter: 'J',
      content: 'Nancy sent you a message',
      date: getCustomDateTime(-50, 'minutes', 'MMMM DD, YYYY, h:mm:ss a')
    }
  ],
  courseDetails: [
    {
      id: 1,
      title: 'UI & UX Designing',
      thumb: '/assets/images/dashboard/academy/ui.png',
      level: 'Advance level',
      coveredDuration: '35 hours',
      totalDuration: '75 hours',
      coveredPractice: '12 hours',
      totalPractice: '40 hours',
      graphData: [
        { month: 'Jan', duration: 1500 },
        { month: '', duration: 400 },
        { month: 'Feb', duration: 2000 },
        { month: 'Mar', duration: 1200 },
        { month: 'Apr', duration: 2200 },
        { month: 'May', duration: 2600 },
        { month: 'Jun', duration: 4300 },
        { month: 'July', duration: 2900 },
        { month: 'Aug', duration: 3800 },
        { month: 'Sep', duration: 1500 }
      ]
    },
    {
      id: 2,
      title: 'Logo Design',
      thumb: '/assets/images/dashboard/academy/logoDsign.png',
      level: 'Elementary level',
      coveredDuration: '35 hours',
      totalDuration: '75 hours',
      coveredPractice: '12 hours',
      totalPractice: '40 hours',
      graphData: [
        { month: 'Jan', duration: 1500 },
        { month: '', duration: 400 },
        { month: 'Feb', duration: 2000 },
        { month: 'Mar', duration: 1200 },
        { month: 'Apr', duration: 2200 },
        { month: 'May', duration: 2600 },
        { month: 'Jun', duration: 4300 },
        { month: 'July', duration: 2900 },
        { month: 'Aug', duration: 3800 },
        { month: 'Sep', duration: 1500 }
      ]
    },
    {
      id: 3,
      title: 'Typography',
      thumb: '/assets/images/dashboard/academy/digitalMarketing.png',
      level: 'Elementary level',
      coveredDuration: '35 hours',
      totalDuration: '75 hours',
      coveredPractice: '12 hours',
      totalPractice: '40 hours',
      graphData: [
        { month: 'Jan', duration: 1500 },
        { month: '', duration: 400 },
        { month: 'Feb', duration: 2000 },
        { month: 'Mar', duration: 1200 },
        { month: 'Apr', duration: 2200 },
        { month: 'May', duration: 2600 },
        { month: 'Jun', duration: 4300 },
        { month: 'July', duration: 2900 },
        { month: 'Aug', duration: 3800 },
        { month: 'Sep', duration: 1500 }
      ]
    }
  ],
  learningData: [
    {
      id: 1,
      icon: '/assets/images/dashboard/academy/learning1.png',
      title: 'Target Audience Learning',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      percentage: 57
    },
    {
      id: 2,
      icon: '/assets/images/dashboard/academy/learning2.png',
      title: 'The Complete Web',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      percentage: 43
    },
    {
      id: 3,
      icon: '/assets/images/dashboard/academy/learning3.png',
      title: 'Grow your community',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      percentage: 77
    },
    {
      id: 4,
      icon: '/assets/images/dashboard/academy/learning1.png',
      title: 'Target Audience Learning',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      percentage: 57
    }
  ],
  latestResults: [
    { id: 1, chapter: 'Unit 5', topic: 'Technology', percentage: 25 },
    { id: 12, chapter: 'Unit 12', topic: 'IT & Service', percentage: 44 },
    { id: 9, chapter: 'Unit 9', topic: 'Ecology', percentage: 40 },
    { id: 8, chapter: 'Unit 8', topic: 'Real Estate', percentage: 15 },
    { id: 16, chapter: 'Unit 16', topic: 'Education', percentage: 76 },
    { id: 4, chapter: 'Unit 4', topic: 'Job Market', percentage: 25 },
    { id: 7, chapter: 'Unit 7', topic: 'Education', percentage: 15 },
    { id: 11, chapter: 'Unit 11', topic: 'Technology', percentage: 76 }
  ],
  classData: [
    {
      id: 1,
      name: 'Adobe XD - Prototype',
      percent: 96,
      icon: '/assets/images/dashboard/academy/class.png'
    },
    {
      id: 2,
      name: 'Designing - Prototype',
      percent: 34,
      icon: '/assets/images/dashboard/academy/class.png'
    },
    {
      id: 3,
      name: 'Development - Prototype',
      percent: 65,
      icon: '/assets/images/dashboard/academy/class.png'
    },
    {
      id: 4,
      name: 'Python - Prototype',
      percent: 23,
      icon: '/assets/images/dashboard/academy/class.png'
    },
    {
      id: 5,
      name: 'Project',
      percent: 87,
      icon: '/assets/images/dashboard/academy/class.png'
    }
  ],
  studentRankings: [
    {
      id: 1,
      name: 'Suzanna J. Fowler',
      profile_pic: 'https://via.placeholder.com/150',
      courseId: 34878234,
      courseName: 'Watercolor Class',
      totalGrade: 97.4,
      ranking: 1,
      category: 'Design'
    },
    {
      id: 2,
      name: 'Julie Taylor',
      profile_pic: 'https://via.placeholder.com/150',
      courseId: 345453444,
      courseName: 'Python Class',
      totalGrade: 91.4,
      ranking: 2,
      category: 'Development'
    },
    {
      id: 3,
      name: 'John Doe',
      profile_pic: 'https://via.placeholder.com/150',
      courseId: 455644556,
      courseName: 'JS Class',
      totalGrade: 98.4,
      ranking: 3,
      category: 'Development'
    },
    {
      id: 4,
      name: 'Angelina Joew',
      profile_pic: 'https://via.placeholder.com/150',
      courseId: 455644556,
      courseName: 'React Class',
      totalGrade: 95.3,
      ranking: 4,
      category: 'Full Stack'
    }
  ],
  grades: [
    { month: '', grades: 0 },
    { month: 'Jan', grades: 20 },
    { month: 'Feb', grades: 28 },
    { month: 'Mar', grades: 76 },
    { month: 'Apr', grades: 38 },
    { month: 'May', grades: 64 },
    { month: 'Jun', grades: 76 },
    { month: 'Jul', grades: 20 },
    { month: '', grades: 35 }
  ],
  relatedCourses: [
    {
      id: 1,
      image: '/assets/images/dashboard/academy/relatedCourse1.png',
      title: 'How to attract client 1st time',
      author: 'Patya pindo',
      views: '1.5k'
    },
    {
      id: 2,
      image: '/assets/images/dashboard/academy/relatedCourse2.png',
      title: 'How to secure good marks',
      author: 'Patya pindo',
      views: '1.8k'
    },
    {
      id: 3,
      image: '/assets/images/dashboard/academy/relatedCourse1.png',
      title: 'How to attract client 1st time',
      author: 'Patya pindo',
      views: '1.5k'
    },
    {
      id: 4,
      image: '/assets/images/dashboard/academy/relatedCourse2.png',
      title: 'How to secure good marks',
      author: 'Patya pindo',
      views: '1.8k'
    }
  ],
  videoPromo: {
    title: 'Creating beautiful landing page in 1 hour',
    owner: 'Geo Vanni',
    category: 'Interface Experience',
    assignments: [
      {
        id: 1,
        title: 'Collecting Moodboard from dribble.com',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        students: 32,
        daysLeft: 1
      },
      {
        id: 2,
        title: 'Creating beautiful landing page',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        students: 12,
        daysLeft: 2
      }
    ]
  }
};
export default academyData;
