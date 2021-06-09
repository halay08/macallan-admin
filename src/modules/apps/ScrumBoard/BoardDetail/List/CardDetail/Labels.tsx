import React from 'react';
import { Box } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { LabelObj } from '../../../../../../types/models/apps/ScrumbBoard';

interface LabelsProps {
  labels: LabelObj[];
}

const Labels: React.FC<LabelsProps> = ({ labels }) => {
  return (
    <Box m={4} mx={-1} display="flex" alignItems="center">
      {labels.map(label => {
        return (
          <Tooltip title={label.name} placement="top" key={label.id}>
            <Box
              height={{ xs: 4, sm: 6 }}
              width={32}
              mx={1}
              borderRadius={20}
              key={label.id}
              bgcolor={label.color}
            />
          </Tooltip>
        );
      })}
    </Box>
  );
};

export default Labels;
