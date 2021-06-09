import React from 'react';
import { useDispatch } from 'react-redux';
import { onUpdateSelectedTask } from '../../../../../redux/actions';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import AppsStarredIcon from '../../../../../@crema/core/AppsStarredIcon';
import StatusToggleButton from './StatusToggleButton';
import AppsDeleteIcon from '../../../../../@crema/core/AppsDeleteIcon';
import { CremaTheme } from '../../../../../types/AppContextPropsType';
import { useIntl } from 'react-intl';
import { TodoObj } from '../../../../../types/models/apps/Todo';

const useStyles = makeStyles((theme: CremaTheme) => ({
  statusBtn: {
    fontSize: 12,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.overrides.MuiCard.root.borderRadius,
    cursor: 'pointer',
    [theme.breakpoints.up('lg')]: {
      fontSize: 14
    }
  },
  deleteIcon: {
    marginLeft: 'auto',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 16
    }
  },
  doneIcon: {
    marginRight: 4,
    fontSize: 18,
    verticalAlign: 'middle',
    [theme.breakpoints.up('sm')]: {
      marginRight: 8
    }
  },
  pointer: {
    cursor: 'pointer'
  }
}));

interface TaskDetailHeaderProps {
  selectedTask: TodoObj;
}

const TaskDetailHeader: React.FC<TaskDetailHeaderProps> = ({
  selectedTask
}) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const onClickBackButton = () => {
    history.goBack();
  };

  const onChangeStarred = (checked: boolean) => {
    const task = selectedTask;
    task.isStarred = checked;
    dispatch(onUpdateSelectedTask(task));
  };

  const onDeleteTask = () => {
    const task = selectedTask;
    task.folderValue = 126;
    dispatch(onUpdateSelectedTask(task));
    history.goBack();
  };

  const classes = useStyles();
  const { messages } = useIntl();

  return (
    <>
      <Box className={classes.pointer} component="span">
        <Tooltip title={<IntlMessages id="common.back" />}>
          <KeyboardBackspaceIcon onClick={onClickBackButton} />
        </Tooltip>
      </Box>

      <StatusToggleButton selectedTask={selectedTask} classes={classes} />

      <Box component="span" ml="auto" display={{ xs: 'none', sm: 'block' }}>
        <AppsStarredIcon item={selectedTask} onChange={onChangeStarred} />
      </Box>

      <AppsDeleteIcon
        deleteAction={onDeleteTask}
        deleteTitle={messages['todo.deleteMessage'] as string}
        className={classes.deleteIcon}
      />
    </>
  );
};

export default TaskDetailHeader;
