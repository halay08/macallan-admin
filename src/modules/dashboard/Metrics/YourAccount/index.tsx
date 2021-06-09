import React from 'react';
import AccountGraph from './AccountGraph';
import AppCard from '../../../../@crema/core/AppCard';
import { useIntl } from 'react-intl';
import Box from '@material-ui/core/Box';
import { AccountData } from '../../../../types/models/dashboards/Metrics';

interface YourAccountPorps {
  data: AccountData[];
}

const YourAccount: React.FC<YourAccountPorps> = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['dashboard.yourAccount']}
      height={1}
      contentStyle={{ display: 'flex', flexDirection: 'column' }}
    >
      <Box mt="auto">
        <AccountGraph data={data} />
      </Box>
    </AppCard>
  );
};

export default YourAccount;
