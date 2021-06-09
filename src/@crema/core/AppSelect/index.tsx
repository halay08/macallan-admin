import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';
import { CremaTheme } from '../../../types/AppContextPropsType';

const useStyles = makeStyles((theme: CremaTheme) => ({
  selectBox: {
    marginLeft: 8,
    cursor: 'pointer',
    fontSize: 14,
    [theme.breakpoints.up('xl')]: {
      marginLeft: 24
    },
    '& .MuiSelect-select': {
      paddingLeft: 10
    }
  },
  selectOption: {
    cursor: 'pointer',
    padding: 8,
    fontSize: 14
  }
}));

interface AppSelectProps {
  menus: string[] | any[];
  onChange: (value: any) => void;
  defaultValue: any;
  selectionKey?: string;
}

const AppSelect: React.FC<AppSelectProps> = ({
  menus = [],
  onChange,
  defaultValue = '',
  selectionKey = ''
}) => {
  const [selectionType, setSelectionType] = useState(defaultValue);

  const handleSelectionType = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectionType(event.target.value);
    onChange(event.target.value);
  };
  const classes = useStyles();
  return (
    <Select
      defaultValue={defaultValue}
      value={selectionType}
      onChange={handleSelectionType}
      disableUnderline={true}
      className={clsx(classes.selectBox, 'select-box')}
    >
      {menus.map((menu: any, index: number) => (
        <MenuItem
          key={index}
          value={selectionKey ? menu[selectionKey] : menu}
          className={classes.selectOption}
        >
          {selectionKey ? menu[selectionKey] : menu}
        </MenuItem>
      ))}
    </Select>
  );
};

export default AppSelect;
