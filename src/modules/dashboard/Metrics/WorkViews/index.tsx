import React from 'react';
import WorkViewsGraph from './WorkViewsGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import Box from '@material-ui/core/Box';
import { Fonts } from '../../../../shared/constants/AppEnums';
import AppCard from '../../../../@crema/core/AppCard';
import { WorkViewsData } from '../../../../types/models/dashboards/Metrics';

interface WorkViewsProps {
  data: WorkViewsData;
}

const WorkViews: React.FC<WorkViewsProps> = ({ data }) => {
  return (
    <AppCard
      height={1}
      contentStyle={{ display: 'flex', flexDirection: 'column' }}
    >
      <Box
        component="h3"
        mb={1}
        color="secondary.main"
        fontSize={20}
        fontWeight={Fonts.MEDIUM}
      >
        {data.views}
      </Box>
      <Box
        component="p"
        color="text.secondary"
        fontSize={14}
        fontWeight={Fonts.REGULAR}
      >
        <IntlMessages id="dashboard.workViews" />
      </Box>

      <Box mt="auto">
        <WorkViewsGraph data={data.graphData} />
      </Box>
    </AppCard>
  );
};

export default WorkViews;
