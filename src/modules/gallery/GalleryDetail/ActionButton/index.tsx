import { Box, Button } from '@material-ui/core';
import { ICyoStatus } from 'modules/gallery/types';
import React from 'react';

type props = {
  onApprove: Function;
  onReject: Function;
  status: ICyoStatus;
};
export const ActionButton = ({ onApprove, onReject, status }: props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      pl={{ xs: 0, md: 5, lg: 5, xl: 15 }}
      mt={3}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => onApprove()}
        style={{ marginRight: 20, width: 140 }}
        disabled={status === ICyoStatus.APPROVED}
      >
        Approve
      </Button>
      <Button
        style={{ width: 140 }}
        variant="contained"
        color="secondary"
        onClick={() => onReject()}
        disabled={status === ICyoStatus.REJECTED}
      >
        Reject
      </Button>
    </Box>
  );
};
