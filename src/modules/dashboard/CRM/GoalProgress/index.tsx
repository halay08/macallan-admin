import React from 'react';
import GoalProgressGraph from './GoalProgressGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import AppCard from '../../../../@crema/core/AppCard';
import { useIntl } from 'react-intl';
import { ProgressGraphData } from '../../../../types/models/dashboards/CRM';

interface GoalProgressProps {
  progressGraphData: ProgressGraphData[];
}

const GoalProgress: React.FC<GoalProgressProps> = ({ progressGraphData }) => {
  const { messages } = useIntl();
  return (
    <AppCard height="1" title={messages['dashboard.goalProgress']}>
      <GoalProgressGraph progressGraphData={progressGraphData} />
      <Box mt={5} px={2} mb={1} display="flex" alignItems="center">
        <Box display="flex" alignItems="center">
          <Box
            component="span"
            height={{ xs: 12, xl: 16 }}
            width={{ xs: 12, xl: 16 }}
            mr={2}
            borderRadius="50%"
            bgcolor="primary.main"
          />
          <Box component="span" fontSize={14}>
            <IntlMessages id="dashboard.inProgress" />
          </Box>
        </Box>
        <Box ml="auto" display="flex" alignItems="center">
          <Box
            component="span"
            height={{ xs: 12, xl: 16 }}
            width={{ xs: 12, xl: 16 }}
            mr={2}
            borderRadius="50%"
            bgcolor="error.main"
          />
          <Box component="span" fontSize={14}>
            <IntlMessages id="common.actual" />
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default GoalProgress;
