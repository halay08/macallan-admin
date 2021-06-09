import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onUpdateSelectedTask } from '../../../../../redux/actions';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { useAuthUser } from '../../../../../@crema/utility/AppHooks';
import { makeStyles } from '@material-ui/core';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import { useIntl } from 'react-intl';
import Labels from '../../TasksList/TaskListItem/Labels';
import ChangeStaff from './ChangeStaff';
import AssignedStaff from './AssignedStaff';
import DatePicker from './DatePicker';
import EditButton from './EditButton';
import TaskStatus from './TaskStatus';
import TaskPriority from './TaskPriority';
import TaskCreatedByInfo from './TaskCreatedByInfo';
import CommentsList from './CommentsList';
import { red } from '@material-ui/core/colors';
import { Fonts } from '../../../../../shared/constants/AppEnums';
import TextField from '@material-ui/core/TextField';
import { CremaTheme } from '../../../../../types/AppContextPropsType';
import { AppState } from '../../../../../redux/store';
import {
  CommentObj,
  StaffObj,
  TodoObj
} from '../../../../../types/models/apps/Todo';

const useStyles = makeStyles((theme: CremaTheme) => ({
  selectBox: {
    cursor: 'pointer',
    '& .MuiOutlinedInput-input': {
      paddingBottom: 10,
      paddingTop: 10
    },
    '& .MuiSelect-select': {
      paddingLeft: 10
    }
  },
  taskBtn: {
    borderRadius: theme.overrides.MuiCard.root.borderRadius
  },
  pointer: {
    cursor: 'pointer'
  },
  mr12: {
    marginRight: 12
  },
  minWidth100: {
    minWidth: 100,
    width: '100%'
  },
  avtr50: {
    height: 50,
    width: 50
  },
  datePicker: {
    marginTop: 0
  },
  divider: {
    marginTop: 20,
    marginBottom: 20
  },
  textArea: {
    width: '100%',
    marginBottom: 16
  },
  option: {
    padding: 8,
    cursor: 'pointer'
  },
  button: {
    backgroundColor: red[500],
    color: theme.palette.primary.contrastText,
    fontWeight: Fonts.LIGHT,
    paddingRight: 20,
    paddingLeft: 20,
    '&:hover, &:focus': {
      backgroundColor: red[700],
      color: theme.palette.secondary.contrastText
    }
  }
}));

interface TaskDetailBodyProps {
  selectedTask: TodoObj;
}

const TaskDetailBody: React.FC<TaskDetailBodyProps> = ({ selectedTask }) => {
  const dispatch = useDispatch();

  const authUser = useAuthUser();

  const { staffList }: { staffList: StaffObj[] } = useSelector<
    AppState,
    AppState['todoApp']
  >(({ todoApp }) => todoApp);

  const [isEdit, setEdit] = useState(false);

  const [content, setContent] = useState(selectedTask.content);

  const [comment, setComment] = useState('');

  const [scheduleDate, setScheduleDate] = useState(
    moment(selectedTask.schedule).format('YYYY/MM/DD')
  );

  const [selectedStaff, setStaff] = useState<StaffObj>(selectedTask.assignedTo);

  const [labelWidth, setLabelWidth] = React.useState(0);

  useEffect(() => {
    setLabelWidth(60);
  }, []);

  const onClickEditButton = () => {
    setEdit(true);
  };

  const onDoneEditing = () => {
    const task = selectedTask;
    task.content = content;
    task.schedule = scheduleDate;
    task.assignedTo = selectedStaff;
    dispatch(onUpdateSelectedTask(task));
    setEdit(!isEdit);
  };

  const onAddComments = () => {
    let task = selectedTask;
    task.comments = task.comments.concat({
      comment: comment,
      name: authUser!.displayName ? authUser!.displayName : 'User',
      image: authUser!.photoURL,
      date: moment().format('ll')
    } as CommentObj);
    dispatch(onUpdateSelectedTask(task));
    setComment('');
  };

  const handleStaffChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const staff = staffList.find(
      (staff: StaffObj) => staff.id === (event.target.value as number)
    );
    setStaff(staff!);
  };

  const classes = useStyles();

  const { messages } = useIntl();

  return (
    <Box px={6} py={8}>
      <Box
        mb={6}
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ sm: 'center' }}
      >
        <Box
          component="h2"
          mr={5}
          mb={{ xs: 3, sm: 0 }}
          fontSize={16}
          fontWeight={Fonts.BOLD}
        >
          {selectedTask.title}
        </Box>

        <Box display="flex" alignItems="center">
          <Labels labels={selectedTask.label} />

          <Box
            component="span"
            ml={4}
            px={3}
            py={1}
            color="primary.contrastText"
            bgcolor={selectedTask.priority.color}
            fontSize={14}
            className={classes.taskBtn}
          >
            {selectedTask.priority.name}
          </Box>
        </Box>
      </Box>

      <Box mb={5} display="flex">
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          mr={2}
          alignItems={{ sm: 'center' }}
        >
          {isEdit ? (
            <>
              <Box mb={{ xs: 3, sm: 0 }}>
                <ChangeStaff
                  classes={classes}
                  labelWidth={labelWidth}
                  selectedStaff={selectedStaff}
                  handleStaffChange={handleStaffChange}
                />
              </Box>
              <DatePicker
                classes={classes}
                scheduleDate={scheduleDate}
                setScheduleDate={setScheduleDate}
              />
            </>
          ) : (
            <AssignedStaff
              classes={classes}
              assignedStaff={selectedTask.assignedTo}
            />
          )}
        </Box>

        <Box ml="auto">
          {!isEdit ? (
            <Box mt={2}>
              <EditButton
                classes={classes}
                action={onClickEditButton}
                title={messages['common.edit'] as string}
              />
            </Box>
          ) : (
            <EditButton
              classes={classes}
              action={onDoneEditing}
              title={messages['common.done'] as string}
            />
          )}
        </Box>
      </Box>

      <Divider className={classes.divider} />

      {!isEdit ? (
        <Box component="p" fontSize={{ xs: 14, xl: 16 }}>
          {content}
        </Box>
      ) : (
        <TextField
          multiline
          className={classes.textArea}
          rows="6"
          variant="outlined"
          placeholder={messages['common.description'] as string}
          name="content"
          value={content}
          onChange={event => setContent(event.target.value)}
        />
      )}

      <Box mb={5} pt={5} display="flex" alignItems="center">
        <Box mr={5}>
          <TaskStatus
            labelWidth={labelWidth}
            selectedTask={selectedTask}
            classes={classes}
          />
        </Box>

        <TaskPriority
          labelWidth={labelWidth}
          classes={classes}
          selectedTask={selectedTask}
        />
      </Box>

      <Divider className={classes.divider} />

      <TaskCreatedByInfo
        classes={classes}
        createdBy={selectedTask.createdBy}
        createdOn={selectedTask.createdOn}
      />

      <CommentsList classes={classes} comments={selectedTask.comments} />

      <TextField
        multiline
        className={classes.textArea}
        rows="6"
        variant="outlined"
        placeholder={messages['common.writeComment'] as string}
        value={comment}
        onChange={event => setComment(event.target.value)}
      />
      <Button className={classes.button} onClick={onAddComments}>
        <IntlMessages id="todo.submitComment" />
      </Button>
    </Box>
  );
};

export default TaskDetailBody;
