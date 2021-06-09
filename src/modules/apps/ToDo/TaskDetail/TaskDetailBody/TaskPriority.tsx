import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { onUpdateSelectedTask } from '../../../../../redux/actions';
import { AppState } from '../../../../../redux/store';
import { PriorityObj, TodoObj } from '../../../../../types/models/apps/Todo';

interface TaskPriorityProps {
  labelWidth: number;
  selectedTask: TodoObj;
  classes: any;
}

const TaskPriority: React.FC<TaskPriorityProps> = ({
  labelWidth = 0,
  selectedTask,
  classes
}) => {
  const dispatch = useDispatch();
  const { priorityList }: { priorityList: PriorityObj[] } = useSelector<
    AppState,
    AppState['todoApp']
  >(({ todoApp }) => todoApp);

  const [priority, setPriority] = useState<PriorityObj>(selectedTask.priority);

  const onChangePriority = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPriority(event.target.value as PriorityObj);
    const task = selectedTask;
    task.priority = event.target.value as PriorityObj;
    dispatch(onUpdateSelectedTask(task));
  };

  return (
    <FormControl variant="outlined">
      <InputLabel id="demo-simple-select-outlined-label">
        <IntlMessages id="common.priority" />
      </InputLabel>
      <Select
        labelWidth={labelWidth}
        name="priority"
        value={priority.type}
        onChange={event => onChangePriority(event)}
        className={classes.selectBox}
      >
        {priorityList.map(priority => {
          return (
            <option
              key={priority.id}
              value={priority.type}
              className={classes.option}
            >
              {priority.name}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default TaskPriority;
