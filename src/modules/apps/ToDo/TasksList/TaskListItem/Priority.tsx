import React from 'react';
import Box from '@material-ui/core/Box';
import { PriorityObj } from '../../../../../types/models/apps/Todo';

interface PriorityProps {
  priority: PriorityObj;
}

const Priority: React.FC<PriorityProps> = ({ priority }) => {
  return (
    <Box
      component="span"
      ml={{ xs: 'auto', sm: 4 }}
      px={3}
      py={1}
      color="primary.contrastText"
      borderRadius="30px"
      fontSize={14}
      bgcolor={priority.color}
    >
      {priority.name}
    </Box>
  );
};

export default Priority;
