import React, { useState } from 'react';
import VisitsGraph from './VisitsGraph';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import { useIntl } from 'react-intl';
import Box from '@material-ui/core/Box';
import { Fonts } from '../../../../shared/constants/AppEnums';
import AppSelect from '../../../../@crema/core/AppSelect';
import AppCard from '../../../../@crema/core/AppCard';
import { VisitsData } from '../../../../types/models/dashboards/Metrics';

interface VisitsProps {
  data: VisitsData;
}

const Visits: React.FC<VisitsProps> = ({ data }) => {
  const [graphData, setGraphData] = useState(data.graphData.dataOne);

  const handleWeekChange = (value: string) => {
    switch (value) {
      case 'This Week':
        setGraphData(data.graphData.dataTwo);
        break;
      case 'Last Weeks':
        setGraphData(data.graphData.dataOne);
        break;
      case 'Last Month':
        setGraphData(data.graphData.dataThree);
        break;
      default:
        setGraphData(data.graphData.dataOne);
    }
  };

  const { messages } = useIntl();

  return (
    <AppCard
      title={messages['dashboard.visits']}
      action={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth']
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleWeekChange}
        />
      }
      height={1}
      footer={
        <Box
          width={1}
          mb={1}
          display="flex"
          alignItems="center"
          fontWeight={Fonts.MEDIUM}
          justifyContent="space-between"
          style={{ textTransform: 'uppercase' }}
        >
          <Box component="p" color="text.primary" fontSize={14}>
            <IntlMessages id="common.new" />
            <Box ml={2} component="span" color="primary.main">
              {data.new}
            </Box>
          </Box>
          <Box component="p" color="text.primary" fontSize={14}>
            <IntlMessages id="common.returning" />
            <Box ml={2} component="span" color="primary.main">
              {data.returning}
            </Box>
          </Box>
        </Box>
      }
    >
      <VisitsGraph data={graphData} />
    </AppCard>
  );
};

export default Visits;
