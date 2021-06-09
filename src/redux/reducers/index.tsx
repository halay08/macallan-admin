import Settings from './Setting';
import CommonReducer from './CommonReducer';
import Auth from './Auth';
import Dashboard from './Dashboard';
import ChatApp from './ChatApp';
import MailApp from './MailApp';
import ScrumBoardReducer from './ScrumboardApp';
import ContactApp from './ContactApp';
import WallApp from './WallApp';
import ToDoApp from './ToDoApp';
import UserList from './UserList';

const reducers = {
  settings: Settings,
  auth: Auth,
  dashboard: Dashboard,
  common: CommonReducer,
  chatApp: ChatApp,
  mailApp: MailApp,
  contactApp: ContactApp,
  scrumboardApp: ScrumBoardReducer,
  wallApp: WallApp,
  todoApp: ToDoApp,
  userList: UserList
};

export default reducers;
