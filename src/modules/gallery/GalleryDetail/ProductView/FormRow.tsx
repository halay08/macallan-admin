import React from 'react';
import { Box, Grid } from '@material-ui/core';

type props = {
  label: string;
  value?: string | number;
};

export const FormRow = ({ label, value }: props) => (
  <>
    <Grid item xs={2}>
      <Box component="p" color="text.secondary">
        {label}
      </Box>
    </Grid>
    <Grid item xs={10}>
      <Box component="p" color="text.secondary">
        {value}
      </Box>
    </Grid>
  </>
);
