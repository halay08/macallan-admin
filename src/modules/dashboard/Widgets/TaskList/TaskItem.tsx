import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { Fonts } from '../../../../shared/constants/AppEnums';
import clsx from 'clsx';
import { TaskListData } from '../../../../types/models/dashboards/Widgets';

const useStyles = makeStyles(() => ({
  litItemRoot: {
    padding: '8px 20px'
  }
}));

interface TaskItemPorps {
  item: TaskListData;
}

const TaskItem: React.FC<TaskItemPorps> = ({ item }) => {
  const classes = useStyles();
  return (
    <ListItem key={item.id} className={clsx(classes.litItemRoot, 'item-hover')}>
      <ListItemText
        primary={
          <Box
            component="p"
            color="primary.main"
            fontWeight={Fonts.MEDIUM}
            fontSize={14}
          >
            {item.title}
          </Box>
        }
        secondary={
          <Box component="span" color="text.secondary" fontSize={14}>
            {item.desc}
          </Box>
        }
      />
    </ListItem>
  );
};

export default TaskItem;
