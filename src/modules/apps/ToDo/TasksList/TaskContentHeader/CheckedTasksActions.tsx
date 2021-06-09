import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import LabelSharpIcon from '@material-ui/icons/LabelSharp';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import {
  onDeleteSelectedTasks,
  onUpdateTaskLabels
} from '../../../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import AppsDeleteIcon from '../../../../../@crema/core/AppsDeleteIcon';
import { useLocation } from 'react-router-dom';
import { AppState } from '../../../../../redux/store';
import { LabelObj } from '../../../../../types/models/apps/Todo';
import { useIntl } from 'react-intl';

interface CheckedTasksActionsProps {
  checkedTasks: number[];
  setCheckedTasks: (tasks: number[]) => void;
  page: number;
  classes: any;
}

const CheckedTasksActions: React.FC<CheckedTasksActionsProps> = ({
  checkedTasks,
  setCheckedTasks,
  page,
  classes
}) => {
  const { pathname } = useLocation();
  const path = pathname.split('/');
  const dispatch = useDispatch();
  const [isLabelOpen, onOpenLabel] = React.useState(null);

  const { labelList }: { labelList: LabelObj[] } = useSelector<
    AppState,
    AppState['todoApp']
  >(({ todoApp }) => todoApp);

  const onLabelOpen = (event: any) => {
    onOpenLabel(event.currentTarget);
  };

  const onLabelClose = () => {
    onOpenLabel(null);
  };

  const onDeleteTasks = () => {
    dispatch(
      onDeleteSelectedTasks(
        checkedTasks,
        path[path.length - 2],
        path[path.length - 1],
        page
      )
    );
    setCheckedTasks([]);
  };

  const onSelectLabel = (event: any) => {
    const labelType = event.target.value;
    dispatch(onUpdateTaskLabels(checkedTasks, labelType));
    setCheckedTasks([]);
    onLabelClose();
  };

  const { messages } = useIntl();
  return (
    <>
      <Box
        mr={{ xs: 1, xl: 2 }}
        pl={{ xs: 2, xl: 4 }}
        component="span"
        display="flex"
        alignItems="center"
        className={classes.checkedTask}
      >
        <AppsDeleteIcon
          deleteAction={onDeleteTasks}
          deleteTitle={messages['todo.deleteMessage'] as string}
          className={classes.deleteIcon}
        />

        <Tooltip title={<IntlMessages id="common.label" />}>
          <LabelSharpIcon className={classes.labelIcon} onClick={onLabelOpen} />
        </Tooltip>

        <Menu
          anchorEl={isLabelOpen}
          open={Boolean(isLabelOpen)}
          onClose={onLabelClose}
        >
          {labelList.map(label => {
            return (
              <MenuItem key={label.id} value={label.id} onClick={onSelectLabel}>
                {label.name}
              </MenuItem>
            );
          })}
        </Menu>
      </Box>
    </>
  );
};

export default CheckedTasksActions;
