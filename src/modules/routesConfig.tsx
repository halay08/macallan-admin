export interface NavItemProps {
  id: string;
  messageId: string;
  title: string;
  icon?: string;
  exact?: boolean;
  url?: string;
  type?: string;
  count?: number;
  color?: string;
  auth?: string[];
  children?: NavItemProps[] | NavItemProps;
}

const routesConfig: NavItemProps[] = [
  {
    id: 'gallery',
    title: 'Gallery',
    messageId: 'sidebar.gallery',
    type: 'group',
    children: [
      {
        id: 'listGallery',
        title: 'List Gallery',
        messageId: 'sidebar.listGallery',
        icon: 'apps',
        type: 'item',
        url: '/gallery/list'
      }
    ]
  },
  {
    id: 'app',
    title: 'Application',
    messageId: 'sidebar.application',
    type: 'group',
    children: [
      {
        id: 'dashboards',
        title: 'Dashboards',
        messageId: 'sidebar.app.dashboard',
        type: 'collapse',
        icon: 'dashboard',
        children: [
          {
            id: 'healthCare',
            title: 'Health Care',
            messageId: 'sidebar.healthCare',
            type: 'item',
            url: '/dashboards/health-care'
          },
          {
            id: 'academy',
            title: 'Academy',
            messageId: 'sidebar.app.dashboard.academy',
            type: 'item',
            url: '/dashboards/academy'
          },
          {
            id: 'analytics',
            title: 'Analytics',
            messageId: 'sidebar.app.dashboard.analytics',
            type: 'item',
            url: '/dashboards/analytics'
          },
          {
            id: 'crm',
            title: 'CRM',
            messageId: 'sidebar.app.dashboard.crm',
            type: 'item',
            url: '/dashboards/crm'
          },
          {
            id: 'crypto',
            title: 'Crypto',
            messageId: 'sidebar.app.dashboard.crypto',
            type: 'item',
            url: '/dashboards/crypto'
          }
        ]
      },
      {
        id: 'metrics',
        title: 'Metrics',
        messageId: 'sidebar.app.metrics',
        type: 'item',
        icon: 'insert_chart',
        url: '/dashboards/metrics'
      },
      {
        id: 'widgets',
        title: 'Widgets',
        messageId: 'sidebar.app.widgets',
        type: 'item',
        icon: 'widgets',
        url: '/dashboards/widgets'
      }
    ]
  },
  {
    id: 'apps',
    title: 'Apps',
    messageId: 'sidebar.apps',
    type: 'collapse',
    icon: 'apps',
    children: [
      {
        id: 'mail',
        title: 'Mail',
        messageId: 'sidebar.apps.mail',
        type: 'item',
        count: 4,
        url: '/apps/mail'
      },
      {
        id: 'todo',
        title: 'ToDo',
        messageId: 'sidebar.apps.todo',
        type: 'item',
        count: 6,
        color: '#48bb78',
        url: '/apps/todo'
      },
      {
        id: 'contact',
        title: 'Contact',
        messageId: 'sidebar.apps.contact',
        type: 'item',
        url: '/apps/contact'
      },
      {
        id: 'scrum-board',
        title: 'Scrum Board',
        messageId: 'sidebar.apps.scrumboard',
        type: 'item',
        url: '/apps/scrum-board'
      },
      {
        id: 'chat',
        title: 'Chat',
        messageId: 'sidebar.apps.chat',
        type: 'item',
        url: '/apps/chat'
      },
      {
        id: 'wall',
        title: 'Wall',
        messageId: 'sidebar.apps.wall',
        type: 'item',
        url: '/apps/wall'
      }
    ]
  },
  {
    id: 'pages',
    title: 'Pages',
    messageId: 'sidebar.pages',
    type: 'group',
    children: [
      {
        id: 'timeline',
        title: 'Time Line',
        messageId: 'sidebar.pages.timeLine',
        type: 'item',
        icon: 'timeline',
        url: '/third-party/time-line'
      },
      {
        id: 'extra-pages',
        title: 'Extra Pages',
        messageId: 'sidebar.pages.extraPages',
        type: 'collapse',
        icon: 'work_outline',
        children: [
          {
            id: 'about-us',
            title: 'About Us',
            messageId: 'sidebar.pages.extraPages.aboutUs',
            type: 'item',
            url: '/extra-pages/about-us'
          },
          {
            id: 'knowledge-base',
            title: 'Knowledge Base',
            messageId: 'sidebar.pages.extraPages.knowledgeBase',
            type: 'item',
            url: '/extra-pages/knowledge-base'
          },
          {
            id: 'portfolio',
            title: 'Portfolio',
            messageId: 'sidebar.pages.extraPages.portfolio',
            type: 'item',
            url: '/extra-pages/portfolio'
          },
          {
            id: 'faq',
            title: 'FAQ',
            messageId: 'sidebar.pages.extraPages.faq',
            type: 'item',
            url: '/extra-pages/faq'
          }
        ]
      },
      {
        id: 'user',
        title: 'User Pages',
        messageId: 'sidebar.pages.userPages',
        type: 'collapse',
        icon: 'verified_user',
        children: [
          {
            id: 'sign-in-1',
            title: 'SignIn-1',
            messageId: 'sidebar.pages.userPages.signIn1',
            type: 'item',
            url: '/user/sign-in-1'
          },
          {
            id: 'sign-in-2',
            title: 'SignIn-2',
            messageId: 'sidebar.pages.userPages.signIn2',
            type: 'item',
            url: '/user/sign-in-2'
          },
          {
            id: 'sign-up-1',
            title: 'SignUp-1',
            messageId: 'sidebar.pages.userPages.signUp1',
            type: 'item',
            url: '/user/sign-up-1'
          },
          {
            id: 'sign-up-2',
            title: 'SignUp-2',
            messageId: 'sidebar.pages.userPages.signUp2',
            type: 'item',
            url: '/user/sign-up-2'
          },
          {
            id: 'forgot-password-1',
            title: 'Forgot Password-1',
            messageId: 'sidebar.pages.userPages.forgetPassword1',
            type: 'item',
            url: '/user/forgot-password-1'
          },
          {
            id: 'forgot-password-2',
            title: 'Forgot Password-2',
            messageId: 'sidebar.pages.userPages.forgetPassword2',
            type: 'item',
            url: '/user/forgot-password-2'
          },
          {
            id: 'reset-password-1',
            title: 'Reset Password-1',
            messageId: 'sidebar.pages.userPages.resetPassword1',
            type: 'item',
            url: '/user/reset-password-1'
          },
          {
            id: 'reset-password-2',
            title: 'Reset Password-2',
            messageId: 'sidebar.pages.userPages.resetPassword2',
            type: 'item',
            url: '/user/reset-password-2'
          },
          {
            id: 'lock-1',
            title: 'Lock Screen-1',
            messageId: 'sidebar.pages.userPages.lockScreen1',
            type: 'item',
            url: '/user/lock-1'
          },
          {
            id: 'lock-2',
            title: 'Lock Screen-2',
            messageId: 'sidebar.pages.userPages.lockScreen2',
            type: 'item',
            url: '/user/lock-2'
          }
        ]
      },
      {
        id: 'list-type',
        title: 'User List',
        messageId: 'sidebar.pages.userList',
        type: 'collapse',
        icon: 'view_list',
        children: [
          {
            id: 'morden',
            title: 'Modern',
            messageId: 'sidebar.pages.userList.modern',
            type: 'item',
            url: '/list-type/morden'
          },
          {
            id: 'standard',
            title: 'Standard',
            messageId: 'sidebar.pages.userList.standard',
            type: 'item',
            url: '/list-type/standard'
          },
          {
            id: 'flat',
            title: 'Flat',
            messageId: 'sidebar.pages.userList.flat',
            type: 'item',
            url: '/list-type/flat'
          }
        ]
      },
      {
        id: 'error-pages',
        title: 'Error Pages',
        messageId: 'sidebar.pages.errorPages',
        type: 'collapse',
        icon: 'report',
        children: [
          {
            id: 'error-404',
            title: '404',
            messageId: 'sidebar.pages.errorPages.404',
            type: 'item',
            url: '/error-pages/error-404'
          },
          {
            id: 'error-500',
            title: '500',
            messageId: 'sidebar.pages.errorPages.500',
            type: 'item',
            url: '/error-pages/error-500'
          },
          {
            id: 'maintenance',
            title: 'Maintenance',
            messageId: 'sidebar.pages.errorPages.maintenance',
            type: 'item',
            url: '/error-pages/maintenance'
          },
          {
            id: 'coming-soon',
            title: 'Coming Soon',
            messageId: 'sidebar.pages.errorPages.comingSoon',
            type: 'item',
            url: '/error-pages/coming-soon'
          }
        ]
      },
      {
        id: 'multi-level',
        title: 'Multi Level',
        messageId: 'sidebar.multiLevel',
        type: 'collapse',
        icon: 'menu',
        children: [
          {
            id: 'level-1',
            title: 'Level 1',
            messageId: 'sidebar.multiLevel.level1',
            type: 'item',
            url: '/menu-level-1'
          },
          {
            id: 'level-2',
            title: 'Level 1',
            messageId: 'sidebar.multiLevel.level1',
            type: 'collapse',
            children: [
              {
                id: 'level-2-1',
                title: 'Level 2',
                messageId: 'sidebar.multiLevel.level2',
                type: 'item',
                url: '/menu-level-2-1'
              },
              {
                id: 'level-2-2',
                title: 'Level 2',
                messageId: 'sidebar.multiLevel.level2',
                type: 'item',
                url: '/menu-level-2-2'
              }
            ]
          },
          {
            id: 'level-3',
            title: 'Level 1',
            messageId: 'sidebar.multiLevel.level1',
            type: 'collapse',
            children: [
              {
                id: 'level-3-1',
                title: 'Level 2',
                messageId: 'sidebar.multiLevel.level2',
                type: 'collapse',
                children: [
                  {
                    id: 'level-3-1-1',
                    title: 'Level 3',
                    messageId: 'sidebar.multiLevel.level3',
                    type: 'item',
                    url: '/menu-level-3-1-1'
                  },
                  {
                    id: 'level-3-1-2',
                    title: 'Level 3',
                    messageId: 'sidebar.multiLevel.level3',
                    type: 'item',
                    url: '/menu-level-3-1-2'
                  }
                ]
              },
              {
                id: 'level-3-2',
                title: 'Level 2',
                messageId: 'sidebar.multiLevel.level2',
                type: 'collapse',
                children: [
                  {
                    id: 'level-3-2-1',
                    title: 'Level 3',
                    messageId: 'sidebar.multiLevel.level3',
                    type: 'item',
                    url: '/menu-level-3-2-1'
                  },
                  {
                    id: 'level-3-2-2',
                    title: 'Level 3',
                    messageId: 'sidebar.multiLevel.level3',
                    type: 'item',
                    url: '/menu-level-3-2-2'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
export default routesConfig;
