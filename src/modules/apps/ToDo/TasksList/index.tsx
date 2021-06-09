import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  onGetTaskList,
  onUpdateTaskStarredStatus
} from '../../../../redux/actions';
import TaskContentHeader from './TaskContentHeader';
import TaskListItem from './TaskListItem';
import { useLocation } from 'react-router-dom';
import AddNewTask from '../AddNewTask';
import { Hidden, makeStyles } from '@material-ui/core';
import AppsPagination from '../../../../@crema/core/AppsPagination';
import { grey } from '@material-ui/core/colors';
import AppsHeader from '../../../../@crema/core/AppsContainer/AppsHeader';
import AppsContent from '../../../../@crema/core/AppsContainer/AppsContent';
import AppsFooter from '../../../../@crema/core/AppsContainer/AppsFooter';
import ListEmptyResult from '../../../../@crema/core/AppList/ListEmptyResult';
import TodoListSkeleton from '../../../../@crema/core/Skeleton/TodoListSkeleton';
import AppList from '../../../../@crema/core/AppList';
import { AppState } from '../../../../redux/store';
import { TodoObj } from '../../../../types/models/apps/Todo';

const useStyles = makeStyles(() => ({
  list: {
    paddingTop: 0,
    paddingBottom: 0
  },
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  pagination: {
    paddingRight: 8,
    paddingLeft: 8,
    borderColor: grey[300],
    borderTopWidth: 1
  }
}));

const TasksList = () => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const {
    taskList,
    totalTasks,
    loading
  }: { taskList: TodoObj[]; totalTasks: number; loading: boolean } =
    useSelector<AppState, AppState['todoApp']>(({ todoApp }) => todoApp);

  const [filterText, onSetFilterText] = useState<string>('');

  const [page, setPage] = useState<number>(0);

  const [checkedTasks, setCheckedTasks] = useState<number[]>([]);

  const [isAddTaskOpen, setAddTaskOpen] = useState<boolean>(false);

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    const path = pathname.split('/');
    dispatch(onGetTaskList(path[path.length - 2], path[path.length - 1], page));
  }, [dispatch, page, pathname]);

  const onOpenAddTask = () => {
    setAddTaskOpen(true);
  };

  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  };

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => {
    setPage(page);
  };

  const onChangeCheckedTasks = (event: any, id: number) => {
    if (event.target.checked) {
      setCheckedTasks(checkedTasks.concat(id));
    } else {
      setCheckedTasks(checkedTasks.filter(taskId => taskId !== id));
    }
  };

  const onChangeStarred = (checked: boolean, task: TodoObj) => {
    const status = checked;
    const selectedIdList = [task.id].toString();
    const path = pathname.split('/');
    dispatch(
      onUpdateTaskStarredStatus(selectedIdList, status, path[path.length - 1])
    );
  };

  const onGetFilteredItems = () => {
    if (filterText === '') {
      return taskList;
    } else {
      return taskList.filter(task =>
        task.title.toUpperCase().includes(filterText.toUpperCase())
      );
    }
  };

  const list = onGetFilteredItems();

  const classes = useStyles();

  return (
    <>
      <AppsHeader>
        <TaskContentHeader
          checkedTasks={checkedTasks}
          setCheckedTasks={setCheckedTasks}
          filterText={filterText}
          onSetFilterText={onSetFilterText}
          onPageChange={onPageChange}
          page={page}
        />
      </AppsHeader>
      <AppsContent>
        <AppList
          className={classes.list}
          data={list}
          renderRow={task => (
            <TaskListItem
              key={task.id}
              task={task}
              onChangeCheckedTasks={onChangeCheckedTasks}
              checkedTasks={checkedTasks}
              onChangeStarred={onChangeStarred}
            />
          )}
          ListEmptyComponent={
            <ListEmptyResult
              loading={loading}
              actionTitle="Add Task"
              onClick={onOpenAddTask}
              placeholder={<TodoListSkeleton />}
            />
          }
        />
      </AppsContent>

      <Hidden smUp>
        {taskList.length > 0 ? (
          <AppsFooter>
            <AppsPagination
              count={totalTasks}
              page={page}
              onPageChange={onPageChange}
            />
          </AppsFooter>
        ) : null}
      </Hidden>

      {isAddTaskOpen ? (
        <AddNewTask
          isAddTaskOpen={isAddTaskOpen}
          onCloseAddTask={onCloseAddTask}
        />
      ) : null}
    </>
  );
};

export default TasksList;
