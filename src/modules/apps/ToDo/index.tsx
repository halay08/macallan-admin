import React, { useEffect } from 'react';
import TaskSideBar from './TaskSideBar';
import TasksList from './TasksList';
import TaskDetail from './TaskDetail';
import { useDispatch } from 'react-redux';
import {
  onGetToDoFolderList,
  onGetToDoLabelList,
  onGetToDoPriorityList,
  onGetToDoStaffList,
  onGetToDoStatusList
} from '../../../redux/actions';
import { useIntl } from 'react-intl';
import AppsContainer from '../../../@crema/core/AppsContainer';
import { RouteComponentProps } from 'react-router-dom';

interface ToDoParamProps {
  id: string;
}

interface ToDoProps extends RouteComponentProps<ToDoParamProps> {
  props: any;
}

const ToDo: React.FC<ToDoProps> = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetToDoLabelList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoFolderList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoPriorityList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoStaffList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoStatusList());
  }, [dispatch]);

  const onGetMainComponent = () => {
    if (props.match.params.id) {
      return <TaskDetail />;
    } else {
      return <TasksList />;
    }
  };

  const { messages } = useIntl();
  return (
    <AppsContainer
      title={messages['todo.todoApp'] as string}
      sidebarContent={<TaskSideBar />}
    >
      {onGetMainComponent()}
    </AppsContainer>
  );
};

export default ToDo;
