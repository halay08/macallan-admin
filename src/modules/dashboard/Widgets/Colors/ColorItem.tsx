import React from 'react';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { Fonts } from '../../../../shared/constants/AppEnums';
import { ColorsList } from '../../../../types/models/dashboards/Widgets';

const useStyles = makeStyles(theme => ({
  checkBox: {
    color: (props: { color: string }) => props.color + `!important`
  }
}));

interface ColorItemProps {
  item: ColorsList;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    item: ColorsList
  ) => void;
}

const ColorItem: React.FC<ColorItemProps> = props => {
  const { item, handleChange } = props;

  const classes = useStyles({ color: item.color as string });
  return (
    <Box
      display="flex"
      alignItems="center"
      key={item.id}
      px={5}
      className="item-hover"
    >
      <Box mr={2} ml={-3}>
        <Checkbox
          className={classes.checkBox}
          checked={item.isChecked}
          onChange={e => handleChange(e, item)}
        />
      </Box>
      <Box
        component="span"
        color={item.color}
        fontWeight={Fonts.MEDIUM}
        fontSize={14}
      >
        {item.name}
      </Box>
    </Box>
  );
};

export default ColorItem;
