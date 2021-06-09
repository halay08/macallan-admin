import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import TaskItem from './TaskItem';
import { makeStyles } from '@material-ui/core/styles';
import { isBreakPointDown } from '../../../../@crema/utility/Utils';
import AppList from '../../../../@crema/core/AppList';
import AppCard from '../../../../@crema/core/AppCard';
import { useIntl } from 'react-intl';
import Scrollbar from '../../../../@crema/core/Scrollbar';
import { TaskListData } from '../../../../types/models/dashboards/Widgets';

const useStyles = makeStyles(() => ({
  pointer: {
    cursor: 'pointer'
  },
  ScrollbarRoot: {
    height: 263
  }
}));

const getData = (data: TaskListData[]) => {
  if (isBreakPointDown('xl')) {
    return data.slice(0, 3);
  } else {
    return data;
  }
};

interface TaskListProps {
  data: TaskListData[];
}

const TaskList: React.FC<TaskListProps> = ({ data }) => {
  const taskData = getData(data);
  const classes = useStyles();
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['dashboard.taskList']}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      action={<CloseIcon className={classes.pointer} />}
    >
      <Scrollbar className={classes.ScrollbarRoot}>
        <AppList
          data={taskData}
          renderRow={item => {
            return <TaskItem key={item.id} item={item} />;
          }}
        />
      </Scrollbar>
    </AppCard>
  );
};

export default TaskList;
