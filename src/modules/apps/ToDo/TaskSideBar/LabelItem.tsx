import React from 'react';
import { NavLink } from '../../../../@crema';
import Box from '@material-ui/core/Box';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { LabelObj } from '../../../../types/models/apps/Todo';

const useStyles = makeStyles(() => ({
  listItemText: {
    '& .MuiTypography-body1': {
      fontSize: 15,
      fontWeight: Fonts.MEDIUM
    }
  }
}));

interface LabelItemProps {
  label: LabelObj;
}

const LabelItem: React.FC<LabelItemProps> = ({ label }) => {
  const classes = useStyles();
  return (
    <ListItem
      button
      key={label.id}
      to={`/apps/todo/label/${label.alias}`}
      component={NavLink}
      activeClassName="active"
    >
      <Box
        component="span"
        width={12}
        height={12}
        mr={{ xs: 4, xl: 5 }}
        borderRadius="50%"
        bgcolor={`${label.color}`}
      />

      <ListItemText className={classes.listItemText} primary={label.name} />
    </ListItem>
  );
};

export default LabelItem;
