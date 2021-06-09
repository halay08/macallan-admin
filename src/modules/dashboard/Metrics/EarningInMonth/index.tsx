import React from 'react';
import EarningGraph from './EarningGraph';
import Box from '@material-ui/core/Box';
import Categories from './Categories';
import AppCard from '../../../../@crema/core/AppCard';
import { useIntl } from 'react-intl';
import { EarningInMonthData } from '../../../../types/models/dashboards/Metrics';

interface EarningInMonthProps {
  data: EarningInMonthData[];
}

const EarningInMonth: React.FC<EarningInMonthProps> = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['dashboard.earningInMonth']}
      footer={<Categories data={data} />}
      height={1}
    >
      <Box
        my={3}
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <EarningGraph data={data} />
      </Box>
    </AppCard>
  );
};

export default EarningInMonth;
