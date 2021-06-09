import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import { useIntl } from 'react-intl';
import clsx from 'clsx';

interface SelectTasksDropdownProps {
  onSelectTasks: (value: number) => void;
  classes: any;
}

const SelectTasksDropdown: React.FC<SelectTasksDropdownProps> = ({
  onSelectTasks,
  classes
}) => {
  const [selectedItems, setSelectedItems] = useState<number>(0);

  const onChangeSelectValue = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedItems(event.target.value as number);
    onSelectTasks(event.target.value as number);
  };

  const { messages } = useIntl();

  return (
    <Box mr={{ xs: 2, xl: 4 }} component="span">
      <Select
        value={selectedItems}
        disableUnderline={true}
        className={clsx(classes.pointer, classes.selectBox)}
        onChange={onChangeSelectValue}
      >
        <option value={0} className={classes.option}>
          {messages['common.all']}
        </option>
        <option value={1} className={classes.option}>
          {messages['common.none']}
        </option>
        <option value={2} className={classes.option}>
          {messages['common.starred']}
        </option>
        <option value={3} className={classes.option}>
          {messages['common.attachments']}
        </option>
      </Select>
    </Box>
  );
};

export default SelectTasksDropdown;
