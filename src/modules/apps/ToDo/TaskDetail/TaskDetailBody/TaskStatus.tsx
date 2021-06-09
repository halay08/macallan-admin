import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { onUpdateSelectedTask } from '../../../../../redux/actions';
import { StatusObj, TodoObj } from '../../../../../types/models/apps/Todo';
import { AppState } from '../../../../../redux/store';

interface TaskStatusProps {
  labelWidth: number;
  selectedTask: TodoObj;
  classes: any;
}

const TaskStatus: React.FC<TaskStatusProps> = ({
  labelWidth = 0,
  selectedTask,
  classes
}) => {
  const { statusList }: { statusList: StatusObj[] } = useSelector<
    AppState,
    AppState['todoApp']
  >(({ todoApp }) => todoApp);

  const dispatch = useDispatch();

  const onChangeStatus = (event: React.ChangeEvent<{ value: unknown }>) => {
    const task = selectedTask;
    task.status = event.target.value as number;
    dispatch(onUpdateSelectedTask(task));
  };

  return (
    <FormControl className="" variant="outlined">
      <InputLabel id="demo-simple-select-outlined-label">
        <IntlMessages id="common.status" />
      </InputLabel>
      <Select
        labelWidth={labelWidth}
        value={selectedTask.status}
        onChange={event => onChangeStatus(event)}
        className={classes.selectBox}
      >
        {statusList.map((status: StatusObj) => {
          return (
            <option
              key={status.type}
              value={status.type}
              className={classes.option}
            >
              {status.name}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default TaskStatus;
