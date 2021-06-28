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
  }
];
export default routesConfig;
