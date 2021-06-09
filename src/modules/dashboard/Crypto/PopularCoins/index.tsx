import React from 'react';
import PopularCoinsTable from './PopularCoinsTable';
import AppCard from '../../../../@crema/core/AppCard';
import { useIntl } from 'react-intl';
import { PopularCoinsData } from '../../../../types/models/dashboards/Crypto';

interface PopularCoinsProps {
  popularCoins: PopularCoinsData[];
}

const PopularCoins: React.FC<PopularCoinsProps> = ({ popularCoins }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      height="1"
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      title={messages['dashboard.popularCoins']}
      action={messages['common.viewAll']}
    >
      <PopularCoinsTable popularCoins={popularCoins} />
    </AppCard>
  );
};

export default PopularCoins;
