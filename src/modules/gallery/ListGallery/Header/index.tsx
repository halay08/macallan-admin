import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const GalleryListHeader = ({ setStatus, status }) => {
  const classes = useStyles();

  return (
    <Box fontSize="large" display="flex" alignItems="center" mb={6}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={e => setStatus(e.target.value)}
          value={status}
          label="Status"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="in_review">In Review</MenuItem>
          <MenuItem value="approved">Approved</MenuItem>
          <MenuItem value="rejected">Rejected</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default GalleryListHeader;
