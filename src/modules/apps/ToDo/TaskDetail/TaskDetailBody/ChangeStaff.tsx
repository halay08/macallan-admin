import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import Select from '@material-ui/core/Select';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../../redux/store';
import { StaffObj } from '../../../../../types/models/apps/Todo';

interface ChangeStaffProps {
  classes: any;
  labelWidth: number;
  selectedStaff: StaffObj;
  handleStaffChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const ChangeStaff: React.FC<ChangeStaffProps> = ({
  classes,
  labelWidth = 0,
  selectedStaff,
  handleStaffChange
}) => {
  const { staffList }: { staffList: StaffObj[] } = useSelector<
    AppState,
    AppState['todoApp']
  >(({ todoApp }) => todoApp);

  return (
    <FormControl variant="outlined" className={classes.minWidth100}>
      <InputLabel id="demo-simple-select-outlined-label">
        <IntlMessages id="common.staff" />
      </InputLabel>
      <Select
        className={clsx(classes.selectBox, classes.pointer)}
        labelWidth={labelWidth}
        value={selectedStaff.id}
        onChange={handleStaffChange}
      >
        {staffList.map((staff: StaffObj) => {
          return (
            <MenuItem
              value={staff.id}
              key={staff.id}
              className={classes.pointer}
            >
              <Box display="flex" alignItems="center">
                {staff.image ? (
                  <Avatar className={classes.mr12} src={staff.image} />
                ) : (
                  <Avatar className={classes.mr12}>
                    {staff.name.toUpperCase()}
                  </Avatar>
                )}
                <Box>{staff.name}</Box>
              </Box>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default ChangeStaff;
